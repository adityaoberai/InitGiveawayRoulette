// @ts-nocheck
import { account } from './appwrite';

export const user = {
	login: async () => {
		account.createOAuth2Session(
			'discord',
			`https://${window.location.hostname}/success`,
			`https://${window.location.hostname}/failure`
		);
	},

	get: async () => {
		return await account.get();
	}
};
