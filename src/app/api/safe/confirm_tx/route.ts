import { NextResponse } from 'next/server'
import { confirmTx } from "../../../utils/safe/api-kit/confirm-transaction";


export async function GET(safeTxHash: string) {
  const config = {
    RPC_URL: process.env.BASE_RPC_URL || "",
    SIGNER_ADDRESS_PRIVATE_KEY: process.env.DEPLOYER_ADDRESS_PRIVATE_KEY || "",
    SAFE_ADDRESS: process.env.SAFE_ADDRESS || "",
    TX_SERVICE_URL: process.env.BASE_SAFE_TX_SERVICE_URL || "",
    SAFE_TX_HASH: safeTxHash
  }

  await confirmTx(config)
  return NextResponse.json('ok')
}
