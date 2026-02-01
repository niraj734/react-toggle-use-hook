
import { useState } from "react";

function useHide(val){
    const[isHide,setHide]=useState(val)
    const hide=()=>setHide(false)
    
    return[isHide,hide]
}
export default  useHide
