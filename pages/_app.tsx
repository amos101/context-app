import '../styles/globals.css'
import { useState } from "react"
import AppContext from "../components/AppContext"

const App = ({ Component, pageProps }: any) => {
  const [nameContext, setNameContext] = useState("Amos")

  return (
    <AppContext.Provider value={{nameContext, setNameContext}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default App