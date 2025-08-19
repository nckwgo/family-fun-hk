// app/api/webhooks/route.ts (Next.js App Router)
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30",
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig  = (await headers()).get("stripe-signature")!;
  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // Handle events you enabled in Stripe dashboard:
    // if (event.type === "checkout.session.completed") { ... }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}
export const config = { api: { bodyParser: false } }; // (kept for clarity; App Router already gives raw body)

