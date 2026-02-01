import { useState } from "react";

function useToggle(val){
   const[isOpen,setOpen]=useState(val)
   const toggle=()=> setOpen(val=>!val)

   return[isOpen,toggle]
}
export default useToggle