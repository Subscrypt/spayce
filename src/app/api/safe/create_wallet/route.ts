import { NextResponse } from 'next/server'
import { deploySafe } from "../../../utils/safe/protocol-kit/deploy-safe";


export async function GET() {
  const config = {
    RPC_URL: process.env.BASE_RPC_URL || "",
    DEPLOYER_ADDRESS_PRIVATE_KEY: process.env.DEPLOYER_ADDRESS_PRIVATE_KEY || "",
    DEPLOY_SAFE: {
      OWNERS: [process.env.DEPLOYER_ADDRESS || "", process.env.OWNER_1_ADDRESS || "", process.env.OWNER_2_ADDRESS || ""],
      THRESHOLD: 2,
      SALT_NONCE: '0'
    }
  }
  
  const safeAddress = await deploySafe(config)
  return NextResponse.json({ safeAddress })
}
