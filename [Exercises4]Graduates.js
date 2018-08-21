function graduates (students) {
    //buat kondisi untuk penilaian didalam loping, kalo misal lulus maka di push ke dalam 'output'
    //console.log(students[0].score) //-> melihat score
    var output ={}
    output = {
      foxes   :[],
      wolves  :[],
      tigers  :[]
    }
    //console.log(output.foxes)
    for (i=0; i<students.length; i++){
        if (students[i].score > 75){
          if( students[i].class==='foxes'){
             output.foxes.push({
               name: students[i].name, 
               score: students[i].score
             })
          }
          else if( students[i].class==='wolves'){
            output.wolves.push({
              name: students[i].name, 
              score: students[i].score              
            })
          }
          else if ( students[i].class==='tigers'){
            output.tigers.push({
              name: students[i].name, 
              score: students[i].score              
            })
          }
        }
    }
    //console.log()
    if (output.tigers[0]===undefined){
      delete output.tigers
    } 
    if (output.wolves[0]===undefined){
      delete output.wolves
    } 
    if (output.foxes[0]===undefined){
      delete output.foxes
    }
    return (output)

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
  
  
  console.log(graduates([])); //{}