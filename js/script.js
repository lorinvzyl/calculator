let numButtons = document.querySelectorAll(".btn.num");
let symButtons = document.querySelectorAll(".btn.symbol");
let decimal = document.querySelector(".btn.dec");
let clear = document.querySelector(".btn.cmd");
let equals = document.querySelector(".btn.equals");
let display = document.querySelector(".entry");

numButtons.forEach(button => button.addEventListener('click', storeVal));
symButtons.forEach(button => button.addEventListener('click', operatorClicked));
decimal.addEventListener('click', storeVal, {once: true});
clear.addEventListener('click', clearValues);
equals.addEventListener('click', calculate);

function add(num1, num2)
{
    return num1+num2;
}

function subtract(num1, num2)
{
    return num1-num2;
}

function multiply(num1, num2)
{
    return num1*num2;
}

function divide(num1, num2)
{
    if(num2 === 0)
        return "Heh, no."
    else
        return num1/num2;
}

function operate(operator, num1, num2)
{
    switch(operator)
    {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1,num2);
        case "×":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}

function operatorClicked(e)
{
    storeVal(e);
    decimal.addEventListener('click', storeVal, {once: true});
}

function clearValues()
{
    display.textContent = "";
    decimal.addEventListener('click', storeVal, {once: true});
}

function storeVal(e)
{
    display.textContent += e.target.textContent;
}

function calculate()
{
    let str = display.textContent;
    let numArray = str.replaceAll("-"," ").replaceAll("+"," ").replaceAll("×", " ").replaceAll("÷", " ").split(" ");
    let opStr = str;
    numArray.forEach(num => {
        opStr = opStr.replace(num, " ");
    });

    numArray = numArray.map((str) => Number(str));
    let operatorArray = opStr.trim().split(" ");

    let x = 0;
    let calcValue = 0;
    for(const operator of operatorArray)
    {
        if(x === 0)
            calcValue = operate(operator, numArray[x], numArray[++x]);
        else
            calcValue = operate(operator, calcValue, numArray[++x]);
        if(typeof calcValue === "string")
            break;
    };

    display.textContent = formatNum(calcValue);
}

function formatNum(num)
{
    if(num%1 === 0 || typeof num === "string")
        return num;
    else
        return num.toFixed(2)
}
