// export const uploadFile = async (file, onError) => {
// 	const formData = new FormData();
// 	formData.append("file", file);

// 	const config = {
// 		method: "POST",
// 		maxContentLength: Infinity,
// 		headers: {
// 			pinata_api_key: "2003b40400015afd8734",
// 			pinata_secret_api_key: "ba9986a5c8b29b1fc19f101a91cb0b78d7baeaddfd0e9aab9af60394658a39fc",
// 		},
// 		body: formData,
// 	};

// 	try {
// 		const response = await fetch(pinataApiEndpoint, config);

// 		const data = await response.json();

// 		return data.IpfsHash;
// 	} catch (error) {
// 		onError({ error });
// 	}
// };

const [fileImg, setFileImg] = useState(null);

export const sendFileToIPFS = async (e) => {

	if (fileImg) {
		try {

			const formData = new FormData();
			formData.append("file", fileImg);

			const resFile = await axios({
				method: "post",
				url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
				data: formData,
				headers: {
					'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
					'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
					"Content-Type": "multipart/form-data"
				},
			});

			const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
		 console.log(ImgHash); 
//Take a look at your Pinata Pinned section, you will see a new file added to you list.   



		} catch (error) {
			console.log("Error sending File to IPFS: ")
			console.log(error)
		}
	}
}