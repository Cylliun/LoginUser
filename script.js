const fieldset =  document.getElementById("fieldset");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const confemail = document.getElementById("confirm-email");
const senha = document.getElementById("senha");
const confsenha = document.getElementById("confsenha");

fieldset.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkInputnome();
    checkInputemail();
    checkConfirmEmail();
    checkInputsenha();
})

function checkInputnome(){
    const nomevalue = nome.value;
    if(nomevalue ===""){
    //mostrar erro de campo vazio
    errorInput(nome,"Preencha seu Username!");
    }
    else{
        const formItem = nome.parentElement;
        formItem.className = "inputRegister"
    }

    console.log(nomevalue);
}

function checkInputemail(){
    const emailvalue = email.value;
    if(emailvalue === ""){
        errorInput(email,"Preencha seu email!");
    }
    else{
        const formItem = email.parentElement;
        formItem.className = "inputRegister"
    }

    console.log(emailvalue);
}
function checkConfirmEmail(){
    const confEmailvalue = confemail.value;
    if(confEmailvalue === ""){
        errorInput(confEmailvalue, "Confirme o seu email!");
    }
    else if(confEmailvalue != emailvalue){
        errorInput(confEmailvalue,"Email está incorreto");
    }
    else{
        const formItem = confemail.parentElement;
        formItem.className = "inputRegister"
    }

    console.log(confiemail);
}

function checkInputsenha(){
    const senhavalue = senha.value;
    if(senhavalue === ""){
        errorInput(senhavalue,"Digite uma senha");
    }else if(senhavalue.length < 8){
        errorInput(senhavalue,"caracteres insuficiente!");
    }
    else{
        const formItem = senha.parentElement;
        formItem.className = "inputRegister"
    }

    console.log(senhavalue);
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "inputRegister error"
}
function okInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "inputRegister ok"
}