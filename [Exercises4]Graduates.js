function graduates (students) {
    /*
    buat objek kosong untuk menampung hasil dengan key dari 'class'
    filter berdasarkan score, bila score lebih besar dari 75, maka push sebagai value dari key tersebut
    */
    var output ={}
    if (students.length===0){
        return output
    }
    console.log(students[0]['class'])//mencari class berdasarkan index 0
    for (i=0; i<students.length; i++){
        var setClass = students[i]['class']
        var isiClass = {
            name    :students[i]['name'],
            score   :students[i]['score']
        }
        //filter
        if(output[setClass]===undefined){
            output[setClass]=[]          
        }
        if(students[i]['score']>75){
            output[setClass].push(isiClass)
        }
   }
   
   return output
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
  
 /* console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  */
  console.log(graduates([])); //{}
  