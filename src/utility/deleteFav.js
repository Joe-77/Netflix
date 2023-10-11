import {  useMutation ,  useQueryClient } from "react-query"
import { db } from "../Firebase/firebaseConfig"
import { deleteDoc, doc } from "firebase/firestore"

export const deleteFav = ()=> {
 
  const queryClient = useQueryClient()

  const delFav = async(id)=>{

    const favRef = doc(db , 'Fav' , id)

    return await deleteDoc(favRef)

  }

  return useMutation({
    mutationFn : (id)=> delFav(id),onSettled : ()=> {
      queryClient.invalidateQueries({ queryKey: ["Fav"] });
    }
  })
}