import { type NextRequest, type NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
	const body = await req.json();
	return new Response(JSON.stringify(body), {
		headers: {
			"content-type": "application/json",
		},
	});
}
