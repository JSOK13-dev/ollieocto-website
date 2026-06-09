"use client";

import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export function AmazonPayButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function startCheckout() {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/amazon-pay/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sku: "OLLIE-HARDCOVER-001", quantity: 1 })
      });
      const data = (await response.json()) as {
        checkoutSessionId?: string;
        webCheckoutDetails?: { amazonPayRedirectUrl?: string };
        message?: string;
      };

      if (data.webCheckoutDetails?.amazonPayRedirectUrl) {
        window.location.href = data.webCheckoutDetails.amazonPayRedirectUrl;
        return;
      }

      setMessage(
        data.message ||
          "Direct checkout is almost ready. Please use one of the retailer buying options for now."
      );
    } catch {
      setMessage("Checkout could not start. Please try a fallback buying option.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#17324d] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#17324d]/18 transition hover:-translate-y-0.5 hover:bg-[#214563] focus-visible:focus-ring"
        disabled={loading}
        onClick={startCheckout}
        type="button"
      >
        <ShoppingCart aria-hidden="true" size={18} />
        {loading ? "Starting checkout..." : "Amazon Pay Checkout"}
      </button>
      {message ? (
        <p className="mt-3 rounded-xl bg-[#fff3d0] px-4 py-3 text-sm font-bold text-[#705000]">
          {message}
        </p>
      ) : null}
    </div>
  );
}
