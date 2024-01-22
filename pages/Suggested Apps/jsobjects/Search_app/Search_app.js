export default {
	searchAppAndCheck (inputValue) {
		//	write code here
		//	this.myVar1 = [1,2,3]
		console.log(inputValue,"input value")
		fetch(`https://api.meroku.store/api/v1/dapp/search/${search_app_input.text}`,  {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}}).then((response)=>{
			if(!response.ok){
				console.log("Something went wrong")
			}
			return response.json();
		}).then((data)=>{
			const exists = data.data.length === 1;
			storeValue("app_name",inputValue);
			storeValue("app_check",exists || false);
			storeValue("meta_check", false);
			if(exists){
				const app = data.data[0];
				const meta_check = app.images.screenshots.length > 0 && app.images.mobileScreenshots.length > 0;
				storeValue("meta_check",meta_check);
				console.log(app,"app");
			}
		}).catch((err)=>{
			console.err(err,"err");
			storeValue("app_name","");
			storeValue("app_check",false);
			storeValue("meta_check",false);
		});
	},
}