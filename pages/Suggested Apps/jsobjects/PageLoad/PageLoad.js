export default {
	setAPIUrlOnPageLoad(){
		const prodUrl = "https://api.dappstore.app/";
		const testApiUrl = "https://test-api.dappstore.app/";

		const apiUrl = testApiUrl;

		appsmith.store("apiUrl",apiUrl);
	}
}