'use strict'

// Задача 1

function getSolutions(a, b, c) {

    const D = Math.pow(b, 2) - 4 * a * c;

    if (Math.sign(D) === 1) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1, x2]
        };
    } else if (Math.sign(D) === 0) {
        const x1 = -b / (2 * a);
        return {
            D,
            roots: [x1]
        };
    }
    return {
        D,
        roots: []
    };
}

function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x\u00b2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (Math.sign(result.D) === 1) {
        console.log(`Уравнение имеет два корня. X\u2081 = ${result.roots[0]}, X\u2082 = ${result.roots[1]}`);
    } else if (Math.sign(result.D) === 0) {
        console.log(`Уравнение имеет один корень X\u2081 = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение не имеет вещественных корней`);
    }
}

// Задача 2

function getAverageMark(marks) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (marks.length == 0)
        return 0;
    return marks.reduce(reducer) / marks.length;
}

function getAverageScore(data) {
    const averageMark = [];
    for (let prop in data) {
        data[prop] = getAverageMark(data[prop]);
        averageMark.push(data[prop]);
    }
    data['average'] = getAverageMark(averageMark);
    return data;
}

// Задача 3

function getDecodedValue(secret) {
    if (secret == 1)
        return `Эмильо`;
    return `Родриго`;
}

function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };
}