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
var service=document.querySelector('.service')
var portfolio=document.querySelector('.portfolio')
home.addEventListener('click',function()
{
  // console.log("clicked")
  window.scrollTo(top)
})
about.addEventListener('click',function()
{
  console.log("clicked")
  window.scrollTo(0,630)
})
service.addEventListener('click',function()
{
  window.scrollTo(630,1350)
})
portfolio.addEventListener('click',function()
{
  window.scrollTo(0,2450)
})
var home2=document.querySelector('.home2');
var about2=document.querySelector('.about2')
var skills2=document.querySelector('.skills2')
var portfolio2=document.querySelector('.portfolio2')

home2.addEventListener('click',function()
{
  window.scrollTo(top)
  channel.classList.remove('open')
})
about2.addEventListener('click',function()
{
  window.scrollTo(0,700)
  channel.classList.remove('open')
})
skills2.addEventListener('click',function()
{
  window.scrollTo(0,1730)
  channel.classList.remove('open')
})
portfolio2.addEventListener('click',function()
{
  window.scrollTo(0,4500)
  channel.classList.remove('open')
})