import fetch from "node-fetch";

exports.handler = async(event, context) => {

    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    return fetch(process.env.SLACK_WEBHOOK_URL, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ text: `デプロイが成功しました` })
        })
        .then(() => ({
            statusCode: 200,
            body: `Your message has been sent to Slack.`
        }))
        .catch(error => ({
            statusCode: 422,
            body: `Oops! Something went wrong. ${error}`
        }));
};