import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    addDoc
} from "firebase/firestore";
import products from "../data/data"


const firebaseConfig = {
    apiKey: "AIzaSyAM40U_R6mBAcntWXhHc0KImaEL1gyhukA",
    authDomain: "bazar-mayorista-caillet-bois.firebaseapp.com",
    projectId: "bazar-mayorista-caillet-bois",
    storageBucket: "bazar-mayorista-caillet-bois.appspot.com",
    messagingSenderId: "816949723779",
    appId: "1:816949723779:web:85be37c451ce348d4d91b6"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export default async function getItems() {
    const colectionProductsRef = collection(DB, "products");
    const documentSnapshot = await getDocs(colectionProductsRef);
    const documentsData = documentSnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        }
    });
    return documentsData;
}


export async function getSingleItem(idParams) {
    const docRef = doc(DB, "products", idParams);
    const docSnapShot = await getDoc(docRef);
    return {
        ...docSnapShot.data(),
        id: docSnapShot.id,
    }
}


export async function getItemsByCategory(categoryParams) {
    const collectionRef = collection(DB, "products");
    const queryCat = query(collectionRef, where("category", "==", categoryParams))
    const documentSnapshot = await getDocs(queryCat);
    const documentsData = documentSnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        };
    });
    return documentsData;
}


export async function createOrder(order){
const collectionRef = collection(DB, "orders");
const docOrder = await addDoc(collectionRef, order);
return(docOrder.id);
}


 async function exportArrayToFirestore(){
    const collectionRef = collection(DB, "products");
    for (let item of products) {
        item.index = item.id;
        delete item.id;
        let docOrder = await addDoc(collectionRef, item);
    }
 }