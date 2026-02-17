import axios from "axios";
import type { GiftResponse } from "../interfaces/gift.response";

const apiKey = "WbCvwWphF8IoXjlc8skDvH1JsVfnZhfN";

export const giftApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

// giftApi
//   .get<GiftResponse>("/random")
//   .then((resp) => console.log(resp.data.data.images.original.url))
//   .catch((err) => console.log(err));
