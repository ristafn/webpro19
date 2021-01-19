// joblist
function joblist(){
    programmer1.style.display = 'none'
    programmer2.style.display = 'none'
    programmer3.style.display = 'none'
    programmer4.style.display = 'none'
    programmer5.style.display = 'none'
    programmer6.style.display = 'none'
    programmer7.style.display = 'none'
    network1.style.display = 'none'
    analyst1.style.display = 'none'
    if (kategori.value == 'all'){
        programmer1.style.display = 'block'
        programmer2.style.display = 'block'
        programmer3.style.display = 'block'
        programmer4.style.display = 'block'
        programmer5.style.display = 'block'
        programmer6.style.display = 'block'
        programmer7.style.display = 'block'
        network1.style.display = 'block'
        analyst1.style.display = 'block'
    } else if (kategori.value == 'programmer'){
        programmer1.style.display = 'block'
        programmer2.style.display = 'block'
        programmer3.style.display = 'block'
        programmer4.style.display = 'block'
        programmer5.style.display = 'block'
        programmer6.style.display = 'block'
        programmer7.style.display = 'block'
    } else if (kategori.value == 'network'){
        network1.style.display = 'block'
    } else if (kategori.value == 'analyst'){
        analyst1.style.display = 'block'
    } else if (kategori.value == 'dataScience'){
        
    }
}

// pagination
page2.style.display = 'none'

page1button.onclick = function() {
    page2.style.display = 'none'
    page1.style.display = 'block'
    page2button.classList.remove('active')
    page2button.classList.add('text-muted')
    page1button.classList.remove('text-muted')
    page1button.classList.add('active')
    prev.classList.add('text-primary')
    prev.classList.remove('text-muted')
    next.classList.remove('text-primary')
    next.classList.add('text-muted')
}

page2button.onclick = function() {
    page2.style.display = 'block'
    page1.style.display = 'none'
    page1button.classList.remove('active')
    page1button.classList.add('text-muted')
    page2button.classList.add('active')
    page2button.classList.remove('text-muted')
    prev.classList.remove('text-primary')
    prev.classList.add('text-muted')
    next.classList.add('text-primary')
    next.classList.remove('text-muted')
}

prev.onclick = function() {
    page2.style.display = 'none'
    page1.style.display = 'block'
    page2button.classList.remove('active')
    page2button.classList.add('text-muted')
    page1button.classList.remove('text-muted')
    page1button.classList.add('active')
    prev.classList.add('text-primary')
    prev.classList.remove('text-muted')
    next.classList.remove('text-primary')
    next.classList.add('text-muted')
}

next.onclick = function() {
    page2.style.display = 'block'
    page1.style.display = 'none'
    page1button.classList.remove('active')
    page1button.classList.add('text-muted')
    page2button.classList.add('active')
    page2button.classList.remove('text-muted')
    prev.classList.remove('text-primary')
    prev.classList.add('text-muted')
    next.classList.add('text-primary')
    next.classList.remove('text-muted')
}