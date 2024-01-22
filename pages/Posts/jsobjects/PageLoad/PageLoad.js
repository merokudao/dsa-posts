export default {
	pageLoad () {
		removeValue("save_to_db_flag");
		storeValue("save_to_db_flag", false);
		const prodUrl = "https://api.dappstore.app/";
		const testUrl = "https://test-api.dappstore.app/";

		storeValue("apiMode", appsmith.store?.apiMode ?? false);
		storeValue("prodUrl", prodUrl)
		storeValue("testUrl", testUrl);
		console.log("page load worked");
	},
}