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

return NextResponse.json({
  upstream_status: response.status,
  upstream_url: response.url,
  upstream_content_type: response.headers.get("content-type"),
  upstream_response: text.slice(0, 1000),
});
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