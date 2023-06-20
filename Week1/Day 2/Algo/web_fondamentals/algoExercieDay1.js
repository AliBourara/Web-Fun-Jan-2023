var countPositive = 0;
var number = [3,4,-2,7,16,-8,0];
for(var i = 0; i< number.length ; i++){
    if(number[i]>=0 ){
        countPositive += 1;
    }
}


console.log("there are "+ countPositive + " positive values");