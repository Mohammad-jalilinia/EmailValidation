
//Variables
const sendBTN = document.querySelector("#sendBtn");
const Email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const resetBTN = document.querySelector("#resetBtn");
const form = document.querySelector("#email-form");


//EventListeners
eventListeners()
function eventListeners(){
    document.addEventListener("DOMContentLoaded",appINIT);

    Email.addEventListener("blur",validateField)
    subject.addEventListener("blur",validateField)
    message.addEventListener("blur",validateField)

    resetBTN.addEventListener("click",resetForm)

    form.addEventListener("submit",submitForm)
}


//Functions
function appINIT(){ // for initializing our app
    sendBTN.disabled = true;
}
function validateField(){
    validateLength(this);
    if(this.type === 'email'){
        validateEmail(this);  
    }

    let error = document.querySelectorAll(".error");
    if(Email.value !== '' && subject.value !== '' && message.value !== ''){
        if(error.length === 0){
            sendBTN.disabled = false;
        }
    }
}

function validateLength(inputThis){
    if(inputThis.value.length > 0){
        inputThis.style.borderBottomColor = 'green';
        inputThis.classList.remove("error");
    }
    else{
        inputThis.style.borderBottomColor = 'red';
        inputThis.classList.add("error");
    }
}

function validateEmail(vorodiThis){
    if(vorodiThis.value.includes("@")){
        vorodiThis.style.borderBottomColor = 'green';
        vorodiThis.classList.remove("error");
    }
    else{
        vorodiThis.style.borderBottomColor = 'red';
        vorodiThis.classList.add("error");
    }
}

function resetForm(){
    form.reset();  // reset all values of form
}

function submitForm(e){
    e.preventDefault();

    const spinner = document.getElementById("spinner");
    spinner.style.display = 'block';

    const sendEmailimg = document.createElement('img');
    sendEmailimg.src = 'img/mail.gif';
    sendEmailimg.style.display = 'block'

    setTimeout(function (){
        spinner.style.display = 'none';
        document.querySelector("#loaders").appendChild(sendEmailimg);

        setTimeout(function (){
            resetForm();
            sendEmailimg.remove();
        },5000)
    },5000)
}
