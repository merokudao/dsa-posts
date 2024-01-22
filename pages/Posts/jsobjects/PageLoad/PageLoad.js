export default {
	pageLoad () {
		clearStore()
		storeValue("save_to_db_flag", false);
	},
	setAPIUrlOnPageLoad(){
		const prodUrl = "https://api.dappstore.app/";
		const testApiUrl = "https://test-api.dappstore.app/";

		const apiUrl = testApiUrl;

		appsmith.store("apiUrl",apiUrl);
	}
}