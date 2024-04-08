
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"



export const Box = () => {

    const theme = useContext(ThemeContext)
    return <div style={{backgroundColor:theme.primary.main,width:100,height:100} }>Theme Context</div>
}