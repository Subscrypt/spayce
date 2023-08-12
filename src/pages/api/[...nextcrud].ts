import {User, Subscription, Payment, Provider, Prisma} from '@prisma/client'
import NextCrud, {PrismaAdapter} from '@premieroctet/next-crud'
import {prisma} from '@/app/db'
import {NextApiHandler} from 'next'

const handler: NextApiHandler = async (req, res) => {
    const nextCrudHandler = await NextCrud({
        adapter: new PrismaAdapter<User | Subscription | Payment | Provider, Prisma.ModelName>({
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
                Subscription: {
                    tag: {
                        name: 'Subscriptions',
                    },
                },
                Payment: {
                    tag: {
                        name: 'Payments',
                    },
                },
                Provider: {
                    tag: {
                        name: 'Providers',
                    },
                },
            },
        },
    })

    return nextCrudHandler(req, res)
}

export default handler
