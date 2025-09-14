import _ from 'lodash';


document.getElementById("button1").addEventListener("click", buttonClicked);
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