import React from "react"
import { AccountAbstractionProvider } from "../../../store/safe/accountAbstractionContext"


const Providers = ({ children }: { children: JSX.Element }) => {
  return (
    <AccountAbstractionProvider>{children}</AccountAbstractionProvider>
  )
}

export default Providers
