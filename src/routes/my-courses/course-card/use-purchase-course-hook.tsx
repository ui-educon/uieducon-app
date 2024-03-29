import { getUid, handleGet, handlePost } from "@/core/api-calls/Axios";
import { getRazorpayObjectForCourseCheckout } from "@/core/api-calls/checkout";
import { useAppSelector } from "@/core/redux/hooks";
import { setPackages } from "@/core/redux/reducers/purchased-packages-reducer/purchased-packages-reducer";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const usePurchaseCourseHook = (courseId: String, pricingINR: Number) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { currentUser } = useAppSelector((state) => state.authState);
  const [showButtonLoader, setShowButtonLoader] = useState(false);

  // *************************************************
  //      ALL HELPER FUNCTIONS
  // *************************************************

  // function loadScript(src: string) {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // }

  // *************************************************
  //      AFTER PURCHASE HANDLER FUNCTION
  // *************************************************

  // async function razorpaySuccessHandler() {}

  // *************************************************
  //      SPAWN RAZORPAY HANDLER FUNCTION
  // *************************************************

  // const displayRazorpay = async (razorpayPricing: any) => {
  //   console.log("razorpayPricing", razorpayPricing);

  //   //Load Razorpay script
  //   const isScriptLoaded = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );

  //   if (!isScriptLoaded) {
  //     alert("Razorpay SDK failed to load");
  //     setShowButtonLoader(false);
  //     return;
  //   }

  //   // Define Configuration
  //   const razorpayConfiguration: any = {
  //     key: "rzp_test_Ias0ehV3Ab3Fpk",
  //     name: "UI Educon Pvt. Ltd",
  //     description: "UI Educon Course",
  //     order_id: razorpayPricing?.id,
  //     amount: pricingINR?.toString(),
  //     handler: async function (response: any) {
  //       const data = {
  //         course_id: courseId,
  //         order_creation_id: razorpayPricing?.id,
  //         razorpay_payment_id: response.razorpay_payment_id,
  //       };
  //       const result = await handlePost(
  //         "/package/create-package-order",
  //         data,
  //         {},
  //         true
  //       );

  //       const userPackages = (
  //         await handleGet("/user/get-all-packages-purchased")
  //       ).data;

  //       dispatch(setPackages(userPackages));
  //       router.push(`/courses/${courseId}/learn`);
  //     },
  //     prefill: {
  //       name: currentUser?.displayName,
  //       email: currentUser?.email,
  //     },
  //     modal: {
  //       ondismiss: function () {
  //         setShowButtonLoader(false);
  //       },
  //     },
  //     theme: {
  //       color: "#61dafb",
  //     },
  //   };

  //   const paymentObject = new (window as any).Razorpay(razorpayConfiguration);
  //   paymentObject.once("ready", () => {
  //     console.log("Methods", paymentObject.methods);
  //     console.log(paymentObject.methods.emi_plans);
  //   });
  //   paymentObject.open();
  // };

  // *************************************************
  //                START PURCHASE
  // *************************************************

  // async function makeCheckout() {
  //   setShowButtonLoader(true);

  //   const razorpayPricingBody = {
  //     course_id: courseId,
  //   };
  //   const razorpayPricing = await getRazorpayObjectForCourseCheckout(
  //     razorpayPricingBody
  //   );

  //   if (!razorpayPricing) {
  //     alert("Server error");
  //     setShowButtonLoader(false);
  //     return;
  //   } else {
  //     await displayRazorpay(razorpayPricing);
  //   }
  // }

  const asyncStripe = loadStripe(
    `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
  );

  const makeCheckout = async () => {
    setShowButtonLoader(true);
    try {
      const stripe: any = await asyncStripe;
      const res = await fetch("/api/stripe/session", {
        method: "POST",
        body: JSON.stringify({
          amount: pricingINR?.toString(),
          course_id: courseId,
          uid: `${getUid()}`,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const { sessionId } = await res.json();

      const { error } = await stripe.redirectToCheckout({ sessionId });
      console.log(error);
      if (error) {
        router.push("/error");
      }
    } catch (err) {
      console.log(err);
      router.push("/error");
    } finally {
      setShowButtonLoader(false);
    }
  };

  return { showButtonLoader, makeCheckout };
};

export default usePurchaseCourseHook;
