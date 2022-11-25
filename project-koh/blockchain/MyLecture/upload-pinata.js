export const uploadFile = async (file, onError) => {
	const formData = new FormData();
	formData.append("file", file);

	const config = {
		method: "POST",
		maxContentLength: Infinity,
		headers: {
			pinata_api_key: "2003b40400015afd8734",
			pinata_secret_api_key: "ba9986a5c8b29b1fc19f101a91cb0b78d7baeaddfd0e9aab9af60394658a39fc",
		},
		body: formData,
	};

	try {
		const response = await fetch(pinataApiEndpoint, config);

		const data = await response.json();

		return data.IpfsHash;
	} catch (error) {
		onError({ error });
	}
};