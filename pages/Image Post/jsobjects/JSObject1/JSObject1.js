export default {
	myVar1: [],
	myVar2: {},
	addImagePost() {
		function generateBoundary() {
			const timestamp = new Date().getTime();
			const randomString = Math.random().toString(36).substring(7);
			return `boundary-${timestamp}-${randomString}`;
		}

		function imageToFile(imageData){
			// Convert the base64-encoded string to a Uint8Array
			const binaryData = atob(imageData.data);
			const uint8Array = new Uint8Array(binaryData.length);

			for (let i = 0; i < binaryData.length; i++) {
				uint8Array[i] = binaryData.charCodeAt(i);
			}

			// Create a Blob from the Uint8Array
			const blob = new Blob([uint8Array], { type: imageData.type });

			// Create a File object from the Blob
			const file = new File([blob], imageData.name, { type: imageData.type, lastModified: Date.now() });

		}

		const boundary = generateBoundary();

		const formData = new FormData();

		const image = UploadImage.files.length > 0 ? UploadImage.files[0] : null;

		console.log(image instanceof File, typeof image,image, "instance of file")

		console.log(image,"image")
		formData.append('fileData', image.data);
		formData.append('fileName',image.name)
		formData.append('title', 'backpack');
		formData.append('post_type', 'full-screen-image');
		formData.append('suggested_app_1', 'opensea.app');
		formData.append('notification', JSON.stringify({
			heading: 'heading',
			text: 'body'
		}));
		formData.append('eli5_explanation', 'eli5');

		console.log(formData,"formdata")
		//
		// ${appsmith.store.apiMode ? appsmith.store.prodUrl : appsmith.store.testUrl}
		fetch(`https://6504-223-189-11-114.ngrok-free.app/generate_content_meta/saveImagePost`, {
			method: 'POST',
			body: formData,
			headers: {
				// 'Accept': 'application/json',
				// 'Content-Type': `multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW}`
			},
		})
			.then(response => response.json())
			.then(data => console.log(data,"data from click"))
			.catch(error => console.error(error));
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}