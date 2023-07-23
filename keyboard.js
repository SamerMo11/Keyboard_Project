
// -------------Textarea-------------//

let textarea = document.getElementById('t');
let display = document.getElementById('t');
const buttons = document.querySelectorAll('.btn')
const caps_btn = document.querySelector('.caps')
const space_btn = document.querySelector('.space')
let chars=[];

// -------------Buttons-------------//

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('')
    })
})

// -------------Enter-------------//

const calc = () => {
    display.value = eval(display.value); }

// -------------Dark mode----------------//

function myFunction()
{
    let element = document.body ;
        element.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")){
                
                textarea.style.border ='8px double   #3c3937';
                textarea.style.background='white';
                textarea.style.color="black"; 
                icon.src = "sunn.png";
                body.style.color='white';
                
                } else {

                icon.src = "moon1.png";
                textarea.style.background='black';
                textarea.style.color="white";
                textarea.style.border ='8px double #bdbdbd';
            }
}

//------------space button-------------//
space_btn.addEventListener('click', () => {
    chars.push(' ')
    textarea.value = chars.join('')
})
//------------Caps button--------------//
caps_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper');
        
    })
})
//------------Tab button-------------//
tab_btn.addEventListener('click',()=>{
    chars.push('   ')
    textarea.value = chars.join('')
})
