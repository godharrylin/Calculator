/* global variables */

let left_operand = {value: "0"};
let right_operand = {value: ""};
let cur_operand = left_operand;
let operator = "";



/* click evnet of buttons */

//  C 
document.getElementById('btn_clean').addEventListener('click', function(){
    const inputBoxes = document.querySelectorAll('.calc-text');
    inputBoxes.forEach(box =>{
        box.textContent = "0";
    });

    Reset(0);
})

//  back
document.getElementById('btn_back').addEventListener('click', function(){
    const inputBox = document.getElementById('major');
    let str = inputBox.textContent;

    if(str.length === 1){
        inputBox.textContent = '0';
    }
    else{
        inputBox.textContent = str.substring(0, str.length-1);
    }

    Convertor();

    return;
})

//  number
document.querySelectorAll('.number').forEach(btn => 
    
    btn.addEventListener('click', function(){
        let input = this.textContent;
        str = cur_operand.value;

        isMaximum = CheckMaximumDisplay(str);
        
        //  append value
        if(str.length === 1 && str === "0"){
            cur_operand.value = input;
        }
        else if(isMaximum === false){
            cur_operand.value = str + input;
        }

        //  display 
        ShowCalculateReusltOnScreen();
        
}))

//  Exchange
// document.getElmenetById('btn_exchange').addEventListener('click', function(){
    
// })

//  float dot
document.getElementById('floatDot').addEventListener('click', function(){
    
    let val = cur_operand.value;

    if(val.includes('.') === false){
        cur_operand.value = val +  '.';
    }

    // diplay
    ShowCalculateReusltOnScreen();
    
})

//  operator
document.querySelectorAll('.operator').forEach(btn =>
    btn.addEventListener('click', function(event){

        // 當兩運算元都有值時，自動計算結果 
        cur_operand = right_operand;
        if(cur_operand.value !== ""){
            console.log(`Calculate and show, then set right_operand to left_operand.`);
            Calculate(operator);
            ShowCalculateReusltOnScreen();
        }

        operator = event.target.id;

    })
)

//  equal
document.getElementById('equal').addEventListener('click', function(){

    Calculate(operator);
    ShowCalculateReusltOnScreen();
})

//  % 
document.getElementById('persent').addEventListener('click', function(){
    if(cur_operand.value === "0"){
        return;
    }

    const val = new Decimal(cur_operand.value);
    cur_operand.value = String(val.times(0.01));
    console.log(`cur_operand = ${cur_operand.value}`);
    ShowResultOnScreen();

})


/* function */
//  貨幣轉換
function Convertor(){

}

//  檢查最大顯示長度
function CheckMaximumDisplay(str){
    if(str.length === 19){
        return true;
    }
    else{
        return false;
    }
}


function Calculate(operator){

    //  If not calculate
    if(operator === "" || right_operand.value === ""){
        console.log("Not calculate, return.")
        return;
    }

    const right_val = new Decimal(right_operand.value);
    const left_val = new Decimal(left_operand.value);
    let res = 0;

    switch(operator){
        case "add":
            res = left_val.plus(right_val);
            break;
        case "sub":
            res = left_val.minus(right_val);
            break;
        case "multiple":
            res = left_val.times(right_val);
            break;
        case "divide":
            res = left_val.dividedBy(right_val);
            break;
    }
    console.log(`${res}`);

    Reset(res);

    return res;
}

function Reset(res){

    left_operand.value = String(res);
    cur_operand = left_operand;
    right_operand.value = "";
    operator = "";
}

function ShowCalculateReusltOnScreen(){

    if(operator === ""){
        ShowResultOnScreen();
    }
}


function ShowResultOnScreen(){
    const inputBox = document.getElementById('major');
    inputBox.textContent = cur_operand.value;

}