function main(){
    var kategori = document.getElementById('kategori')
    var programmer1 = document.getElementById('programmer-1')
    var programmer2 = document.getElementById('programmer-2')
    var programmer3 = document.getElementById('programmer-3')
    var network1 = document.getElementById('network-1')
    var analyst1 = document.getElementById('analyst-1')
    var dataScience1 = document.getElementById('dataScience-1')

    if (kategori.value == 'all'){
        programmer1.style.display = 'block'
        programmer2.style.display = 'block'
        programmer3.style.display = 'block'
        network1.style.display = 'block'
        analyst1.style.display = 'block'
        dataScience1.style.display = 'block'
    } else if (kategori.value == 'programmer'){
        programmer1.style.display = 'block'
        programmer2.style.display = 'block'
        programmer3.style.display = 'block'
        network1.style.display = 'none'
        analyst1.style.display = 'none'
        dataScience1.style.display = 'none'
    } else if (kategori.value == 'network'){
        programmer1.style.display = 'none'
        programmer2.style.display = 'none'
        programmer3.style.display = 'none'
        network1.style.display = 'block'
        analyst1.style.display = 'none'
        dataScience1.style.display = 'none'
    } else if (kategori.value == 'analyst'){
        programmer1.style.display = 'none'
        programmer2.style.display = 'none'
        programmer3.style.display = 'none'
        network1.style.display = 'none'
        analyst1.style.display = 'block'
        dataScience1.style.display = 'none'
    } else if (kategori.value == 'dataScience'){
        programmer1.style.display = 'none'
        programmer2.style.display = 'none'
        programmer3.style.display = 'none'
        network1.style.display = 'none'
        analyst1.style.display = 'none'
        dataScience1.style.display = 'block'
    }
}