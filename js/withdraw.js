document.getElementById('btn-withdraw').addEventListener('click', function(){
  //input nibe koto tk seta
  const withdrawField= document.getElementById('withdraw-field');
  const newWithDrawAmountString= withdrawField.value;
  const newWithdrawAmount= parseFloat(newWithDrawAmountString);

  //withdraw button a click korar por input box clean kore dibe
  withdrawField.value= '';

  //box a number na diye onno kichu type korle akta alert msg dibe
  if(isNaN(newWithdrawAmount)){
    alert('your TK should be Number');
    return;
  }

  //withdraw box a input theke money jeye add korte hobe
  //niche string theke num a convert korche
  const withdrawTotalElement= document.getElementById('withdraw-total');
  const previousWithdrawTotalString= withdrawTotalElement.innerText;
  const previousWithdrawTotal= parseFloat(previousWithdrawTotalString);

  //withdraw box jog hobe total koto tk withdraw hocche
  // const currentWithdrawTotal= previousWithdrawTotal + newWithdrawAmount;
  // withdrawTotalElement.innerText= currentWithdrawTotal;

  //balance total box a string value k num a convert korbo
  const balanceTotalElement= document.getElementById('balance-total');
  const previousBalanceTotalString= balanceTotalElement.innerText;
  const previousBalanceTotal= parseFloat(previousBalanceTotalString);


  //total balance er theke  jodi beshi tk withdraw korte chai
  if(newWithdrawAmount > previousBalanceTotal){
    alert('Insufficient Balance');
    return;
  }

  //withdraw box jog hobe total koto tk withdraw hocche
  const currentWithdrawTotal= previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText= currentWithdrawTotal;


  //balance total box a withdraw korar por koto ache seta dekbo 
  const newBalanceTotal= previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText= newBalanceTotal;

  


  //withdraw button a click korar por input box clean kore dibe
  // withdrawField.value= '';


})