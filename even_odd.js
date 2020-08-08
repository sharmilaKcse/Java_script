const num = [0,19,88,12,5,1,22,6,17,10,4,25,2];
let even=[]
let odd=[]
for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
        even.push(num[i]);
 }  else {
        odd.push(num[i])
 }

    }

console.log(even.sort(function(a,b){return a-b}));
console.log(odd.sort(function(a,b){return b-a}));
