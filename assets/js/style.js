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

var menu=document.querySelector('.menu');
var channel=document.querySelector('.channel');
menu.addEventListener('click',function()
{
  window.scrollTo(top)
  channel.classList.toggle("open")
})