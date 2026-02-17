import type { GiftResponse } from "../interfaces/gift.response";

const apiKey = "WbCvwWphF8IoXjlc8skDvH1JsVfnZhfN";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then((body: GiftResponse) => {
    // console.log(body.data.images.hd.mp4);
    console.log(body.data.images.original.url);
  })
  .catch((err) => console.error(err));
