// @ts-nocheck
import { account } from "./appwrite";

export const user = {
    login: async () => {
        account.createOAuth2Session('discord', 'http://localhost:5173/success', 'http://localhost:5173/failure')
    },

    get: async () => {
        return await account.get();
    }
}