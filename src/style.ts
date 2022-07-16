import styled from "styled-components";


export const AppContainer=styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    height: 100%;
    width: 100%;
    padding: 50px;

`

export const ColumnContainer=styled.div`
   background-color: #61dafb;
   width: 300px;
   flex-grow: 0;
  padding: 10px;
   border-radius: 3px;
  margin-right: 20px;
`

export const ColumnTitle=styled.div`
   font-weight: bold;
   padding: 10px;
`

export const CardContainer=styled.div`
   background-color: #fff;
  cursor: pointer;
   margin-bottom: 0.5rem;
   max-width: 300px;
   border-radius: 3px;
   padding:1rem;
`

type  AddItemButtonProps={
    dark?:boolean
}

export const AddItemButton=styled.button<AddItemButtonProps>`
     background-color: antiquewhite;
     border-radius: 3px;
     border: none;
     color: ${(props => props.dark?"#000":"#fff")};
     max-width: 300px;
     text-align: left;
     padding: 10px;
     &:hover{
        background-color: aquamarine;
     }
`

export const NewItemFormContainer=styled.div`
      max-width: 300px;
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;

`

export const NewItemButton=styled.button`
     background-color: #61dafb;
      border-radius: 3px;
     border: none;
     text-align: center;
     padding: 6px 15px;
`

export const NewItemInput=styled.input`
      border-radius: 3px;
      border: none;
      box-shadow: #091e4240 0px 1px 0px 0px ;
      padding: 10px;
      width: 100%;
      margin-bottom: 2rem;
  
`