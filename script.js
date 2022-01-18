const phoneNumberData = {
    phoneNumber: "",
};

let input = document.querySelectorAll('input[type="tel"]');
const telNo = document.querySelector(".telNo");
const cross = document.querySelector(".cross");
const sendNo = document.querySelector(".sendNo");
const error = document.querySelector(".error");

let im = new Inputmask({mask:'+7 (999) 999-99-99', autoUnmask: true,
placeholder: "+7 (   )    -  -  "}, ).mask(input);


function bindInputEventToElement() {
    telNo.addEventListener('input', (event) => {
        isInputNotEmpty() ? showCross() : hideCross()
        writeValueFromInputToPhoneNumberData();
    })
}

function writeValueFromInputToPhoneNumberData() {
    phoneNumberData.phoneNumber = telNo.value
}

function bindEventClickToCross() {
    cross.addEventListener('click', (event) => {
        clearNumber();
        hideCross();
    });
}

function clearNumber() {
    telNo.value = "";
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

function bindEventClckToSendButton() {
    sendNo.addEventListener('click', () => {
        isPhoneNumberNotFull() ?   showMessageIfInputEmpty() :  sendPhoneNumberData();
    });
}

function isPhoneNumberNotFull() {
    return telNo.value.length < 10 || telNo.value.length == ""
}


function sendPhoneNumberData() {
    console.log(phoneNumberData);
}

function showMessageIfInputEmpty() {
    error.style.display = "block";
}

bindEventClickToCross();
bindEventClckToSendButton();
bindInputEventToElement();


const person = new Person("Dima")
const person2 = new Person("Alina")

console.log(person, person2);