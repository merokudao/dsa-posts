export default {
	pageLoad () {
		const prodUrl = "https://api.dappstore.app/";
		const testUrl = "https://test-api.dappstore.app/";

		const apiMode = appsmith.store.apiMode ?? false;

		clearStore();

		storeValue("apiMode",apiMode);

		storeValue("prodUrl", prodUrl)
		storeValue("testUrl", testUrl);
	},
}