function subset(arr1,arr2){
    var c=0;
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                c+=1;
            }
        }
    }
    if(c===arr2.length){
        console.log("arr2[] is a subset of arr1[] ")
    }
    else{;
        console.log("arr2[] is not a subset of arr1[] ")
    }
    
}
arr1=[10,5,2,23,19];
arr2=[19,5,3];
subset(arr1,arr2)
