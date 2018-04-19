function highestScore (students) {
  // Code disini
  if (students.length == 0) {
    return "{}"
  } else {
    var obj = {}
    var arrClass = []
    var arrScore = []

    for (var i = 0; i < students.length; i++) {
      if (!arrClass.includes(students[i].class)) {
        arrClass.push(students[i].class)
      }
    }

    for (var i = 0; i < arrClass.length; i++) {
      var arrData = []
      for (var j = 0; j < students.length; j++) {
        var data = {}
        if (students[j].class == arrClass[i]) {
          data.name = students[j].name
          data.score = students[j].score
          arrData.push(data)
        }
      }
      obj[arrClass[i]] = arrData
    }

    for (var i = 0; i < arrClass.length; i++) {
      var maxScore = obj[arrClass[i]][0].score
      var dataMax = obj[arrClass[i]][0]
      for (var j = 0; j < obj[arrClass[i]].length - 1; j++) {
        if (maxScore < obj[arrClass[i]][j+1].score) {
          maxScore = obj[arrClass[i]][j+1].score
          dataMax = obj[arrClass[i]][j+1]
        }
      }
      obj[arrClass[i]] = dataMax
    }
    return obj
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
