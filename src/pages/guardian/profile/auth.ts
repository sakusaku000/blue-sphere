import { APIRoute } from "astro";
import DiscordOAuth2 from "discord-oauth2";

const oauth = new DiscordOAuth2({
    clientId:import.meta.env.DISCORD_CLIENT_ID,
    clientSecret:import.meta.env.DISCORD_CLIENT_SECRET,
    redirectUri:import.meta.env.REDIRECT_URI
});

export const get:APIRoute = ({params, request, redirect}) => {
    if (!params.code) {
        const auth_url = oauth.generateAuthUrl({
            scope:["identify", "guilds"],
            prompt:"none"
        });
        return redirect(auth_url, 307);
    } else {
        return redirect(`/guardian/profile?code=${params.code}`);
    };
};