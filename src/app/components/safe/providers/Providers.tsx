import { AccountAbstractionProvider } from "@/app/store/safe/accountAbstractionContext"
import { Suspense } from "react"
import { createContext } from "vm"



const Providers = ({ children }: { children: JSX.Element }) => {
  return (
    <AccountAbstractionProvider>{children}</AccountAbstractionProvider>
  )
}

export default Providers
