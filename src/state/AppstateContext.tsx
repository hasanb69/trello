import {createContext, FC,useContext} from "react";

type task={
    id:string,
    text:string
}

type List={
    id:string,
    text:string,
    tasks:task[]
}

export type AppState={
    lists:List[]
}

const appData:AppState={
    lists:[
        {
            id:"0",
            text:'to do',
            tasks:[{id:"c0",text:"Generate app scaffold"}]
        },
        {
            id:"1",
            text:'in progress',
            tasks:[{id:"c2",text:"learn typescript"}]
        },
        {
            id:"2",
            text:'done',
            tasks:[{id:"c3",text:"begin to use static type"}]
        },
    ]
}

type AppStateContextProps={
    lists:List[],
    getTaskbyListsId(id:string):task[]
}
const AppStateContext=createContext<AppStateContextProps>({} as AppStateContextProps)
export const AppStateProvider=({children}:any)=>{
    const {lists}=appData
    const getTaskbyListsId=(id:string)=>{
        return lists.find(list=>list.id === id)?.tasks || []
    }
    return(
        <AppStateContext.Provider value={{lists,getTaskbyListsId}}>{children}</AppStateContext.Provider>
    )
}

export const useAppState=()=>{
    return useContext(AppStateContext)
}