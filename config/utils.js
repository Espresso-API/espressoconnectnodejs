const crypto = require('crypto');

const AES = (token, key) => {
	try {
		const algorithm = 'aes-256-gcm';
		const iv = Buffer.from('AAAAAAAAAAAAAAAAAAAAAA==', 'base64url');
		const Secretkey = Buffer.from(key, 'utf-8');
		var decBytes = Buffer.from(token, 'base64url');
		var dec = decBytes.slice(0, decBytes.length - 16);
		var decipher = crypto.createDecipheriv(algorithm, Secretkey, iv);
		var txt = decipher.update(dec.toString('base64url'), 'base64url', 'utf8');
		let splitText = txt.split('|');
		let message = splitText[1] + '|' + splitText[0];
		var cipher = crypto.createCipheriv(algorithm, Secretkey, iv);
		var ciph =
			cipher.update(message, 'utf8', 'base64') + cipher.final('base64');
		var combinedBytes = [Buffer.from(ciph, 'base64'), cipher.getAuthTag()];
		var encData = Buffer.concat(combinedBytes).toString('base64url');
		return encData;
	} catch (error) {
		throw error;
	}
};
module.exports = { AES };
