let array=[2,4,5,6]
var min= Math.min(...array)
var max= Math.max(...array)
for(let i=1;i<=6;i++){
   if(array.includes(i)===false){
      console.log(i)
   }
}
