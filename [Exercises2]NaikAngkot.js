/*
Logic Challenge - Naik Angkot
Problem

Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
Code
*/
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    if (arrPenumpang.length===0){
        return arrPenumpang
    }
    //Buat perhitungan jarak antar huruf, hasilnya dikalikan 2000
    var jarak =0
    var keberangkatan=0
    var tujuan=0
    var tarif=0
    var result =[]
    // console.log(arrPenumpang[1][0]) //-> nama penumpang
    // console.log(arrPenumpang[0][1]) //-> keberangkatan
    // console.log(arrPenumpang[0][2]) //-> tujuan
    // console.log(arrPenumpang.length) //-> untuk looping
    for (i=0; i<arrPenumpang.length; i++){
        //console.log(arrPenumpang[i])
        for (j=0; j<rute.length; j++){
            if (arrPenumpang[i][1]===rute[j]){
                keberangkatan = j
                //console.log(keberangkatan)
            }
        }
        for (k=0; k<rute.length; k++){
            if (arrPenumpang[i][2]===rute[k]){
                tujuan = k
                //console.log(tujuan)
            }
        }
        // hitung jaraknya
        jarak = tujuan-keberangkatan
        tarif = 2000*jarak
        //console.log(tarif)

        //tampilkan hasilnya
        result.push({
            penumpang   : arrPenumpang[i][0],
            naikDari    : arrPenumpang[i][1],
            tujuan      : arrPenumpang[i][2],
            bayar       : Math.abs(tarif) //-> pakai math.abs agar walaupun balik arah, dari F ke A tetap harus bayar, bukan dibayar (-)
        })

    }
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]