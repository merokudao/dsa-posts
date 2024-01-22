export default {
	pageLoad () {
		clearStore()
		storeValue("save_to_db_flag", false);
	},
	setAPIUrlOnPageLoad(){
		const prodUrl = "https://api.dappstore.app/";
		const testUrl = "https://test-api.dappstore.app/";

		storeValue("prodUrl", prodUrl)
		storeValue("testUrl", testUrl);
	}
}