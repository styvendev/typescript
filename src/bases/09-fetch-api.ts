import type { GiftResponse } from '../interfaces/gift.response';

/* Token de conexion */
const apiKey = 'WbCvwWphF8IoXjlc8skDvH1JsVfnZhfN';

/* Fetch 
Es una funcion que incluye promesas y devuelve objetos
Esta funcion nos permite realizar peticiones https asíncronas  para enviar o recibir información */
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
	.then((resp) => resp.json())
	.then((body: GiftResponse) => {
		console.log(body.data.images.original.url);
	})
	.catch((err) => console.error(err));

/* Como crear y definir la interfas de un objeto
1. Copia el objeto
2. Utiliza quicktype.io para crear la estructura de la interfas
3. Define la Interfaz en otro archivo
 */
