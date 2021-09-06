function Name(){
    const text = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value)){
        textError.textContent=" ";
    }
    else {
        textError.textContent = "Name is Incorrect";
    }
}

function Address(){
    const address = document.querySelector('#address');
    const textError = document.querySelector('.add-error');
    let addRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(addRegex.test(address.value)){
        textError.textContent=" ";
    }
    else {
        textError.textContent = "Address is Incorrect";
    }
}

function MobileNumber(){
    const text = document.querySelector('#number');
    const textError = document.querySelector('.num-error');
    let mobileRegex = RegExp('^[0-9+]{10,13}$');
    if(mobileRegex.test(text.value)){
        textError.textContent=" ";
    }
    else {
        textError.textContent = "number is Incorrect";
    }
}