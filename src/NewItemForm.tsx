import React, {ChangeEvent, useState} from "react";
import {NewItemButton, NewItemFormContainer, NewItemInput} from "./style";
import {UseFocus} from "./utils/useFocus";


type NewItemFormProps={
    onAdd(text:string):void
}
 export const NewItemForm=({onAdd}:NewItemFormProps)=>{
    const [text,setText]=useState<any>()
     const inputRef=UseFocus()
     const handleAddText=(event:React.KeyboardEvent<HTMLInputElement>)=>{
         if(event.key ==='Enter'){
             onAdd(text)
         }
     }
     return(
       <NewItemFormContainer>
             <NewItemInput
                 ref={inputRef}
                 value={text}
                 onKeyPress={handleAddText}
                 onChange={(e:ChangeEvent<HTMLInputElement>)=>{setText(e.target.value)}}
             />
           <NewItemButton onClick={()=>onAdd(text)}>
               Click
           </NewItemButton>
       </NewItemFormContainer>
     )

 }