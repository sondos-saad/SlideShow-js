
let imgSlide = document.getElementById("img-slide");
let images = ['images/2.jpg', 'images/3.jpg' , 'images/4.png'];
let i = 0;
 function slideShow(){
    imgSlide.setAttribute('src' , images[i]);
    if(i == images.length-1){
        i=0
    }else{
       i++ 
    }
    setTimeout(function(){
        slideShow()
    }, 2000);
 }
 slideShow();