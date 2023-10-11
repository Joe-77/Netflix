import { collection, getDocs } from "firebase/firestore"
import { useQuery } from "react-query"
import { db } from "../Firebase/firebaseConfig"

export const getFav = ()=>{


  const getAllFavItems = async()=>{

    const favRef = collection(db,'Fav')

    const data = await getDocs(favRef)

    const fav = data?.docs.map((doc)=> ({...doc.data(),id : doc.id}))

    return fav;
  }

  return useQuery({
    queryKey : ["Fav"],
    queryFn : ()=> getAllFavItems()
  })
}