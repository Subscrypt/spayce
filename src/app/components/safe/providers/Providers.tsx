import { AccountAbstractionProvider } from "@/app/store/safe/accountAbstractionContext"

const Providers = ({ children }: { children: JSX.Element }) => {
  return (
    <AccountAbstractionProvider>{children}</AccountAbstractionProvider>
  )
}

export default Providers
