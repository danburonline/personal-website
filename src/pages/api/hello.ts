import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(_req: NextRequest): Promise<Response> {
  return new Response(JSON.stringify({ name: "John Doe" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
