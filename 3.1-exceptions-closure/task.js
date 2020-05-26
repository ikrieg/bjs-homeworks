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
        this.perimeter = a + b + c;
        if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this. a) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.perimeter;
    }

    getArea() {
        const semiperimeter = this.perimeter / 2;
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
