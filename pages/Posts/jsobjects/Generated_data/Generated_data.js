export default {
	myVar1: [],
	myVar2: {},

	// generate, regenerate data
	async generateData(){
		try {
			const inputData = PostDetails.formData;

			// api call and set JSONForm2 with respnse data

			// http://test-api.dappstore.app/generate_content_meta/article?notification=true
			console.log(inputData.article, "article", JSON.stringify({"article_text": inputData.article}))
			fetch("https://test-api.dappstore.app/generate_content_meta/article?notification=true", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "no-cors"
				},
				body: JSON.stringify({"article_text": inputData.article})
			}).then((res)=> {
				console.log(res,"response");
				if(!res.ok){console.log("Something went wrong"); throw Error("Something went wrong")}

				return res.json();
			}).then((data)=>{
				console.log(data, "data");
				
			}).catch((err)=>{
				console.log(err, "error");
			});

		}
		catch(err){}
	},

	async insertGeneratedData(){
		try{
			const id = crypto.randomUUID();
			const generatedFormData = {
				id: id,
				...GeneratedData.formData
			}
			storeValue("generatedFormData",generatedFormData);
			{{Insert_processed_data.run()}};
			// clear both the forms while saving to DB
			{{showAlert("Added Successfully")}}
		}
		catch(err){
			console.log(err);
			{{showAlert("Something went wrong, try again")}}
		}
	}
}