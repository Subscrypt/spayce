import { NextResponse } from 'next/server'
import { proposeTx } from "../../../utils/safe/api-kit/propose-transaction";
import { OperationType, SafeTransactionDataPartial } from '@safe-global/safe-core-sdk-types'



export async function GET() {
  const config = {
    RPC_URL: process.env.BASE_RPC_URL || "",
    SIGNER_ADDRESS_PRIVATE_KEY: process.env.DEPLOYER_ADDRESS_PRIVATE_KEY || "",
    SAFE_ADDRESS: process.env.SAFE_ADDRESS || "",
    TX_SERVICE_URL: process.env.BASE_SAFE_TX_SERVICE_URL || ""
  }
  const safeTransactionData: SafeTransactionDataPartial = {
    to: process.env.OWNER_1_ADDRESS || "",
    value: '1', // 1 wei
    data: '0x',
    operation: OperationType.Call
  }

  const safeAddress = await proposeTx(config, safeTransactionData)
  return NextResponse.json({ safeAddress })
}
