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


function placeHolder() {
    telNo.inputmask.opts.placeholder = "•";
}

function sendInputNumberforData() {
    telNo.addEventListener('click', (event) => {
        console.log(event)
        return;
    });
}

function showCross() {
    if (telNo) {
        if (telNo.value !== "") {
            cross.style.display = "flex";
        }
    }
}

function numberDel() {
    cross.addEventListener('click', (event) => {
        telNo.value = "";
    });
}

// function sendInputNumber() {
//     sendNo.addEventListener('click', (event) => {
//         const telNumber = telNo.inputmask.unmaskedvalue();
//         if (telNumber) {
//             if (telNumber.length < 10) {
//                 showMessageIfInputEmpty();
//             } else {
//                 console.log(telNumber);
//             }
//         }
//     });
// }


function sendInputNumber() {
    sendNo.addEventListener('click', (event) => {
        const telNumber = telNo.inputmask.unmaskedvalue();
        if (telNumber) {
            if (telNumber.length < 10) {
                showMessageIfInputEmpty();
            } else {
                Object.assign(data, { phoneNumber: telNumber });
                console.log(data);
            }
        }
    });
}

function showMessageIfInputEmpty() {
    error.style.display = "block";
}

placeHolder();
sendInputNumberforData();
showCross();
numberDel();
sendInputNumber();
