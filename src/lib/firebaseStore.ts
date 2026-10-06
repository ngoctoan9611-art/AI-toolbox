import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  addDoc, 
  query, 
  orderBy, 
  setDoc, 
  doc, 
  getDoc,
  increment,
  updateDoc,
  onSnapshot
} from "firebase/firestore";
import firebaseConfig from "../../firebase-applet-config.json";

const app = initializeApp(firebaseConfig);
const dbId = (firebaseConfig as any).firestoreDatabaseId || "(default)";
export const db = getFirestore(app, dbId);

export interface Contribution {
  id?: string;
  type: "website" | "tool";
  name: string;
  link: string;
  reason: string;
  timestamp: string;
}

export const addContribution = async (name: string, link: string, reason: string, type: "website" | "tool" = "tool") => {
  const contribData = {
    name: name.trim(),
    link: (link || "").trim(),
    reason: (reason || "").trim(),
    type,
    timestamp: new Date().toISOString()
  };
  return await addDoc(collection(db, "contributions"), contribData);
};

export const getContributions = async (): Promise<Contribution[]> => {
  const q = query(collection(db, "contributions"), orderBy("timestamp", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Contribution));
};

export const incrementGlobalStat = async (field: "visits" | "questions") => {
  const globalRef = doc(db, "stats", "global");
  try {
    // We use setDoc with merge: true which will create the doc if it doesn't exist
    // and initialize the field correctly with increment(1)
    await setDoc(globalRef, {
      [field]: increment(1)
    }, { merge: true });
    console.log(`[Firebase] successfully incremented ${field}`);
  } catch (e: any) {
    console.error(`[Firebase] Failed to increment ${field}:`, e);
  }
};

export const subscribeToGlobalStats = (onUpdate: (stats: { visits: number, questions: number }) => void) => {
  const globalRef = doc(db, "stats", "global");
  return onSnapshot(globalRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.data();
      onUpdate({
        visits: data.visits || 0,
        questions: data.questions || 0
      });
    } else {
      onUpdate({ visits: 0, questions: 0 });
    }
  });
};
