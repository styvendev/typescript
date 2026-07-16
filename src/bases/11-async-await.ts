import type { GiftResponse } from '../interfaces/gift.response';
import { giftApi } from './10-axios';

/* Definicion de promesa tradicional */
const getImagePromise = () => {
	return new Promise((resolve) => {
		resolve('https://url-de-mi-pagina-web/image.jpg');
	});
};
getImagePromise();

/* async -> Devuelve una promesa */
const getImage = async () => {
	try {
		const url = await giftApi.get<GiftResponse>('/random');
		return url.data.data.images.original.url;
	} catch (error) {
		throw 'Error en la url';
	}
};

getImage()
	.then((url) => console.log({ url }))
	.catch((err) => console.log(err));
