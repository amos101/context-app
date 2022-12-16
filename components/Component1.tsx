import {useContext} from "react"
import AppContext from "../components/AppContext"
import styles from "../styles/Home.module.css"
import Component2 from "./Component2"

type contextType = {
  nameContext: string
  setNameContext: (name: string) => void
}

export default function Conponent1() {
  const context = useContext(AppContext) as contextType

  const updateContext = () => {
    context.setNameContext("amos1")
  }

  return (
    <>
      <h3>コンポーネント1</h3>
      <p>{context.nameContext}</p>
      <button onClick={updateContext}>
        update context
      </button>
      <br />
      <Component2 />
    </>
  )
}