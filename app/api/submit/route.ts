import { NextResponse } from "next/server";

const SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();

try {
  const json = JSON.parse(text);

  return NextResponse.json(json);
} catch {
  return NextResponse.json(
    {
      success: false,
      error: "invalid_response",
      message: text,
    },
    { status: 500 }
  );
}
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "server_error",
        message: String(error),
      },
      { status: 500 }
    );
  }
}