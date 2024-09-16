document.getElementById('btn-deposit').addEventListener('click', function(){
  const depositField= document.getElementById('deposit-field');
  const newDepositAmountString= depositField.value;
  const newDepositAmount= parseFloat(newDepositAmountString);

  if(isNaN(newDepositAmount)){
    alert('your TK should be Number');
    return;
  }


  //ebar input tk deposit box a set hobe.
  const depositTotalElement= document.getElementById('deposit-total');
  const previousDepositTotalString= depositTotalElement.innerText;
  const previousDepositTotal= parseFloat(previousDepositTotalString);

  //string theke sob number a convert howyar pore , number duita add hobe
  const currentDepositTotal= previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText= currentDepositTotal;

  //deposit box theke tk ta Blance box e jabe and jog hobe
  const balanceTotalElement= document.getElementById('balance-total');
  const previousBalanceTotalString= balanceTotalElement.innerText;
  const previousBalanceTotal= parseFloat(previousBalanceTotalString);

  //blance box er moddhe string convert holo number a ebar niche blance box a jog hoye amount of tk ta bosbe
  const currentBalanceTotal= previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText=currentBalanceTotal;



  //input box a value dewyar por diposit button chap dewyar por input box er data muche jabe
  depositField.value='';

})