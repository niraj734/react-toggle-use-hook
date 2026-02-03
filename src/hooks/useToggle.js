import { useState } from "react";
function useToggle(val){
   const[value,setValue]=useState(val)
   const toggle=()=>setValue(val=>!val)
   return[value,toggle]
}
export default useToggle