console.log('JS is connected!');

const buttons = document.querySelectorAll('.output');
const input = document.querySelector('#input');

let result = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if(e.target.innerHTML === "="){
            result = eval(result);
            input.value = result;
        }
        else if(e.target.innerHTML === "C"){
            result = "";
            input.value = result;
        }
        else{
            console.log(e.target.innerHTML);
            result = result + e.target.innerHTML;
            input.value = result;
        }
    })
})