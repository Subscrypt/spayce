import {User, Provider, Plan, Subscription, SubscriptionMember, Payment, Prisma} from '@prisma/client'
import NextCrud, {PrismaAdapter} from '@premieroctet/next-crud'
import {prisma} from '@/app/db'
import {NextApiHandler} from 'next'

const handler: NextApiHandler = async (req, res) => {
    const nextCrudHandler = await NextCrud({
        adapter: new PrismaAdapter<User | Provider | Plan | Subscription | SubscriptionMember | Payment , Prisma.ModelName>({
            prismaClient: prisma,
        }),
        swagger: {
            enabled: true,
            title: 'API CRUD',
            apiUrl: process.env.API_URL as string,
            config: {
                User: {
                    tag: {
                        name: 'Users',
                    },
                },
                Provider: {
                    tag: {
                        name: 'Providers',
                    },
                },
                Plan: {
                    tag: {
                        name: 'Plans',
                    },
                },
                Subscription: {
                    tag: {
                        name: 'Subscriptions',
                    },
                },
                SubscriptionMember: {
                    tag: {
                        name: 'Members',
                    },
                },
                Payment: {
                    tag: {
                        name: 'Payments',
                    },
                },
            },
        },
    })

    return nextCrudHandler(req, res)
}

export default handler
