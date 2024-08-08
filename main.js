var num = +prompt('Сколько вам лет?')

if(num <= 18) {
    alert('Вы еще молоды, Вам нужно учиться');
}else if(num <= 50) {
    alert('Вам нужно работать');
}else if(num <= 59) {
    alert('Вам скоро на пенсию')
}else if(num <= 100) {
    alert('Вы пенсионер')
}else {
    alert('Что-то пошло не так')
}

var watch = +prompt('Введите время')

switch(watch) {
    case 1:
        alert('1 час ночи')
        break
    case 2:
        alert('2 часа ночи')
        break
    case 3:
        alert('3 часа ночи')
        break
    case 4:
        alert('4 часа ночи')
        break
    case 5:
        alert('5 часов ночи')
        break
    case 6:
        alert('6 часов ночи')
        break
    case 7:
        alert('7 часов утра')
        break
    case 8:
        alert('8 часов утра')
        break
    case 9:
        alert('9 часов утра')
        break
    case 10:
        alert('10 часов утра')
        break
    case 11:
        alert('11 часов дня')
        break
    case 12:
        alert('12 часов дня')
        break
    case 13:
        alert('1 час дня')
        break
    case 14:
        alert('2 часа дня')
        break
    case 15:
        alert('3 часа дня')
        break
    case 16:
        alert('4 часа дня')
        break
    case 17:
        alert('5 часов дня')
        break
    case 18:
        alert('6 часов вечера')
        break
    case 19:
        alert('7 часов вечера')
        break
    case 20:
        alert('8 часов вечера')
        break
    case 21:
        alert('9 часов вечера')
        break
    case 22:
        alert('10 часов вечера')
        break
    case 23:
        alert('11 часов вечера')
        break
    case 0:
        alert('12 часов вечера')
        break
    case 24:
        alert('12 часов вечера')
        break
}

var X = +prompt("Введите первое число:");
        var Y = +prompt("Введите второе число:");
        var Z = +prompt("Введите третье число:");

        if ((X > Y && X < Z) || (X > Z && X < Y)) {
            middle = X;
        } else if ((Y > X && Y < Z) || (Y > Z && Y < X)) {
            middle = Y;
        } else {
            middle = Z;
        }
       
        alert("Среднее число: " + middle);