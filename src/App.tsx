import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppContainer} from "./style";
import {Card} from "./Card";
import {Column} from "./Column";
import {AddNewItems} from "./AddNewItems";
import {useAppState} from "./state/AppstateContext";

function App() {
    const {lists}=useAppState()
  return (

    <div className="App">
       <AppContainer>
           {lists.map((list)=>
              <Column text={list.text} id={list.id} key={list.id}/>
           )}

             <AddNewItems onAdd={()=>console.log("add bew")} toggleButton={`+ Add another texgfgt`}></AddNewItems>
       </AppContainer>
    </div>
  );
}

export default App;
