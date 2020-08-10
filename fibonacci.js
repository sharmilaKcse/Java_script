const n=5;
let t1=0;
let t2=1;
let a=[]
while(t1<=n){
    a.push(t1);
    t3=t1+t2
    t1=t2
    t2=t3
}
console.log(a)