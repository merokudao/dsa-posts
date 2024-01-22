export default {
	searchAppAndCheck (inputValue, app_key) {
		//	write code here
		//	this.myVar1 = [1,2,3]
		const app_check = `app_check_${app_key}`;
		const meta_check = `meta_check_${app_key}`;
		const url = `https://api.meroku.store/api/v1/dapp/search/${inputValue}`;
		storeValue(app_check, false);

		console.log(inputValue,app_check,meta_check,inputValue,url,inputValue.includes(".app"),"input value")
		if(inputValue.includes(".app")){
			fetch(url,  {
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
				// storeValue("app_name",inputValue);
				console.log("exist",data,exists);
				storeValue(app_check,exists || false);

				storeValue(meta_check, false);
				if(exists){
					const app = data.data[0];
					const meta_check_value = (app?.images?.screenshots.length > 0 || app?.images?.mobileScreenshots.length > 0) && app?.images?.logo && app?.description && app?.category;
					const screenshots = app?.images?.screenshots.length > 0;
					const mobileScreenshots = app?.images?.mobileScreenshots.length > 0;
					const logo = app?.images?.logo;
					const description = app?.description;
					const category = app?.category;
					const missingArr = [];
					if(!screenshots)missingArr.push("screenshots");
					if(!mobileScreenshots)missingArr.push("mobile screenshots");
					if(!logo)missingArr.push("logo");
					if(!description)missingArr.push("description");
					if(!category)missingArr.push("category");

					const missing = missingArr.length > 0 ? `Missing Metas: ${missingArr.join(", ")}` : "";
					storeValue(meta_check, meta_check_value && {
						screenshots, mobileScreenshots, logo, description,category, meta_check_value
					});
					console.log(missing,"missing");
					if(meta_check === "meta_check_1"){
						storeValue("suggested_app_1_validation", missing)
					}
					if(meta_check === "meta_check_2"){
						storeValue("suggested_app_2_validation", missing)
					}
					if(meta_check === "meta_check_3"){
						storeValue("suggested_app_3_validation", missing)
					}
					console.log(app,"app");
				}

				console.log(appsmith.store[app_check],appsmith.store[meta_check],"meta")
			}).catch((err)=>{
				console.log(err,"err");
				// storeValue("app_name","");
				storeValue(app_check,false);
				storeValue(meta_check,false);
			});
		}
	},
}