export type AmazonPayConfig = {
  sandbox: boolean;
  merchantId: string;
  publicKeyId: string;
  privateKeyPath: string;
  storeId: string;
  region: string;
  returnUrl: string;
};

export function getAmazonPayConfig(): AmazonPayConfig {
  return {
    sandbox: process.env.AMAZON_PAY_SANDBOX !== "false",
    merchantId: process.env.AMAZON_PAY_MERCHANT_ID || "",
    publicKeyId: process.env.AMAZON_PAY_PUBLIC_KEY_ID || "",
    privateKeyPath: process.env.AMAZON_PAY_PRIVATE_KEY_PATH || "",
    storeId: process.env.AMAZON_PAY_STORE_ID || "",
    region: process.env.AMAZON_PAY_REGION || "US",
    returnUrl:
      process.env.AMAZON_PAY_RETURN_URL ||
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://ollieocto.com"}/checkout/success`
  };
}

export function missingAmazonPayKeys(config: AmazonPayConfig) {
  return [
    ["AMAZON_PAY_MERCHANT_ID", config.merchantId],
    ["AMAZON_PAY_PUBLIC_KEY_ID", config.publicKeyId],
    ["AMAZON_PAY_PRIVATE_KEY_PATH", config.privateKeyPath],
    ["AMAZON_PAY_STORE_ID", config.storeId]
  ]
    .filter(([, value]) => !value)
    .map(([key]) => key);
}
