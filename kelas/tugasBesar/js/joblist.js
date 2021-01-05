function main(){
    var kategori = document.getElementById('kategori')
    var all = document.getElementById('all')
    var mobile1 = document.getElementById('mobile-1')
    var mobile2 = document.getElementById('mobile-2')
    var mobile3 = document.getElementById('mobile-3')
    var mobile4 = document.getElementById('mobile-4')
    var backend1 = document.getElementById('backend-1')
    var backend2 = document.getElementById('backend-2')

    if (kategori.value == 'all'){
        mobile1.style.display = 'block'
        mobile2.style.display = 'block'
        mobile3.style.display = 'block'
        mobile4.style.display = 'block'
        backend1.style.display = 'block'
        backend2.style.display = 'block'
    } else if (kategori.value == 'mobile'){
        mobile1.style.display = 'block'
        mobile2.style.display = 'block'
        mobile3.style.display = 'block'
        mobile4.style.display = 'block'
        backend1.style.display = 'none'
        backend2.style.display = 'none'
    } else if (kategori.value == 'backend'){
        mobile1.style.display = 'none'
        mobile2.style.display = 'none'
        mobile3.style.display = 'none'
        mobile4.style.display = 'none'
        backend1.style.display = 'block'
        backend2.style.display = 'block'
    }
    // } else if (kategori.value == 'website'){
    //     mobile1.display = 'none'
    //     mobile2.display = 'none'
    //     mobile3.display = 'none'
    //     mobile4.display = 'none'
    //     backend1.display = 'none'
    //     backend2.display = 'none'
    // } else if (kategori.value == 'cloud'){
    //     mobile1.display = 'none'
    //     mobile2.display = 'none'
    //     mobile3.display = 'none'
    //     mobile4.display = 'none'
    //     backend1.display = 'none'
    //     backend2.display = 'none'
    // }

}