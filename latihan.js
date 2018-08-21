/*
54321
5432
543
54
5
*/

// diambil di substring 1 terus diubah ke text terus dibalikin
//console.log(numToString.length)
var num = 6

console.log()
batas=0
for (i=0; i<num; i++){
    
    var result='';
    for (j=num; j>batas; j--){
        result=result+j
        //console.log(result)
    }
    batas=batas+1
    console.log(result)//console.log(num)
} 