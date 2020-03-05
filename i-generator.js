
var pilihan = document.querySelector('input[name="generate"]:checked').value
function handleClick(radio){
    pilihan = radio.value
    iGenerator(pilihan)
}
document.getElementById('kataAwal').addEventListener("keyup", function () {
    iGenerator(pilihan)

});
function iGenerator(huruf) {
    var kataAwal = document.getElementById("kataAwal").value
    var kataAkhir = kataAwal
    var penggantiLowerCase = huruf.toLowerCase()
    var penggantiUppercase = huruf.toUpperCase()
    kataAkhir = kataAkhir.replace(/A/g, penggantiUppercase)
    kataAkhir = kataAkhir.replace(/I/g, penggantiUppercase)
    kataAkhir = kataAkhir.replace(/U/g, penggantiUppercase)
    kataAkhir = kataAkhir.replace(/E/g, penggantiUppercase)
    kataAkhir = kataAkhir.replace(/O/g, penggantiUppercase)
    kataAkhir = kataAkhir.replace(/a/g, penggantiLowerCase)
    kataAkhir = kataAkhir.replace(/i/g, penggantiLowerCase)
    kataAkhir = kataAkhir.replace(/u/g, penggantiLowerCase)
    kataAkhir = kataAkhir.replace(/e/g, penggantiLowerCase)
    kataAkhir = kataAkhir.replace(/o/g, penggantiLowerCase)
    document.getElementById("hasilKata").value = kataAkhir
}