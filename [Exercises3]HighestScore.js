function highestScore (students) {
    
    //console.log(students[0].name) //-> menampilkan value objek name di index 0
    //console.log(students[0].score) //-> menampilkan value objek score di index 0
    //console.log(students[0].class) //-> menampilkan value objek class di index 0
    /*
    1.set 'foxesTertinggi' dengan name dan score 0,
    looping value class di setiap index, bila ditemukan index dengan class 'foxes' maka bandingkan scorenya dengan 'foxesTertinggi',
    jika score 'foxesTertinggi' lebih kecil dari score foxes saat ini, maka isikan name dan score foxes saat ini ke 'foxesTertinggi'.

    2.set 'wolvesTertinggi' dengan name dan score 0,
    looping value class di setiap index, bila ditemukan index dengan class 'wolves' maka bandingkan scorenya dengan 'wolvesTertinggi',
    jika score 'wolvesTertinggi' lebih kecil dari score wolves saat ini, maka isikan name dan score wolves saat ini ke 'wolvesTertinggi'.
    
    3.set 'tigersTertinggi' dengan name dan score 0,
    looping value class di setiap index, bila ditemukan index dengan class 'tigers' maka bandingkan scorenya dengan 'tigersTertinggi',
    jika score 'tigersTertinggi' lebih kecil dari score tigers saat ini, maka isikan name dan score tigers saat ini ke 'tigersTertinggi'.
    */

    var foxesTertinggi={name:'Kosong',score:0}
    var wolvesTertinggi={name:'Kosong',score:0}
    var tigersTertinggi={name:'Kosong',score:0}
    for (i=0; i<students.length; i++){
        if (students[i].class==='foxes'){ //->kondisi perbandingan foxes
            if (foxesTertinggi.score < students[i].score){ //-> bandingkan score
                foxesTertinggi.name=students[i].name
                foxesTertinggi.score=students[i].score
            }
        }
        if (students[i].class==='wolves'){ //->kondisi perbandingan wolves
            if (wolvesTertinggi.score < students[i].score){ //-> bandingkan score
                wolvesTertinggi.name=students[i].name
                wolvesTertinggi.score=students[i].score
            }
        }
        if (students[i].class==='tigers'){ //->kondisi perbandingan tigers
            if (tigersTertinggi.score < students[i].score){ //-> bandingkan score
                tigersTertinggi.name=students[i].name
                tigersTertinggi.score=students[i].score
            }
        }
    }
    var result = {
        foxes:foxesTertinggi,
        wolves:wolvesTertinggi,
        tigers:tigersTertinggi
    }
    if (tigersTertinggi.score===0){
        delete result.tigers
    }
    if (wolvesTertinggi.score===0){
        delete result.wolves
    }
    if (foxesTertinggi.score===0){
        delete result.foxes
    }
    return result //-> test terakhir saat objek kosong karena isi result sudah dihapus saat foxes, wolves & tigers kosong lalu didelete
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