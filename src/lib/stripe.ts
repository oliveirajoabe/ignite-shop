import Stripe from 'stripe'

const key = process.env.STRIPE_SECRETE_KEY

export const stripe = new Stripe(key as string, {
    apiVersion: '2022-11-15',
    appInfo: { name: 'Ignite Shop' }
})