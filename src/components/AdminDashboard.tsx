import React, { useState, useEffect } from "react";
import { Language } from "../types";
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  ArrowUpRight, 
  X, 
  RefreshCw, 
  Check, 
  AlertCircle, 
  History,
  FileSpreadsheet,
  Settings,
  LogOut
} from "lucide-react";
import { initAuth, googleSignIn, logout } from "../lib/firebaseAuth";
import { subscribeToGlobalStats, getContributions, Contribution as FireContribution } from "../lib/firebaseStore";

interface Stats {
  visits: number;
  questions: number;
}

interface AdminDashboardProps {
  currentLang: Language;
  onClose: () => void;
}

const ADMIN_EMAIL = "ngoctoan9611@gmail.com";

export default function AdminDashboard({ currentLang, onClose }: AdminDashboardProps) {
  const [stats, setStats] = useState<Stats>({ visits: 0, questions: 0 });
  const [contributions, setContributions] = useState<FireContribution[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [errorCount, setErrorCount] = useState(0);
  
  // Sheet Sync State
  const [spreadsheetId, setSpreadsheetId] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [showSyncConfig, setShowSyncConfig] = useState(false);

  const fetchAll = async (forceAdmin = false) => {
    if (loading) return;
    setLoading(true);
    try {
      if (!isAuthorized && !forceAdmin) {
        // Stats are now real-time, just loading contributions if admin
        setLoading(false);
        setLastUpdated(new Date());
        return;
      }
      const contribData = await getContributions();
      setContributions(contribData);
      setLastUpdated(new Date());
      fetchSheetsConfig();
    } catch (error) {
      console.error("Error fetching admin data:", error);
      setErrorCount(prev => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Real-time stats subscription
    const unsubscribeStats = subscribeToGlobalStats((newStats) => {
      setStats(newStats);
      setLastUpdated(new Date());
    });
    return () => unsubscribeStats();
  }, []);

  useEffect(() => {
    const savedToken = sessionStorage.getItem("google_access_token");
    if (savedToken) setAccessToken(savedToken);

    const unsubscribe = initAuth(
      async (user) => {
        setAdminUser(user);
        setIsAdmin(true);
        const authorized = user?.email?.toLowerCase().trim() === ADMIN_EMAIL.toLowerCase().trim();
        setIsAuthorized(authorized);
        if (authorized) fetchAll(true);
      },
      () => {
        setAdminUser(null);
        setAccessToken(null);
        sessionStorage.removeItem("google_access_token");
        setIsAdmin(false);
        fetchAll();
      }
    );
    return () => unsubscribe();
  }, []);

  const fetchSheetsConfig = async () => {
    try {
      const res = await fetch("/api/sheets-config");
      if (res.ok) {
        const data = await res.json();
        setSpreadsheetId(data.spreadsheetId || "");
      }
    } catch (err) {
      console.error("Error loading sheets config:", err);
    }
  };

  const handleAdminLogin = async () => {
    try {
      const result = await googleSignIn();
      if (result && result.accessToken) {
        setAdminUser(result.user);
        setAccessToken(result.accessToken);
        sessionStorage.setItem("google_access_token", result.accessToken);
        setIsAdmin(true);
        const authorized = result.user?.email?.toLowerCase().trim() === ADMIN_EMAIL.toLowerCase().trim();
        setIsAuthorized(authorized);
        if (authorized) fetchAll(true);
      }
    } catch (err) {
      console.error("Admin Login Error:", err);
    }
  };

  const handleAdminLogout = async () => {
    try {
      await logout();
      setAccessToken(null);
      sessionStorage.removeItem("google_access_token");
      setIsAdmin(false);
      setIsAuthorized(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveConfig = async () => {
    try {
      const res = await fetch("/api/sheets-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spreadsheetId })
      });
      if (res.ok) {
        alert("Saved ID successfully!");
        setShowSyncConfig(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSyncToSheets = async () => {
    if (!isAuthorized) return;
    if (!accessToken) {
      setSyncStatus({ type: 'error', message: "Session expired? Please Sign In again to refresh Google Sheets access." });
      return;
    }
    if (!spreadsheetId) {
      setSyncStatus({ type: 'error', message: "Please set Spreadsheet ID first!" });
      return;
    }
    setSyncing(true);
    setSyncStatus(null);
    try {
      let cleanId = spreadsheetId.trim();
      if (cleanId.includes("/")) {
        const match = cleanId.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
        if (match) cleanId = match[1];
      }
      
      console.log(`[Sync] Starting sync for ID: ${cleanId}`);

      const metaRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${cleanId}?fields=sheets.properties.title`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      
      if (!metaRes.ok) {
        const errData = await metaRes.json().catch(() => ({}));
        throw new Error(errData.error?.message || `Connection failed (Status ${metaRes.status})`);
      }

      const metaData = await metaRes.json();
      const rawSheetName = metaData.sheets?.[0]?.properties?.title || "Sheet1";
      // Quote sheet name if it has spaces or special characters
      const sheetName = rawSheetName.includes(" ") ? `'${rawSheetName}'` : rawSheetName;
      
      console.log(`[Sync] Target sheet: ${rawSheetName}`);

      const headerRow = ["ID", "Type", "Name", "Link", "Reason", "Timestamp"];
      const rows = contributions.map(item => [
        item.id || "",
        item.type,
        item.name,
        item.link,
        item.reason,
        item.timestamp ? new Date(item.timestamp).toLocaleString("vi-VN") : ""
      ]);
      const values = [headerRow, ...rows];

      // Clear existing values
      const clearRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${cleanId}/values/${encodeURIComponent(sheetName)}!A1:Z5000:clear`, {
        method: "POST",
        headers: { 
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({})
      });

      if (!clearRes.ok) {
        const errData = await clearRes.json().catch(() => ({}));
        console.warn("[Sync] Clear failed, but attempting write anyway...", errData);
      }

      // Write new values
      const writeRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${cleanId}/values/${encodeURIComponent(sheetName)}!A1:F?valueInputOption=USER_ENTERED`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ range: `${sheetName}!A1:F`, majorDimension: "ROWS", values })
      });

      if (!writeRes.ok) {
        const errData = await writeRes.json().catch(() => ({}));
        throw new Error(errData.error?.message || "Sync write operation failed");
      }

      setSyncStatus({ type: 'success', message: `Successfully synced ${contributions.length} items to "${rawSheetName}"` });
    } catch (err: any) {
      console.error("[Sync] Error:", err);
      setSyncStatus({ type: 'error', message: err.message || "Sync failed" });
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-white dark:bg-stone-950 z-[2000] flex flex-col overflow-hidden animate-in fade-in duration-300">
      <div className="h-1 bg-gradient-to-r from-[#F58220] via-blue-500 to-[#00AEEF]"></div>
      <header className="px-8 py-5 flex items-center justify-between border-b border-stone-100 dark:border-stone-900 bg-white/50 dark:bg-stone-950/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#121C4F] dark:bg-stone-800 rounded-2xl flex items-center justify-center rotate-3 shadow-xl shadow-blue-900/10">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-[#121C4F] dark:text-stone-100 flex items-center gap-2">
              Internal Dashboard
            </h1>
            <div className="flex items-center gap-3">
               <span className="text-stone-400 text-[10px] font-black uppercase tracking-widest">
                 Monitoring & Management
               </span>
               <button 
                  onClick={() => fetchAll()} 
                  disabled={loading}
                  className="p-1 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition-all group"
                  title="Refresh data"
               >
                 <RefreshCw className={`w-3 h-3 text-stone-400 group-hover:text-blue-500 ${loading ? 'animate-spin' : ''}`} />
               </button>
               {lastUpdated && (
                 <span className="text-stone-300 text-[9px] uppercase tracking-tighter">
                   • Updated: {lastUpdated.toLocaleTimeString()}
                 </span>
               )}
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-2.5 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl transition-all cursor-pointer">
          <X className="w-6 h-6 text-stone-400" />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-stone-900 p-6 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 bg-[#00AEEF]/10 rounded-2xl flex items-center justify-center">
              <Users className="w-7 h-7 text-[#00AEEF]" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-stone-400 mb-1">Total Visits</p>
              <h2 className="text-3xl font-black text-stone-800 dark:text-stone-100">{(stats.visits || 0).toLocaleString()}</h2>
            </div>
          </div>
          <div className="bg-white dark:bg-stone-900 p-6 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 bg-[#F58220]/10 rounded-2xl flex items-center justify-center">
              <MessageSquare className="w-7 h-7 text-[#F58220]" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-stone-400 mb-1">AI Questions</p>
              <h2 className="text-3xl font-black text-stone-800 dark:text-stone-100">{(stats.questions || 0).toLocaleString()}</h2>
            </div>
          </div>
          <div className="bg-white dark:bg-stone-900 p-6 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
              <ArrowUpRight className="w-7 h-7 text-emerald-500" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-stone-400 mb-1">Proposals</p>
              <h2 className="text-3xl font-black text-stone-800 dark:text-stone-100">{contributions.length}</h2>
            </div>
          </div>
        </div>

        {!isAuthorized ? (
          <div className="bg-[#121C4F] rounded-[2rem] p-12 text-center space-y-6 shadow-2xl shadow-blue-900/20">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="w-10 h-10 text-[#00AEEF]" />
            </div>
            <div className="max-w-md mx-auto space-y-2">
              <h3 className="text-2xl font-black text-white">Authorized Personnel Only</h3>
              <p className="text-blue-200 text-sm font-medium leading-relaxed">
                You must be logged in as an administrator to manage contributions and synchronization settings.
              </p>
            </div>
            <button 
              onClick={handleAdminLogin}
              className="bg-white text-[#121C4F] px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-xl cursor-point"
            >
              Sign In with Google Admin
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-stone-800 overflow-hidden border-2 border-white dark:border-stone-700 shadow-lg">
                    {adminUser?.photoURL ? <img src={adminUser.photoURL} alt="admin" /> : <div className="w-full h-full bg-[#00AEEF]"></div>}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-stone-800 dark:text-stone-100">{adminUser?.displayName || "Administrator"}</h4>
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">Active Sync Session</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setShowSyncConfig(!showSyncConfig)} className="p-3 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-2xl hover:bg-stone-200 transition-all cursor-pointer">
                    <Settings className="w-5 h-5" />
                  </button>
                  <button onClick={handleAdminLogout} className="p-3 bg-rose-50 text-rose-500 rounded-2xl hover:bg-rose-100 transition-all cursor-pointer">
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
             </div>

             {showSyncConfig && (
               <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 rounded-[2rem] space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileSpreadsheet className="w-6 h-6 text-emerald-500" />
                      <h3 className="text-lg font-black text-[#121C4F] dark:text-stone-100 uppercase tracking-wider">Sync Configuration</h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest pl-1">Spreadsheet ID or URL</label>
                    <input 
                      type="text" 
                      value={spreadsheetId}
                      onChange={(e) => setSpreadsheetId(e.target.value)}
                      placeholder="e.g. 1A2B3C4D5E6F..."
                      className="w-full bg-white dark:bg-stone-950 border border-stone-100 dark:border-stone-800 p-4 rounded-2xl text-sm font-mono text-stone-700 dark:text-stone-200 outline-none focus:ring-2 ring-emerald-500/20"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button onClick={handleSaveConfig} className="flex-1 bg-stone-200 dark:bg-stone-800 font-black text-xs py-4 rounded-2xl cursor-pointer hover:bg-stone-300">Save ID</button>
                    <button 
                      onClick={handleSyncToSheets}
                      disabled={syncing}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs py-4 rounded-2xl cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {syncing ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Sync Now"}
                    </button>
                  </div>

                  {syncStatus && (
                    <div className={`p-4 rounded-2xl border flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300 ${
                      syncStatus.type === 'success' 
                        ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400' 
                        : 'bg-rose-50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400'
                    }`}>
                      {syncStatus.type === 'success' ? <Check className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                      <p className="text-sm font-bold leading-tight">{syncStatus.message}</p>
                    </div>
                  )}
               </div>
             )}

             <div className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-[2rem] overflow-hidden shadow-sm">
                <div className="px-8 py-6 bg-stone-50/50 dark:bg-stone-950/50 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
                  <h3 className="text-sm font-black text-[#121C4F] dark:text-stone-100 uppercase tracking-widest">Community Proposals</h3>
                  <button onClick={() => fetchAll(true)} className="p-2 text-stone-400 hover:text-[#00AEEF] transition-all cursor-pointer">
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  </button>
                </div>
                <div className="divide-y divide-stone-100 dark:divide-stone-800">
                  {contributions.length === 0 ? (
                    <div className="p-20 text-center text-stone-400 font-medium italic">No proposals yet</div>
                  ) : (
                    contributions.map(item => (
                      <div key={item.id} className="p-8 hover:bg-stone-50/30 dark:hover:bg-stone-800/30 transition-colors group">
                        <div className="flex gap-6">
                           <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center font-bold text-xl ${item.type === 'website' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                             {item.type === 'website' ? '🚀' : '🛠️'}
                           </div>
                           <div className="flex-1 space-y-4">
                              <div className="flex items-start justify-between">
                                 <div>
                                    <h5 className="text-lg font-black text-stone-800 dark:text-stone-100 group-hover:text-[#F58220] transition-colors">{item.name}</h5>
                                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-tight">{item.type} proposal • {item.timestamp ? new Date(item.timestamp).toLocaleString() : "Date unknown"}</p>
                                 </div>
                                 {item.link && (
                                   <a href={item.link} target="_blank" rel="noreferrer" className="p-2.5 bg-stone-100 dark:bg-stone-800 text-stone-400 hover:text-blue-500 rounded-xl transition-all">
                                      <ArrowUpRight className="w-5 h-5" />
                                   </a>
                                 )}
                              </div>
                              <div className="bg-stone-50 dark:bg-stone-950 p-4 rounded-2xl border border-stone-100 dark:border-stone-800">
                                 <p className="text-sm text-stone-600 dark:text-stone-300 font-medium leading-relaxed">{item.reason}</p>
                              </div>
                           </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
             </div>
          </div>
        )}
      </main>
      
      <footer className="px-8 py-4 border-t border-stone-100 dark:border-stone-900 bg-white/50 dark:bg-stone-950/50 backdrop-blur-md text-center">
        <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
          AI Tool Hub Performance Monitor v2.1 (Firestore Optimized)
        </p>
      </footer>
    </div>
  );
}
