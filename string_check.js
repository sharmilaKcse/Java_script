let str1="program";
let str2="script";
    var c=0
    var x=[]
    for(let i=0;i<str1.length;i++){
        c=0
        for(let j=0;j<str2.length;j++){
            if(str1[i]===str2[j]){
              c=c+1
            }
        }
        while(c===0){
            x.push(str1[i])
            break
        }

    }console.log("Char not in str2: " +x.join(","))

