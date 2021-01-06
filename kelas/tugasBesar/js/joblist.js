function main(){
    var kategori = document.getElementById('kategori')
    var programmer1 = document.getElementById('programmer-1')
    var programmer2 = document.getElementById('programmer-2')
    var programmer3 = document.getElementById('programmer-3')
    var programmer4 = document.getElementById('programmer-4')
    var programmer5 = document.getElementById('programmer-5')
    var programmer6 = document.getElementById('programmer-6')
    var network1 = document.getElementById('network-1')
    var network2 = document.getElementById('network-2')
    var analyst1 = document.getElementById('analyst-1')
    var analyst2 = document.getElementById('analyst-2')
    var dataScience1 = document.getElementById('dataScience-1')
    var dataScience2 = document.getElementById('dataScience-2')

    if (kategori.value == 'all'){
        programmer1.style.display = 'block'
        programmer2.style.display = 'block'
        programmer3.style.display = 'block'
        programmer4.style.display = 'block'
        programmer5.style.display = 'block'
        programmer6.style.display = 'block'
        network1.style.display = 'block'
        network2.style.display = 'block'
        analyst1.style.display = 'block'
        analyst2.style.display = 'block'
        dataScience1.style.display = 'block'
        dataScience2.style.display = 'block'
    } else if (kategori.value == 'programmer'){
        programmer1.style.display = 'block'
        programmer2.style.display = 'block'
        programmer3.style.display = 'block'
        programmer4.style.display = 'block'
        programmer5.style.display = 'block'
        programmer6.style.display = 'block'
        network1.style.display = 'none'
        network2.style.display = 'none'
        analyst1.style.display = 'none'
        analyst2.style.display = 'none'
        dataScience1.style.display = 'none'
        dataScience2.style.display = 'none'
    } else if (kategori.value == 'network'){
        programmer1.style.display = 'none'
        programmer2.style.display = 'none'
        programmer3.style.display = 'none'
        programmer4.style.display = 'none'
        programmer5.style.display = 'none'
        programmer6.style.display = 'none'
        network1.style.display = 'block'
        network2.style.display = 'block'
        analyst1.style.display = 'none'
        analyst2.style.display = 'none'
        dataScience1.style.display = 'none'
        dataScience2.style.display = 'none'
    } else if (kategori.value == 'analyst'){
        programmer1.style.display = 'none'
        programmer2.style.display = 'none'
        programmer3.style.display = 'none'
        programmer4.style.display = 'none'
        programmer5.style.display = 'none'
        programmer6.style.display = 'none'
        network1.style.display = 'none'
        network2.style.display = 'none'
        analyst1.style.display = 'block'
        analyst2.style.display = 'block'
        dataScience1.style.display = 'none'
        dataScience2.style.display = 'none'
    } else if (kategori.value == 'dataScience'){
        programmer1.style.display = 'none'
        programmer2.style.display = 'none'
        programmer3.style.display = 'none'
        programmer4.style.display = 'none'
        programmer5.style.display = 'none'
        programmer6.style.display = 'none'
        network1.style.display = 'none'
        network2.style.display = 'none'
        analyst1.style.display = 'none'
        analyst2.style.display = 'none'
        dataScience1.style.display = 'block'
        dataScience2.style.display = 'block'
    }
}