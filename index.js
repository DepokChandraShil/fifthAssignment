const remainAmount = document.getElementById('remainAmount');
const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');
const historySec = document.getElementById('historySec');
const donationSec = document.getElementById('donationSec');
const blog = document.getElementById('blog');

  blog.addEventListener("click",function(){
    window.location.href = '/blog.html';
    
    })


function commonFunction(currentDate,inputAmount,heading,amountValue,remainAmountValue,history,amount,inputValue){
  if(isNaN(inputAmount)){
    alert('alert');
    return;
   }
  else if(inputAmount <0){
    alert('alert');
  }
  const div = document.createElement('div');
  div.classList.add('history')
   div.innerHTML = `
   <h1 class="font-bold text-xl my-5">${inputAmount} Taka is ${heading}</h1>
   <p class="text-sm text-slate-400">Date:${currentDate} </p>
   `
  amount.innerText = amountValue + inputAmount;
  remainAmount.innerText = remainAmountValue - inputAmount;
  history.appendChild(div);
  inputValue.value = '';
}





document.getElementById("handleNoakhali").addEventListener("click", function() {
  const noakhaliAmount =document.getElementById('noakhaliAmount');
  const inputNoakhaliValue = document.getElementById('inputNoakhaliValue');
  const remainAmountValue = parseFloat(remainAmount.innerText);
  const noakhaliAmountValue = parseFloat(noakhaliAmount.innerText);
  const  noakhaliInputAmount= parseFloat(inputNoakhaliValue.value);
  const currentDate = new Date();
  const headingNoakhali = document.getElementById('headingNoakhali').innerText;
  const history = document.getElementById('history');
 commonFunction(currentDate,noakhaliInputAmount,headingNoakhali,noakhaliAmountValue,remainAmountValue,history,noakhaliAmount,inputNoakhaliValue);
 historySec.classList.add('hidden');
  
});
document.getElementById("handlefeni").addEventListener("click", function() {
  const feniAmount =document.getElementById('feniAmount');
  const inputfeniValue = document.getElementById('inputfeniValue');
  const remainAmountValue = parseFloat(remainAmount.innerText);
  const feniAmountValue = parseFloat(feniAmount.innerText);
  const  feniInputAmount= parseFloat(inputfeniValue.value);
  const currentDate = new Date();
  const headingfeni = document.getElementById('headingfeni').innerText;
  const history = document.getElementById('history');
  historySec.classList.add('hidden');
    commonFunction(currentDate,feniInputAmount,headingfeni,feniAmountValue,remainAmountValue,history,feniAmount,inputfeniValue);
  
});

document.getElementById("handlequota").addEventListener("click", function() {
  const quotaAmount =document.getElementById('quotaAmount');
  const inputquotaValue = document.getElementById('inputquotaValue');
  const remainAmountValue = parseFloat(remainAmount.innerText);
  const quotaAmountValue = parseFloat(quotaAmount.innerText);
  const  quotaInputAmount= parseFloat(inputquotaValue.value);
  const currentDate = new Date();
  const headingquota = document.getElementById('headingquota').innerText;
  const history = document.getElementById('history');
  historySec.classList.add('hidden');
    commonFunction(currentDate,quotaInputAmount,headingquota,quotaAmountValue,remainAmountValue,history,quotaAmount,inputquotaValue);
});

donationBtn.addEventListener("click",function(){
donationSec.classList.remove('hidden');
historySec.classList.add('hidden');
donationBtn.classList.add('active');
historyBtn.classList.remove('active');
})
historyBtn.addEventListener("click",function(){
  donationSec.classList.add('hidden');
  historySec.classList.remove('hidden');
  historyBtn.classList.add('active');
  donationBtn.classList.remove('active');
})
