const twilio = require("twilio");

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;

const client = new twilio(accountSid, authToken);

async function callNOC() {
	try {
		return client.calls.create({
			url: process.env.URL,
			from: process.env.FROM,
			to: process.env.TO,
		});
	} catch (e) {
		console.log(e);
	}
}

callNOC();
