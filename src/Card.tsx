import { CardContainer} from "./style";
type CardProps={
    text:string,
    id:string
}
export  const Card=({text,id}:CardProps)=>{
    return(
        <CardContainer id={id}>{text}</CardContainer>
    )
}