window.addEventListener('scroll',function(){
    let header = document.querySelector('nav');
    if(scrollY>20){
        header.classList.add('scroll-active');
        document.getElementById('span-1').classList.remove('span');
    }
    else{
        header.classList.remove('scroll-active');
    }
    
})

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("gif-1").style.paddingInline = scrolled + "%";
}