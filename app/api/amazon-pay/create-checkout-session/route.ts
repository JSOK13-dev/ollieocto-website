import { NextResponse } from "next/server";
import { getAmazonPayConfig, missingAmazonPayKeys } from "@/lib/amazon-pay";

export async function POST() {
  const config = getAmazonPayConfig();
  const missing = missingAmazonPayKeys(config);

  if (missing.length > 0) {
    return NextResponse.json(
      {
        message:
          "Direct checkout is almost ready. Please use a retailer buying option for now.",
        missing
      },
      { status: 200 }
    );
  }

  // TODO: Paste credentials in .env.local, keep the private key file outside git,
  // then replace this placeholder with the official Amazon Pay Checkout v2
  // Create Checkout Session call. Sign the request server-side only using:
  // AMAZON_PAY_MERCHANT_ID, AMAZON_PAY_PUBLIC_KEY_ID,
  // AMAZON_PAY_PRIVATE_KEY_PATH, AMAZON_PAY_STORE_ID, AMAZON_PAY_REGION,
  // and AMAZON_PAY_RETURN_URL.
  const placeholderSession = {
    checkoutSessionId: "sandbox-placeholder-session",
    webCheckoutDetails: {
      checkoutReviewReturnUrl: config.returnUrl,
      amazonPayRedirectUrl: "/checkout/success?session=sandbox-placeholder"
    },
    paymentDetails: {
      paymentIntent: "AuthorizeWithCapture",
      chargeAmount: {
        amount: "19.99",
        currencyCode: "USD"
      }
    },
    storeId: config.storeId,
    sandbox: config.sandbox
  };

  return NextResponse.json(placeholderSession);
}
