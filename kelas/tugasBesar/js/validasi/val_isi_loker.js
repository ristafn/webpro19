function errorNamaPerusahaanFun(){
    errorNamaPerusahaan.style.display = 'block'
    if (namaPerusahaan.value.length >= 1 && namaPerusahaan.value.length <= 20) {
        errorNamaPerusahaan.classList.remove("text-danger");
        errorNamaPerusahaan.classList.add("text-success");
    } else {
        errorNamaPerusahaan.classList.remove("text-success");
        errorNamaPerusahaan.classList.add("text-danger");
    }
}

function errorEmailFun() {
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    errorEmail.style.display = 'block'

    if (email.value.match(emailFormat)) {
        errorEmail.classList.remove("text-danger")
        errorEmail.classList.add("text-success")
    } else {
        errorEmail.classList.remove("text-success")
        errorEmail.classList.add("text-danger")
    }
}

function errorKontakFun(){
    errorKontak.style.display = 'block'

    if (kontakPerson.value.length >= 10 && kontakPerson.value.length <= 12) {
        errorKontak.classList.remove("text-danger")
        errorKontak.classList.add("text-success")
    } else {
        errorKontak.classList.remove("text-success")
        errorKontak.classList.add("text-danger")
    }
}