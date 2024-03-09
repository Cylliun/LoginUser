const fieldset =  document.getElementById("fieldset");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const confemail = document.getElementById("confirm-email");
const senha = document.getElementById("senha");
const confsenha = document.getElementById("confirm-senha");

fieldset.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkInputnome();
    checkInputemail();
    checkConfirmEmail();
    checkInputsenha();
    checkConfirmSenha();
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
        errorInput(email,"Insira o seu email!");
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
        errorInput(confemail, "Insira o seu email de confirmação!");
    }
    else if(confEmailvalue != emailvalue){
        errorInput(confemail,"Email está incorreto");
    }
    else{
        const formItem = confemail.parentElement;
        formItem.className = "inputRegister"
    }

    console.log(confEmailvalue);
}

function checkInputsenha(){
    const senhavalue = senha.value;
    if(senhavalue === ""){
        errorInput(senha,"Digite uma senha!");
    }else if(senhavalue.length < 8){
        errorInput(senha,"Caracteres insuficiente!");
    }
    else{
        const formItem = senha.parentElement;
        formItem.className = "inputRegister"
    }

    console.log(senhavalue);
}
function checkConfirmSenha(){
    const confirmSenha = confsenha.value;
    if(confirmSenha === ""){
        errorInput(confsenha,"Digite a senha de confirmação!");
    }
        else if(confirmSenha.length < 8){
            errorInput(confsenha, "Caracteres insuficiente!");
        }
    else if(confirmSenha != senhavalue){
        errorInput(confsenha,"A senha de confirmação está incorreta!");
    }
    else{
        const formItem = confsenha.parentElement;
        formItem.className = "inputRegister";
    }

    console.log(confirmSenha);
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