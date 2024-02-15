import Stripe from "stripe";
import { setPackages } from "@/core/redux/reducers/purchased-packages-reducer/purchased-packages-reducer";
import { useDispatch } from "react-redux";
import axios from "axios";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

const endpointSecret = process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET;

export default async function handler(req, res) {
  //   const dispatch = useDispatch();

  const body = JSON.stringify(req.body, null, 2);

  const header = stripe.webhooks.generateTestHeaderString({
    payload: body,
    secret: endpointSecret,
  });

  //   console.log("body: " + body);

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, header, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  switch (event.type) {
    case "checkout.session.completed":
      const checkoutSessionCompleted = event.data.object;
      console.log(
        `Payment success for session ID: ${checkoutSessionCompleted.id}`,
        checkoutSessionCompleted.metadata.course_id
      );
      const data = {
        course_id: checkoutSessionCompleted?.metadata?.course_id,
        order_creation_id: checkoutSessionCompleted?.id,
        razorpay_payment_id: checkoutSessionCompleted?.payment_intent,
        uid: checkoutSessionCompleted?.metadata?.uid,
      };
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/package/create-package-order`,
        data
      );

      // const userPackages = (await handleGet("/user/get-all-packages-purchased"))
      //   .data;

      // dispatch(setPackages(userPackages));
      break;

    default:
      console.warn(`Unhandled event type: ${event.type}`);
  }

  res.status(200).end();
}
