import { useContext } from "react"
import Link from "next/link"
import AppContext from "../components/AppContext"
import Component1 from "../components/Component1"

type contextType = {
  nameContext: string
  setNameContext: (name: string) => void
}

export default function Home() {
  const context = useContext(AppContext) as contextType

  return (
    <div style={{textAlign: 'center'}}>
      <h1>page1</h1>
      <Link rel="stylesheet" href="/page2">
        <h2 style={{color: 'blue'}}>go page2</h2>
      </Link>
      <p>{context.nameContext}</p>
      <br />
      <Component1 />
    </div>
  )
}
