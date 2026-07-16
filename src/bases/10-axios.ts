import axios from 'axios';
import type { GiftResponse } from '../interfaces/gift.response';

const apiKey = 'WbCvwWphF8IoXjlc8skDvH1JsVfnZhfN';

/* Create es un metodo de axios el cual retorna un objeto con los valores de conexion al API */
export const giftApi = axios.create({
	/* Configuracion base */
	baseURL: 'https://api.giphy.com/v1/gifs',
	timeout: 5000,
	params: {
		api_key: apiKey
	}
});

giftApi
	.get<GiftResponse>('/random')
	.then((resp) => console.log(resp.data.data.images.original.url))
	.catch((err) => console.log(err));

