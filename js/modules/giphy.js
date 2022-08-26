import { setContent } from "../common/common.js";

export class Giphy {

  constructor(gifObj) {
    this.gifObj = gifObj;
  }

  _getGif() {
    let list = this.gifObj.map((obj) => {
      return `<div class="gif">
                        <img src="${obj.images.fixed_height_still.url}" class="gif-img active">
                        <img src="${obj.images.fixed_height.url}" class="gif-img hidden"  >
                        <h6> Rating: ${obj.rating} </h6>
                    </div>`;
    });
    return list.join(" ");
  }

  _changeGifState() {
    let gifs = document.querySelectorAll(".gif");
    for (let i = 0; i < gifs.length; i++) {
      gifs[i].addEventListener("click", () => {
        for (let j = 0; j < 2; j++) {
          gifs[i].children[j].classList.toggle("active");
          gifs[i].children[j].classList.toggle("hidden");
        }
      });
    }
  }

  rander() {
    setContent("gif-items-id", this._getGif());
    this._changeGifState();
  }
}

