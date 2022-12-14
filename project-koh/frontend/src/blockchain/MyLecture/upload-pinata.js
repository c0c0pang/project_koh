import {Uploader,Uploader_Apply} from './metadata_uploader'
const REACT_APP_PINATA_API_KEY="2ecfdfdeebe7f222ffef"
const REACT_APP_PINATA_API_SECRET="465bd8f4bddf38456e011ae4164f34a734bee415a1f9fc11124e3f300de2fc4e"

export const SendFileToIPFS = async (name,description,fileVideo,privateKey) => {
	console.log(fileVideo.name);
	const formData = new FormData();
	formData.append("file", fileVideo);
	const config = {
		method: "POST",
		maxContentLength: Infinity,
		headers: {
			pinata_api_key: REACT_APP_PINATA_API_KEY,
			pinata_secret_api_key: REACT_APP_PINATA_API_SECRET,
		},
		body: formData,
	};
	const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", config);
	const data = await response.json();
	const ImgHash = `ipfs://${data.IpfsHash}`;
	// console.log(name,description,ImgHash);
	await Uploader(name,description,ImgHash,privateKey);
	console.log(typeof(ImgHash));
	return `ipfs/${data.IpfsHash}`;
}

export const SendImgFileToIPFS = async (fileVideo) => {
	console.log(fileVideo.name);
	const formData = new FormData();
	formData.append("file", fileVideo);
	const config = {
		method: "POST",
		maxContentLength: Infinity,
		headers: {
			pinata_api_key: REACT_APP_PINATA_API_KEY,
			pinata_secret_api_key: REACT_APP_PINATA_API_SECRET,
		},
		body: formData,
	};
	const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", config);
	const data = await response.json();
	const ImgHash = `ipfs://${data.IpfsHash}`;
	console.log(typeof(ImgHash));
	return `ipfs/${data.IpfsHash}`;
}

export const SendApplyFileToIPFS = async (name,ImgHash,count,privateKey) => {
	// console.log(fileimg.name);
	// const formData = new FormData();
	// formData.append("file", fileimg);
	// const config = {
	// 	method: "POST",
	// 	maxContentLength: Infinity,
	// 	headers: {
	// 		pinata_api_key: REACT_APP_PINATA_API_KEY,
	// 		pinata_secret_api_key: REACT_APP_PINATA_API_SECRET,
	// 	},
	// 	body: formData,
	// };
	// const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", config);
	// const data = await response.json();
	// const ImgHash = `ipfs://${data.IpfsHash}`;
	// console.log(name,description,ImgHash);
	await Uploader_Apply(name,ImgHash,count,privateKey);
	console.log(typeof(ImgHash));
	return ImgHash;
}