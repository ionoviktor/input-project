const data = {
    phoneNumber: "",
};

let input = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(input);

const telNo = document.querySelector(".telNo");
const cross = document.querySelector(".cross");
const sendNo = document.querySelector(".sendNo");
const error = document.querySelector(".error");

// telNo.srcElement.inputmask.opts.placeholder = "•";
cross.style.display = "flex";



function sendInputNumberforData() {
    telNo.addEventListener('click', (event) =>{
        console.log(event)
        return;
    });
}

function showCross() {
    if(telNo.value = " ") {
        cross.style.display = "flex";
    }
}

function numberDel() {
    cross.addEventListener('click', () =>{
        input.telNo.target.value.delete();
    });
}


// function sendInputNumber() {
//     sendNo.addEventListener('click', () =>{
//         let number = telNo.value;
        
//         data.phoneNumber.push(number);
//     });
// }

// function showMessageIfInputEmpty() {
//     if(telNo.value.length < 16) {
//         error.style.display = "block";
//     }
// }

console.log(data);



sendInputNumberforData();
showCross();
numberDel();
sendInputNumber();
showMessageIfInputEmpty();
