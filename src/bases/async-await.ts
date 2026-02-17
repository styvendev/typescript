import type { GiftResponse } from "../interfaces/gift.response";
import { giftApi } from "./axios";

const getImage = async () => {
  try {
    const url = await giftApi.get<GiftResponse>("/random");
    return url.data.data.images.original.url;
  } catch (error) {
    throw "Error en la url";
  }
};

// const getImagePromise = () => {
//   return new Promise((resolve) => {
//     resolve("https://url-de-mi-pagina-web/image.jpg");
//   });
// };

getImage()
  .then((url) => console.log({ url }))
  .catch((err) => console.log(err));
