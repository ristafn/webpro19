//function getNama
function getNama(){
    let nama = document.getElementById("nama")
    let errorNama = document.getElementById("errorNama")

    if (nama.value.length >= 1 && nama.value.length <= 30) {
        errorNama.classList.remove("salah");
        errorNama.classList.add("benar");
    } else {
        errorNama.classList.remove("benar");
        errorNama.classList.add("salah");
    }
}

//function getEmail
function getEmail() {
    let email = document.getElementById("email")
    let errorEmail = document.getElementById("errorEmail")
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    if (email.value.match(emailFormat)) {
        errorEmail.classList.remove("salah")
        errorEmail.classList.add("benar")
    } else {
        errorEmail.classList.remove("benar")
        errorEmail.classList.add("salah")
    }
}

//function getJam
function getJam() {
    let jam = document.getElementById("jam")
    let errorJam = document.getElementById("errorJam")
    let jamFormat = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/  

    if (jam.value.match(jamFormat)) {
        errorJam.classList.remove("salah")
        errorJam.classList.add("benar")
    } else {
        errorJam.classList.remove("benar")
        errorJam.classList.add("salah")
    }
}

//function getTujuan
function getTujuan() {
    let tujuan = document.getElementById("tujuan")
    let errorTujuan = document.getElementById("errorTujuan")

    if (tujuan.value.toUpperCase() == "JAKARTA" || tujuan.value.toUpperCase() == "SURABAYA" || tujuan.value.toUpperCase() == "SEMARANG") {
        errorTujuan.classList.remove("salah")
        errorTujuan.classList.add("benar")
    } else {
        errorTujuan.classList.remove("benar")
        errorTujuan.classList.add("salah")
    }
}

//function getJumlah
function getJumlah() {
    let jumlah = document.getElementById("jumlah")
    let errorJumlah = document.getElementById("errorJumlah")   

    if (jumlah.value != null && jumlah.value != "" && jumlah.value >= 1 && jumlah.value <= 10) {
        errorJumlah.classList.remove("salah")
        errorJumlah.classList.add("benar")
    } else {
        errorJumlah.classList.remove("benar")
        errorJumlah.classList.add("salah")
    }
}

//function getForm
function getForm() {
    let nama = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let jam = document.getElementById("jam").value
    let tujuan = document.getElementById("tujuan").value
    let jumlah = document.getElementById("jumlah").value
    let show = document.getElementById("show").innerHTML

    document.write(show + "<br>")
    document.write("Nama Pengguna : " + nama + "<br>")
    document.write("Email : " + email + "<br>")
    document.write("Jam Keberangkatan : " + jam + "<br>")
    document.write("Tujuan Keberangkatan : " + tujuan + "<br>")
    document.write("Jumlah Tiket : " + jumlah + "<br>")

}