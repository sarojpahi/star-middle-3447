import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./Firebase";

const ref = collection(db, "Users");
export const addUser = (data, id) => {
  const singleUser = doc(db, "Users", id);
  return setDoc(singleUser, data);
};
export const UpdateUserData = (data, id) => {
  const singleUser = doc(db, "User", id);
  return updateDoc(singleUser, data);
};
export const getUsers = () => {
  return getDocs(ref);
};
export const getUser = (id) => {
  const user = doc(db, "Users", id);
  return getDoc(user);
};
