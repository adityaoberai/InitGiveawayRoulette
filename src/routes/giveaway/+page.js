import { db } from '$lib/database';

export async function load() {
	return {
		entries: await db.list()
	};
}
