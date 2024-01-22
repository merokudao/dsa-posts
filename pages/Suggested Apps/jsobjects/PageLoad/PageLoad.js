export default {
	pageLoad () {
		const prodUrl = "https://api.dappstore.app/";
		const testUrl = "https://test-api.dappstore.app/";
		storeValue("prodUrl", prodUrl)
		storeValue("testUrl", testUrl);
	},
}