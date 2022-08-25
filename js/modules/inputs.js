import { setContent } from "../common/common.js";
import { GIF } from "./results.js";
import { giphyApiURL } from "../common/config.js";

giphyApiURL
export class INPUTS {
  constructor(inputs) {
    this.inputs = inputs;
  }
  _getInputs() {
    let list = this.inputs.map((obj) => {
      return `<input type="button" class="btn btn-sm search-btn" value="${obj.value}" >`;
    });
    return list.join(" ");
  }

  _addInput(text) {
    if (text != undefined && text != "") {
      this.inputs.push({ value: text });
      if (this.inputs.length != 6) {
        for (let i = 0; i < 6; i++) {
          this.inputs[i] = this.inputs[i + 1];
        }
        this.inputs.pop();
      }
      this.rander();
    }
  }

  rander() {
    setContent("header-buttons", this._getInputs());
  }

  search() {
    let text = document.getElementById("search-text").value;
    this._addInput(text);
    fetch(
      `${giphyApiURL.baseURL}/search?q=${text}&limit=${giphyApiURL.queryLimit}&api_key=${giphyApiURL.appKey}&fmt=${giphyApiURL.queryFormat}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let resObj = new GIF(res.data);
        resObj.rander();
      });
  }

  trending(){
    fetch(
        `${giphyApiURL.baseURL}/trending?limit=${giphyApiURL.queryLimit}&api_key=${giphyApiURL.appKey}&fmt=${giphyApiURL.queryFormat}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let resObj = new GIF(res.data);
          resObj.rander();
        });
  }
}
