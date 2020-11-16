function main() {
    let animal = document.getElementById("hewan").value

    if (animal == "kura"){
        animal = "https://tkplusaliman.files.wordpress.com/2012/05/mewarnai-kura-kura-2.jpg"
        alert("Ini gambar kura-kura.jpg")
    } else if (animal == "burung") {
        animal = "https://2.bp.blogspot.com/-fj4-kJIXT8Q/VJBnMx58A7I/AAAAAAAAN-k/S1dWdPe2Fik/s1600/burung.bmp"
        alert("Ini gambar burung.bmp")
    } else if (animal == "ikan") {
        animal = "https://1.bp.blogspot.com/-1Q0rfUOUhNU/V3b122YmfcI/AAAAAAAAAQg/FoK-VfIZoEURI4iNmOY3jYXl7LiZF9P3ACLcB/s1600/mewarnai%2Bgambar%2Bsketsa%2Bikan%2B2.jpg"
        alert("Ini gambar ikan.jpg")
    } else if (animal == "kambing"){
        animal = "https://i.pinimg.com/originals/89/40/35/89403517be270a71e1d42ab3c70ae890.jpg"
        alert("Ini gambar kambing.jpg")
    } else if (animal == "kelinci"){
        animal = "https://2.bp.blogspot.com/-mcAJpriG4rY/VJBm32vLCGI/AAAAAAAAN6k/_C37AXAoBOI/s1600/arnab.bmp"
        alert("Ini gambar kelinci.jpg")
    } else if (animal == "gajah"){
        animal = "https://2.bp.blogspot.com/-4AHzmS1JOws/VJBna9f6RmI/AAAAAAAAOBw/qa4DJamcASM/s1600/gajah.bmp"
        alert("Ini gambar gajah.bmp")
    }

    document.getElementById("gambar").src = animal

}