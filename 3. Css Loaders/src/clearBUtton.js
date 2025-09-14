// import * as  style from './clearButton.css';
const el = document.createElement('button');
el.innerHTML   = 'Clear';
// el.classList.add([style.button])
el.classList.add(["button"])  //for global css
el.onclick = () => {
  alert('Cleared');
}

document.body.appendChild(el);