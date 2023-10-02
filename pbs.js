//pb1: calculate the average number:-

function calcAverage(arrOfNums) {
    if (arrOfNums.length === 0) {
        return 0;
    }

    var sum = 0;
    for (var i = 0; i < arrOfNums.length; i++) {
        sum += arrOfNums[i];
    }
    return (sum / arrOfNums.length);
}
var arr = [3, 3, 6, 8, 4, 78, 90, 100];
document.getElementById("avg").innerHTML = calcAverage(arr);

//pb2: calculate the area of triangle:-

function areaOfTriangle(l, w) {
    var area = (0.5 * l * w);
    return (area);
}
document.getElementById("tArea").innerHTML = areaOfTriangle(4, 5);

//pb3: calculated age in days:-

function ageInDays(years) {
    return (years * 365);
}
document.getElementById("age").innerHTML = ageInDays(3);

//pb4: calculate the sum of two nums:-

function calcSum(num1, num2) {
    return (num1 + num2);
}
document.getElementById("sum").innerHTML = calcSum(5, 6);

//pb5: return first element of an array:-

function arrFirstElement(arr) {
    if (arr.length == 0) {
        return "empty array"
    } else {
        return (arr[0]);
    }
}
var fruits = ["apple", "banana", "kiwi", "watermelon"];
document.getElementById("firstElement").innerHTML = arrFirstElement(fruits);

//pb6: show my name on html page:-

function displayMyName() {
    var name = "Mariam Amr";
    return name;
}
document.getElementById("name").innerHTML = displayMyName();

//pb7: convert hours to sec, :-

function hoursToSecs(hours) {
    return (hours * 3600);
}
document.getElementById("hour").innerHTML = hoursToSecs(3);

//pb8: true if morethan 350 false otherwise :-

function moreThan350(w, x, y, z) {
    var sum = w + x + y + z;
    if (sum > 350) {
        return true;
    } else {
        return false;
    }
}
document.getElementById("morethan350").innerHTML = moreThan350(30, 10, 5, 4);

//pb9: number equals zero or not:-

function zeroOrNot(x) {
    if (x === 0) {
        return true;
    } else {
        return false;
    }
}
document.getElementById("zero").innerHTML = zeroOrNot(0);

//pb10: remainder of two nums :-

function calcRemainder(x, y) {
    return (x % y);
}
document.getElementById("remainder").innerHTML = calcRemainder(20, 3);

//pb11: largest num of two :-

function largestNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 == num2) {
        return "the two nums are equal";
    } else {
        return num2;
    }
}
document.getElementById("large").innerHTML = largestNum(3, 6);

//pb12: variable is number or not :-

function isNum(x) {
    if (typeof (x) == "number") {
        return true;
    } else {
        return false;
    }
}
document.getElementById("number").innerHTML = isNum(9);

//pb13: get the current date :-

function currentDate(){
    var today = new Date();
    return(today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear());
}
document.getElementById("today").innerHTML = currentDate();
