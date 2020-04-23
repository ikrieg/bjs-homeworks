"use strict";

function getResult(a,b,c){
    let x = [];

    let d = Math.pow(b, 2) - 4 * a * c;

    if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a);
        x[1] = (-b - Math.sqrt(d)) / (2 * a);
    }
    else if (d == 0) {
        x[0] = -b / 2 * a;
    }
    return x;
}

function getAverageMark(marks){
    let sum = 0;
    
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log(`Аргументов больше 5`);
        marks.splice(5);
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let averageMark = sum / marks.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){ 
    let result = '';
    
    if (new Date().getFullYear() - dateOfBirthday.getFullYear() > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}
