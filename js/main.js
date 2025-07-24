/* global variables */

let left_operand = {value: 0};
let right_operand = {value: 0};



/* click evnet of buttons */

//  C 
document.getElementById('btn_clean').addEventListener('click', function(){
    const inputBoxes = document.querySelectorAll('.calc-text');
    inputBoxes.forEach(box =>{
        box.textContent = "0";
    });
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
        const inputBox = document.getElementById('major');
        const str = inputBox.textContent;
        let input = this.textContent;
        
        isMaximum = CheckMaximumDisplay(str);
        if(isMaximum){
            return;
        }

        //  append value
        if(str.length === 1 && str === '0'){
            inputBox.textContent = input;
        }
        else{
            inputBox.textContent = str + input;
        }
}))

//  float dot
document.getElementById('floatDot').addEventListener('click', function(){
    const inputBox = document.getElementById('major');
    let str = inputBox.textContent;

    if(str.includes('.')){
        return;
    }
    else{
        inputBox.textContent = str + '.';
    }
})

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