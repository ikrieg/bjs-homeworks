'use strict'

// Зачдача 1

function parseCount (count) {
    const newCount = Number.parseInt(count);
    if (newCount) {
        return newCount;
    } else {
        throw new Error('Невалидное значение');
    }
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (err){
        return err;
    }
}

// Задача 2

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const semiperimeter = (this.a + this.b + this.c) / 2;
        const area = Math.sqrt(semiperimeter * (semiperimeter - this.a) * (semiperimeter - this.b) * (semiperimeter - this.c));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(err) {
        return {
            getPerimeter: () => 'Ошибка! Неправильный треугольник',
            getArea: () => 'Ошибка! Неправильный треугольник'
        };
    }
}
