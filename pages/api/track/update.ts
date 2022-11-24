import { prisma } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.body;
	const result = await prisma.track.update({
		where: {
			id: id,
		},
		data: {
			likes: {
				increment: 1,
			},
		},
	});
	res.json(result);
}
