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

function bindInputNumber() {
    telNo.addEventListener('input', (event) => {
        if (isInputNotEmpty()) {
            showCross();
            return;
        } else {
            hideCross();
        }
    })
}

function numberDel() {
    cross.addEventListener('click', (event) => {
        telNo.value = "";
        hideCross();
    });
}

function showCross() {
    cross.style.display = "flex";
}

function hideCross() {
    cross.style.display = "none";
}

function isInputNotEmpty() {
    return telNo.inputmask.unmaskedvalue().length;
}

function sendInputNumber() {
    sendNo.addEventListener('click', (event) => {
        const telNumber = telNo.inputmask.unmaskedvalue();
        if (telNumber.length < 10 || telNumber.length == "") {
            showMessageIfInputEmpty();
        } else {
            Object.assign(data, { phoneNumber: telNumber });
            console.log(data);
        }
    });
}

function showMessageIfInputEmpty() {
    error.style.display = "block";
}

placeHolder();
numberDel();
sendInputNumber();
bindInputNumber();
