import db from "../firebase/index";
import { collection, getDocs } from "firebase/firestore";

const getAlbum = async () => {
  const albumCol = collection(db, "article");
  const albumSnapshot = await getDocs(albumCol);
  const albumList = albumSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return albumList;
};
export default getAlbum;
