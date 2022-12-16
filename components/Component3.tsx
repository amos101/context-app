import {useContext} from "react"
import AppContext from "../components/AppContext"
import styles from "../styles/Home.module.css"

type contextType = {
  nameContext: string
  setNameContext: (name: string) => void
}

export default function Conponent2() {
  const context = useContext(AppContext) as contextType

  const updateContext = () => {
    context.setNameContext("amos3")
  }


  return (
    <>
      <h3>コンポーネント3</h3>
      <p>{context.nameContext}</p>
      <button onClick={updateContext}>
        update context
      </button>
    </>
  )
}