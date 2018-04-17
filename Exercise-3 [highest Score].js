function highestScore (students) {
  // Code disini
  if (students.length == 0) {
    return "{}"
  } else {
    var classRank = {}
    var dataRank = {}

    var arrClass = [students[0].class]
    for (var i = 0; i < students.length - 1; i++) {
      if (!arrClass.includes(students[i+1].class)) {
        arrClass.push(students[i+1].class)
      }
    }

    var finalArrScore = []
    for (var i = 0; i < arrClass.length; i++) {
      var arrScore = []
      for (var j = 0; j < students.length; j++) {
        if (arrClass[i] == students[j].class ) {
          arrScore.push(students[j].score)
        }
      }
      finalArrScore.push(arrScore)
    }

    var arrMax = []
    for (var i = 0; i < finalArrScore.length; i++) {
      var max = finalArrScore[i][0]
      for (var j = 0; j < finalArrScore[i].length - 1; j++) {
        var n = j + 1
        if (max < finalArrScore[n]) {
          max = finalArrScore[n]
        }
      }
      arrMax.push(max)
    }

    var person = []
    for (var i = 0; i < arrMax.length; i++) {
      for (var j = 0; j < students.length; j++) {
        if (arrMax[i] == students[j].score) {
          person.push(students[j].name)
        }
      }
    }


    for (var i = 0; i < arrClass.length; i++) {
      var set = arrClass[i]
      classRank[set] = {} // bikin nama property object dari variable tampungan set
      classRank[set].name = person[i]
      classRank[set].score = arrMax[i]
    }

    return classRank
  }
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
