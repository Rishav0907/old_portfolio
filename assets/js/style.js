var items=document.querySelector(".about-me-part")

topics=["a programmer","an ethical hacker","a ml enthusiast","a web developer"]

var index=0;
var count=0;
var letter='';
var currentText='';

(function type()
{
  if(count===topics.length)
  {
    count=0;
  }
  currentText=topics[count];
  letter=currentText.slice(0,++index);
  items.textContent=letter


  if(letter.length===currentText.length)
  {

      count++;
      index=0;
  }
  setTimeout(type,260)
})();
var items1=document.querySelector(".about-me-part-2")
items1.style.color='#ff1493'
topics1=["a programmer","an ethical hacker","a ml enthusiast","a web developer"]

var index1=0;
var count1=0;
var letter1='';
var currentText1='';

(function type()
{
  if(count1===topics1.length)
  {
    count1=0;
  }
  currentText1=topics1[count1];
  letter1=currentText1.slice(0,++index1);
  items1.textContent=letter1


  if(letter1.length===currentText1.length)
  {

      count1++;
      index1=0;
  }
  setTimeout(type,260)
})();

var menu=document.querySelector('.menu');
var channel=document.querySelector('.channel');
menu.addEventListener('click',function()
{
  window.scrollTo(top)
  channel.classList.toggle("open")
})

var home=document.querySelector('.home');
var about=document.querySelector('.about')
home.addEventListener('click',function()
{
  // console.log("clicked")
  window.scrollTo(top)
})
about.addEventListener('click',function()
{
  console.log("clicked")
  window.scrollTo(0,750)
})