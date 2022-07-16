import {useState} from "react";
import {AddItemButton} from "./style";
import {NewItemForm} from "./NewItemForm";

type AddNewItemsProps={
    onAdd(text:string):(void),
     toggleButton:string,
     dark?:boolean
}

export const AddNewItems=({onAdd,toggleButton,dark}:AddNewItemsProps)=>{
     const [showForm,setShowForm]=useState(false)
     if(showForm){
       return <NewItemForm
           onAdd={
               (text)=> {
                   onAdd(text);
                   setShowForm(false)
               }
           }
       />
     }
    return(
     <AddItemButton dark={dark} onClick={()=>setShowForm(true)}>{toggleButton}</AddItemButton>
    )
}