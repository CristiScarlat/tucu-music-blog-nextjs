import { storage, ref, listAll, getDownloadURL } from '../firebase/firebase';

let tracks = [];

export const getTracks = async () => {
    if(tracks.length > 0)return tracks
    // Create a reference under which you want to list
    const listRef = ref(storage, '/tucu_sauvage');
    // Find all the prefixes and items.
    try {
        const res = await listAll(listRef)
        tracks = await Promise.allSettled(res.items.map(async (itemRef, index) => {
            const dwUrl = await getDownloadURL(itemRef)
            return {
                downloadUrl: dwUrl,
                name: itemRef.name,
                path: itemRef.fullPath
            }
        }));
        return tracks;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}