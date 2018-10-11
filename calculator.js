// 2 * 3 = 6 - 4 + 10 / 6 * 10 + 18 / 8  - 2 계산

var str1 = '2';
var ope = '*';
var str2 = '3'



function multipleCalculator(string1, operator, string2) {
    var result;
    var number1 = Number(string1)
    var number2 = Number(string2)
    
    if (operator === '*') {
        result = number1 * number2;
    }
    return result;
}



var number3 = multipleCalculator(str1, ope, str2)
var ope2 = '-';
var str4 = '4'

function minusCalculator(string1, operator, string2) {
    var result;
    var number1 = Number(string2)
    if (operator === '-') {
        result = string1 - number1
    }
    return result;
}


var number4 = minusCalculator(number3, ope2, str4)
var ope3 = '+';
var str5 = '10';


function plusCalculator(string1, operator, string2) {
    var result;
    var number1 = Number(string2)
    if (operator === '+') {
        result = string1 + number1
    }
    return result;
}



var number5 = plusCalculator(number4, ope3, str5)
var ope4 = '+';
var str6 = '6';

function divisionCalculator(string1, operator, string2) {
    var result;
    var number1 = Number(string2)
    if (operator === '+') {
        result = string1 / number1
    }
    return result
}


var number6 = divisionCalculator(number5, ope4, str6)
var oper5  = '/';
var str7  = '10'

function multipleCalculator1(string1,operator,string2){
    var result;
    var number1 = Number(string2)
    if(operator === '/'){
        result = string1 * number1
    }
    return result
}


var number7 = multipleCalculator1(number6 ,oper5 , str7)
var ope6 = '+';
var str8 = '18';

function plusCalculator1(string1 , operator, string2){
    var result;
    var number1 = Number(string2)
    if(operator === '+') {
        result = string1 + number1 
}
    return result 
}
var number8 = plusCalculator1(number7, ope6, str8)
var ope7 = '/';
var str9 = '8'

function divisionCalculator1(string1,operator,string2) { 
    var result;
    var number1 = Number(string2)
    if(operator === '/') {
        result = string1 / number1
    }
    return result 
}


var number9 = divisionCalculator1(number8 ,ope7,str9)
var ope8 = '-'
var str10 = '2';

function minusCalculator1(string1,operator,string2) {
    var result;
    var number1 = Number(string2)
    if(operator === '-'){
        result = string1 - number1
    }
    return result
}
minusCalculator1(number9,ope8,str10)



console.log(typeof String(2))