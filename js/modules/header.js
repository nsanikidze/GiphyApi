import { setContent } from "../common/common.js";
import { Giphy } from "./giphy.js";
import { giphyApiURL } from "../common/config.js";


export class Header {

  constructor(headerButtons) {
    this.headerButtons = headerButtons;
  }


  _getInputs() {
    let list = this.headerButtons.map((obj) => {
      return `<input type="button" class="header-btn btn" value="${obj.value}" >`;
    });
    return list.join(" ");
  }

  _addInput(text) {
    if (text != undefined && text != "") {
      this.headerButtons.push({ value: text });
      if (this.headerButtons.length != 6) {
        for (let i = 0; i < 6; i++) {
          this.headerButtons[i] = this.headerButtons[i + 1];
        }
        this.headerButtons.pop();
      }
    }
  }

  _searchWithHeaderButton(){
    let headerBTN = document.querySelectorAll('.btn');
    for(let btn of headerBTN){
      btn.addEventListener('click', () =>  {
        let text = btn.value;
        this.search(text, false); 
      });
    }
  }

  rander() {
    setContent("header-buttons", this._getInputs());
    this._searchWithHeaderButton();
  }

  search(text, addButton) {
    if (addButton === true){
      this._addInput(text);
      this.rander();
    }
    
    fetch(
      `${giphyApiURL.baseURL}/search?q=${text}&limit=${giphyApiURL.queryLimit}&api_key=${giphyApiURL.appKey}&fmt=${giphyApiURL.queryFormat}`
    ).then((res) => {
      return res.json();
    })
      .then((res) => {
        let resObj = new Giphy(res.data);
        resObj.rander();
      });
  }

  getTrendingGifs() {
    fetch(
      `${giphyApiURL.baseURL}/trending?limit=${giphyApiURL.queryLimit}&api_key=${giphyApiURL.appKey}&fmt=${giphyApiURL.queryFormat}`
    ).then((res) => {
      return res.json();
    })
      .then((res) => {
        let resObj = new Giphy(res.data);
        resObj.rander();
      });
  }
}
