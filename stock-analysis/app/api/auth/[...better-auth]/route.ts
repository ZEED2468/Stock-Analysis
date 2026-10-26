import { getAuth } from "@/lib/better-auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

async function handlers() {
  const auth = await getAuth();
  return toNextJsHandler(auth);
}

export async function GET(request: Request) {
  const { GET } = await handlers();
  return GET(request);
}

export async function POST(request: Request) {
  const { POST } = await handlers();
  return POST(request);
}
