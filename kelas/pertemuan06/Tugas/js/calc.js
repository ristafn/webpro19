function convertKurs() {
    let money = Number(document.getElementById("uangLuar").value)
    let list = Number(document.getElementById("listUangLuar").value)

    let hasilConvert = money * list
    document.getElementById("convert").value = hasilConvert
}