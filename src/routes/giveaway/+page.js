import { db } from '$lib/database';

export const ssr = false;

export async function load() {
	return {
		entries: await db.list()
	};
}
