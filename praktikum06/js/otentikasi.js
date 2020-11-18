function main() {
    let us = document.getElementById("username").value
    let pas = document.getElementById("pass").value

    if (us == "ahmad2017" && pas == "integrity") {
        alert("login sukses!")
        window.open().document.write("<h1>Login Sukses</h1>")
    } else {
        alert("username atau password salah")
    }
}