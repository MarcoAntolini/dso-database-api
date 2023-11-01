import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const body = await req.json();
	return Response.json({ body });
}
