import type { PageServerLoad } from './$types';

import { request } from 'undici';
import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';

 
export const load: PageServerLoad = async ({ url }) => {
    let code = url.searchParams.get("code");
    if (code) {
        try {
            const tokenResponseData = await request('https://discord.com/api/oauth2/token', {
                method: 'POST',
                body: new URLSearchParams({
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    code,
                    grant_type: 'authorization_code',
                    redirect_uri: 'http://localhost:5173/login',
                    scope: 'identify',
                }).toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const oauthData = await tokenResponseData.body.json();
            console.log(oauthData);
        } catch (error) {
            // NOTE: An unauthorized token will not throw an error
            // tokenResponseData.statusCode will be 401
            console.error(error);
        }console.log("HI");
    } else {
        return false;
    }
}