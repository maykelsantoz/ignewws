import { loadStripe } from '@stripe/stripe-js'

export async function getSripeJs() {
  const striepJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

  return striepJs
}