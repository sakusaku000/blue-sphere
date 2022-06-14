require("dotenv").config();

const {post} = require("axios");

module.exports = async (req, res) => {
    if (req.method === "POST") {

        const data = req.body;
        
        try {
            await post(process.env.DISCORD_WEBHOOK_URL, {
                embeds:[
                    {
                        color:9816830,
                        author:{
                            name:"Ban Appeal",
                            icon_url:"https://cdn.discordapp.com/attachments/887325575943958608/984802032152113182/logo.png"
                        },
                        footer:{
                            text:`from: ${data.username}`
                        },
                        description:data.reason
                    }
                ]
            });
            return res.status(200).send();
        } catch (err) {
            return res.status(500).send("couldn't post to discord");
        };

    } else {
        return res.status(405).send();
    };
};