function naikAngkot(arrPenumpang) {
  if (arrPenumpang.length == 0) {
    return "[]"
  } else {
    var newArr =[]
    var a =[]
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    for (var i = 0; i < arrPenumpang.length; i++) {
      dataPenumpang = {}
        dataPenumpang.penumpang = arrPenumpang[i][0]
        dataPenumpang.naikDari = arrPenumpang[i][1]
        dataPenumpang.tujuan = arrPenumpang[i][2]

        for (var j = 0; j < rute.length; j++) {
          if (arrPenumpang[i][1] == rute[j]) {
            var setA = j
          } else if (arrPenumpang[i][2] == rute[j]) {
            var setB = j
          }
        }

        jarak = Math.abs(setA - setB)

        dataPenumpang.bayar = 2000 * jarak

      newArr.push(dataPenumpang)
    }
    return newArr
  }
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
