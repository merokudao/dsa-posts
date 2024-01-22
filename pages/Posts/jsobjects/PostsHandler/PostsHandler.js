export default {
	myVar1: [],
	myVar2: {},


	async submitPostDetails (){
		try{
			// save data to table and disable the form without clearing data
			// get processed data from api call 
			// populate the form
			console.log(PostDetails.formData, "post details");

			const postDetails = {
				url: url.text,
				image_url: image_url.text,
				original_headline: original_headline.text,
				article: article.text,
				content_type: content_type.selectedOptionValue,
				category: category.text,
				post_reference_image: post_reference_image.files[0].data,
			}

			console.log(postDetails, "postDetails");

			// storeValue("postDetails", PostDetails.formData);
			storeValue("postDetails", postDetails);

			// store 
		}catch (err){
			console.error(err);
		}
	}
}