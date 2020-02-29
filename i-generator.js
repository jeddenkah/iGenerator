
function iGenerator() {
    var kataAwal = document.getElementById("kataAwal").value
    var kataAkhir = kataAwal
    var penggantiLowerCase = "i"
    var penggantiUppercase = "I"

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

