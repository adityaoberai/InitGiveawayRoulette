import { Account, Client, Databases } from 'appwrite';
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT } from '../constants';

const client = new Client();

client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);

export const account = new Account(client);

export const database = new Databases(client);
