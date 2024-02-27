import { db } from '$lib/database';

export async function load() {
	var dbResponse = await db.list();

	return {
		entries: dbResponse.options,
		total: dbResponse.total
	};
}
