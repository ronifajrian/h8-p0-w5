function graduates (students) {
  // Code disini

  // penanganan kondisi jika kosong
  if (students.length == 0) {
    return "{}"
  } else {

    // penentuan class utama dari klasifikasinya
    var arrClass = [students[0].class]
    var cek = students[0].class
    for (var i = 0; i < students.length - 1; i++) {
      if (!cek.includes(students[i+1].class)) {
        arrClass.push(students[i+1].class)
        cek = arrClass
      }
    }

    // menentukan array person & score
    var finalArrScore = []
    var person = []
    for (var i = 0; i < arrClass.length; i++) {
      var arrScore = []
      var arrPerson = []
      for (var j = 0; j < students.length; j++) {
        if (students[j].class == arrClass[i] && students[j].score > 75) {
          arrScore.push(students[j].score)
          arrPerson.push(students[j].name)
        }
      }
      finalArrScore.push(arrScore)
      person.push(arrPerson)
    }

    var hasil = {}
    for (var i = 0; i < arrClass.length; i++) {
      var setClass = arrClass[i]
      hasil[setClass] = []
      for (var j = 0; j < person[i].length; j++) {
        var objHasil = {}
        objHasil.nama = person[i][j]
        objHasil.score = finalArrScore[i][j]
        hasil[setClass].push(objHasil)
      }
    }
    return hasil
  }

}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));
//
// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }
//
//
console.log(graduates([])); //{}
