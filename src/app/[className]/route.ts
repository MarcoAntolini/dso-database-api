import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const { query } = req;
	const { className } = query;
	return res.status(200).json({ "className" : className });
}