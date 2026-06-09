import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    email?: string;
    source?: string;
    interest?: string;
  } | null;

  if (!body?.email) {
    return NextResponse.json({ message: "Email is required." }, { status: 400 });
  }

  // TODO: Add MAILERLITE_API_KEY and MAILERLITE_GROUP_ID to .env.local.
  // Then call MailerLite's subscriber endpoint here. Keep the API key
  // server-side only and map source/interest into subscriber fields or groups.
  return NextResponse.json({
    ok: true,
    message:
      "Signup received. Welcome to Sparkle Bay.",
    source: body.source || "unknown",
    interest: body.interest || "activity-pack"
  });
}
