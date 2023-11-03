import items from "@/data/items";
import { validateClass } from "@/utils/validator";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { className: string } }) {
	const className = validateClass(params.className);
	const classItems = items.filter((item) => item.class === className);
	return Response.json(classItems);
}
