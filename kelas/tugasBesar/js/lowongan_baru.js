// joblist
function joblist(){
    programmer1.style.display = 'none'
    programmer2.style.display = 'none'
    programmer3.style.display = 'none'
    programmer4.style.display = 'none'
    network1.style.display = 'none'
    analyst1.style.display = 'none'
    if (kategori.value == 'all'){
        programmer1.style.display = 'block'
        programmer2.style.display = 'block'
        programmer3.style.display = 'block'
        programmer4.style.display = 'block'
        network1.style.display = 'block'
        analyst1.style.display = 'block'
    } else if (kategori.value == 'programmer'){
        programmer1.style.display = 'block'
        programmer2.style.display = 'block'
        programmer3.style.display = 'block'
        programmer4.style.display = 'block'
        programmer5.style.display = 'block'
    } else if (kategori.value == 'network'){
        network1.style.display = 'block'
    } else if (kategori.value == 'analyst'){
        analyst1.style.display = 'block'
    } else if (kategori.value == 'dataScience'){
        
    }
}