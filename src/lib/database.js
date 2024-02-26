// @ts-nocheck
import { Query, ID } from 'appwrite';
import { database } from './appwrite';
import { COLLECTION_NAME } from '../constants';

export const db = {
	list: async () => {
		var entries = await database.listDocuments('raffledb', COLLECTION_NAME, [
			Query.limit(500),
			Query.select(['discordName'])
		]);

		var options = [];

		entries.documents.forEach((entry) => {
			options.push({label: entry.discordName});
		});

		return options;
	},

	add: async (discordName) => {
		try {
			await database.createDocument('raffledb', COLLECTION_NAME, ID.unique(), {
				discordName: discordName
			});
			console.log('Added to the raffle');
		} catch (error) {
			console.log(error.message);
		}
	}
};
