import _ from 'lodash';
import * as style from './index.css';
import './clearBUtton.js'; 
console.log(style)

const btn1 =document.getElementById("button1")
btn1.addEventListener("click", buttonClicked);
// btn1.classList.add([style.button])
btn1.classList.add("button") //for global css
function buttonClicked() {
     document.getElementById("header").innerText = "Hey code is updated...";
     const listItems = ["Milk", "Bread", "Eggs"];
     const ul = document.getElementById("shoppingList");
     _.forEach(listItems, (item) => {
            const el = document.createElement("li");
            el.innerHTML = item;
            ul.appendChild(el);
     })
}