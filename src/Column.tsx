import {AppContainer, CardContainer, ColumnContainer, ColumnTitle} from "./style";
import React from "react";
import {Card} from "./Card";
import {AddNewItems} from "./AddNewItems";
import {useAppState} from "./state/AppstateContext";

type ColumnProps={
    text:string,
    id:string
}

export  const Column=({text,id}:ColumnProps)=>{
    const {getTaskbyListsId}=useAppState()
    const tasks=getTaskbyListsId(id)
   return(
       <ColumnContainer>
           <ColumnTitle>{text}</ColumnTitle>
           {tasks.map((task)=>
               <Card text={task.text} id={task.id}/>
           )}
           <AddNewItems dark onAdd={()=>console.log("add bew")} toggleButton={`+ Add another text`}/>

       </ColumnContainer>
   )
}