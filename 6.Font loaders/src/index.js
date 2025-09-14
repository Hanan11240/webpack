import _ from 'lodash';
import * as style from './index.scss';
import './clearBUtton.js';
import logo from './assets/webpack-logo.png';
import "./assets/fonts/Redressed-Regular.ttf";

const btn1 = document.getElementById("button1")

const logoel = document.getElementById("logo");
btn1.addEventListener("click", buttonClicked);
btn1.classList.add([style.button])

logoel.src = logo;
// btn1.classList.add("button") //for global css
function buttonClicked() {
     const el = document.getElementById("header")
     el.innerText = "Hey code is updated...";
     el.classList.add([style.header])
     const listItems = ["Milk", "Bread", "Eggs"];
     const ul = document.getElementById("shoppingList");
     _.forEach(listItems, (item) => {
          const el = document.createElement("li");
          el.innerHTML = item;
          ul.appendChild(el);
     })
}