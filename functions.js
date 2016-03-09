/**
 * Created by Deanne on 2/10/2016.
 */

var total = add(3,4);
console.log(total);

function add(x, y){
    return x + y;
    return y;
}

function canDrink(age){
    if(age >= 21){
        return true;
    }else {
        return false;
    }
}
console.log(canDrink(21));

var sum = add(add(1,add(2,3)), add(1,2));
console.log(sum);
