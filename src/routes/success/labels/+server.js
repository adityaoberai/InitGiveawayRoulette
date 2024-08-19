// @ts-nocheck
import { Client, Users } from "node-appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT } from '$lib/constants';
import { APPWRITE_API_KEY } from "$env/static/private";

export async function POST({ request }) {
    const client = new Client()
        .setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECT)
        .setKey(APPWRITE_API_KEY);

    const users = new Users(client);

    var user = await users.get(request.headers.get('x-user-id'));

    await users.updateLabels(user.$id, ['init2']);

    console.log("added label for user " + user.$id);

    return new Response(null, { status: 201 });
}