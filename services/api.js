import {
  postsRef,
  storage,
  ref,
  listAll,
  getDownloadURL,
  db,
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  orderBy,
  Timestamp,
} from "../firebase/firebase";

let tracks = [];

export const getTracks = async () => {
  if (tracks.length > 0) return tracks;
  // Create a reference under which you want to list
  const listRef = ref(storage, "/tucu_sauvage");
  // Find all the prefixes and items.
  try {
    const res = await listAll(listRef);
    tracks = await Promise.allSettled(
      res.items.map(async (itemRef, index) => {
        const dwUrl = await getDownloadURL(itemRef);
        return {
          downloadUrl: dwUrl,
          name: itemRef.name,
          path: itemRef.fullPath,
        };
      })
    );
    return tracks;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getPosts = async () => {
  // const querySnapshot = await getDocs(collection(db, "tucu-posts"))
  const q = query(postsRef, orderBy("timestamp", "asc"));
  const querySnapshot = await getDocs(q);
  const posts = [];
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
  return posts;
};

export const toFirebaseTimestamp = (date) => {
  return Timestamp.fromDate(date);
};

export const setPost = async (post) => {
  const res = await setDoc(doc(db, "tucu-posts", Date.now().toString()), {
    ...post,
  });
};
