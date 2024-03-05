let input = document.getElementById("inputBox") ;  // for select a input box
let button = document.querySelectorAll('button'); // for select a all button

let string = "";  //for result show
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval (string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'Del') {
            string = string.substring(0,string.length -1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})