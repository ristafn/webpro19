function masuk(){
    if(username.value == 'admin' && password.value == '100'){
        window.open('admin_page/index.html','_self')
    } else if(username.value == 'tamu' && password.value == '200'){
        window.open('tamu_page/index.html','_self')
    } else{
        alert('Anda harus masuk dengan username dan kata sandi yang benar!')
    }
}