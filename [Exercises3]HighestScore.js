function highestScore (students) {
    
    // console.log(students[0].name) //-> menampilkan value objek name di index 0
    // console.log(students[0].score) //-> menampilkan value objek score di index 0
    // console.log(students[0].class) //-> menampilkan value objek class di index 0
    /*
    1.buat result output berupa objek kosong, akan kita isi untuk menampung hasilnya nanti
    2.looping setiap class dari 'students' dan filter score tertinggi untuk dimasukkan menjadi value dari class tersebut
    */
    var output={} 
    //console.log(students.length)
    if (students.length===0){
        return output
    }
    for (i=0; i<students.length; i++){
        //buat key dari classnya dulu
        //buat value key sesuai yang diinginkan
        var scoreTertinggi=students[i].score
        var setClass=students[i].class
        var isiClass={
            name:students[i].name,
            score:students[i].score
        }
        // var scoreTertinggi=students[i].score
        // console.log(scoreTertinggi)
        
        if(output[setClass]===undefined){ //-> di set hanya kalo class belum ada jadi hanya dapat nilai pertama
            output[setClass]=isiClass
        }
        //filter isian key sesuai yang terbesar
        if(output[setClass]['score']<students[i].score){
            output[setClass]=isiClass
        }
    }
    return output
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
  
  
  //console.log(highestScore([])); //{}