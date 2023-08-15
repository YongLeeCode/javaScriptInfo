
// call function:
functionName('Yonghwan Lee');

// alert(addNum(1, 2));

// 
// function의 기본 형태:
function functionName(parameter){
    // alert(parameter);
}

// 
// return을 사용하여 function 밖으로 결과값을 가져오기
function addNum(num1, num2){
    const add = num1 + num2;
    return add;
}


// 
const variables = 'hi';

// global variable and function variable
function testGlobVarAndVarInFunc(){
    const variables = 'hello';
    return variables;
}
console.log(testGlobVarAndVarInFunc())