import { Account, Client, Databases } from 'appwrite';

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('rafflepicker');

export const account = new Account(client);

export const database = new Databases(client);
