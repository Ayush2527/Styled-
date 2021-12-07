import {useState, useMemo} from "react";



export const darkTheme ={
    bgcolor:"black",
    text:"white",
    formcolor:"#232f34"
  }
  
export const lightTheme ={
    bgcolor:"#ccc",
    text:"black",
    formcolor:"white"
  } 

export function useTheme(){
const  [mode, setMode] = useState('light');

const handleModeChange = e => {
    const isChecked = e.target.checked;
    setMode(isChecked ? "dark":"light");
   }
   const isDarkMode = useMemo( () => mode ==="dark", [mode]);
   return{
       isDarkMode,
       handleModeChange
   }
}