const num=15
let a=[]
for(i=1;i<=num;i++){
    if(i%3==0 && i%5==0)
        a.push("Fizzbuzz")
    else if(i%3==0)
        a.push("Fizz")
    else if(i%5==0)
        a.push("Buzz")
    else
        a.push(i)
    }
console.log(a);