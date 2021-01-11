const rand = require('random');
//Faster print statement
function print(value){
    console.log(value);
}
//Random number 1-100
function randper(){
    let x = rand.int(0, 100);
    return x;
}
//Generate random integer
function rng(min, max){
    let x = rand.int(min, max);
    return x;
}
//Remove item from array by index
function removefromarr(arr, index){
    arr.splice(index, 1);
    
}
//Remove item from array by value
function removebyvalue(arr, value){
    let z = arr.indexOf(value)
    arr.splice(z, 1)
    
}
//Get the maximun number in an array
function maxnum(arr){
    for(let i in arr){
        if(arr[i]>arr[0]){
            let tmp = arr[i];
            arr[i] = arr[0];
            arr[0] = tmp;
        }
    }
    return arr[0];
}
//Sort integer array from biggest to smallest
function arrsort(arr){
    let x = arr.length-1;
    let b = 0;
    while(b<x){
        for(let i=0; i<arr.length; i++){
            if(arr[i]>arr[i+1]){
                b+=1;
            }
            if(arr[i]<arr[i+1]){
                let tmp = arr[i]
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                b = 0
            }
        }
    }
    return arr;
}
//Factorial Calulation
function factorial(int){
    let c = int;
    for(i=1; i<int; i++){
        c = c*i
    }
    return c;
}
//Permutation Calculation
function permutation(n, k){
    let b = factorial(n);
    let z = n - k;
    let c = factorial(z);
    let perm = b/c;  
    if(n>=k){
        return Math.round(perm);
    }
    else{
        return 0;
    }
}
//Combination Calculation
function combination(n, k){
    let b = factorial(k);
    let x = permutation(n, k);
    let c = x/b;
    if(n>=k){
        return Math.round(c);
    }
    else{
        return 0;
    }
    
}
//Randomly shuffle an array
function randshuffle(arr){
    for(let i = 0; i<arr.length; i++){
        let ran = rand.int(0, arr.length-1)
        let tmp = arr[i];
        arr[i] = arr[ran]
        arr[ran] = tmp
    }
    return arr;
}
module.exports = {print, arrsort, removefromarr, maxnum, randper, removebyvalue, randshuffle, rng, combination, permutation, factorial}

