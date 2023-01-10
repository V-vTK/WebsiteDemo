console.log("JavaScript Log01")



function openNav() {
  document.getElementById("mySidebar").style.width = "18vw";
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById("OpenButton").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  setTimeout(() => { document.getElementById("OpenButton").style.visibility = "visible"; }, 500);
}



function OCSub1() {
  var hide1 = document.getElementById("sub1");
  var hide2 = document.getElementById("sub2");
  var hide3 = document.getElementById("sub3");
  var hide4 = document.getElementById("sub4");
  var hide5 = document.getElementById("sub5");
  var hide6 = document.getElementById("sub6");
  if (hide1.style.display === "none") {
    hide1.style.display = "block";
  } else {
    hide1.style.display = "none";
  }

  if (hide2.style.display === "none") {
    hide2.style.display = "block";
  } else {
    hide2.style.display = "none";
  }

  if (hide3.style.display === "none") {
    hide3.style.display = "block";
  } else {
    hide3.style.display = "none";
  }

  if (hide4.style.display === "none") {
    hide4.style.display = "block";
  } else {
    hide4.style.display = "none";
  }

  if (hide5.style.display === "none") {
    hide5.style.display = "block";
  } else {
    hide5.style.display = "none";
  }

  if (hide6.style.display === "none") {
    hide6.style.display = "block";
  } else {
    hide6.style.display = "none";
  }


}

function OCSub2() {
  var hide1 = document.getElementById("sub21");
  var hide2 = document.getElementById("sub22");
  var hide3 = document.getElementById("sub23");
  var hide4 = document.getElementById("sub24");
  if (hide1.style.display === "none") {
    hide1.style.display = "block";
  } else {
    hide1.style.display = "none";
  }

  if (hide2.style.display === "none") {
    hide2.style.display = "block";
  } else {
    hide2.style.display = "none";
  }

  if (hide3.style.display === "none") {
    hide3.style.display = "block";
  } else {
    hide3.style.display = "none";
  }

  if (hide4.style.display === "none") {
    hide4.style.display = "block";
  } else {
    hide4.style.display = "none";
  }
}

function OCSub3() {
  var hide1 = document.getElementById("sub31");
  var hide2 = document.getElementById("sub32");
  var hide3 = document.getElementById("sub33");
  var hide4 = document.getElementById("sub34");
  if (hide1.style.display === "none") {
    hide1.style.display = "block";
  } else {
    hide1.style.display = "none";
  }

  if (hide2.style.display === "none") {
    hide2.style.display = "block";
  } else {
    hide2.style.display = "none";
  }

  if (hide3.style.display === "none") {
    hide3.style.display = "block";
  } else {
    hide3.style.display = "none";
  }

  if (hide4.style.display === "none") {
    hide4.style.display = "block";
  } else {
    hide4.style.display = "none";
  }
}


window.addEventListener('scroll', reveal);
    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;  /*was 150 */

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
  }
}



function TextSlideSocialize() {
  var hide1 = document.getElementById("Socialize1");
  var hide2 = document.getElementById("Socialize2");
  var hide3 = document.getElementById("Socialize3");

  if (hide1.matches(".Slide.active2")) {
    setTimeout(function() {
      hide3.classList.remove('active3');
      hide1.classList.remove('active2');
      hide1.classList.add('active3')
      hide2.classList.add('active2');
    }, 1000);  
  }

  if (hide2.matches(".Slide.active2")) {
    setTimeout(function() {
      hide1.classList.remove('active3');
      hide2.classList.remove('active2');
      hide2.classList.add('active3')
      hide3.classList.add('active2');
    }, 1000);  
  }

  if (hide3.matches(".Slide.active2")) {
    setTimeout(function() {
      hide2.classList.remove('active3');
      hide3.classList.remove('active2');
      hide3.classList.add('active3')
      hide1.classList.add('active2');
    }, 1000);  
  }
}

function TextSlideOrganize() {
  var hide1 = document.getElementById("Organize1");
  var hide2 = document.getElementById("Organize2");
  var hide3 = document.getElementById("Organize3");

  if (hide1.matches(".Slide.active2")) {
    setTimeout(function() {
      hide3.classList.remove('active3');
      hide1.classList.remove('active2');
      hide1.classList.add('active3')
      hide2.classList.add('active2');
    }, 2000);  
  }

  if (hide2.matches(".Slide.active2")) {
    setTimeout(function() {
      hide1.classList.remove('active3');
      hide2.classList.remove('active2');
      hide2.classList.add('active3')
      hide3.classList.add('active2');
    }, 2000);  
  }

  if (hide3.matches(".Slide.active2")) {
    setTimeout(function() {
      hide2.classList.remove('active3');
      hide3.classList.remove('active2');
      hide3.classList.add('active3')
      hide1.classList.add('active2');
    }, 2000);  
  }
}


function PictureSlideShow() {
  var hide1 = document.getElementById("PictureSlide1");
  var hide2 = document.getElementById("PictureSlide2");
  var hide3 = document.getElementById("PictureSlide3");
  var hide4 = document.getElementById("PictureSlide4");

  var header1 = document.getElementById("HeaderSlide1");
  var header2 = document.getElementById("HeaderSlide2");
  var header3 = document.getElementById("HeaderSlide3");
  var header4 = document.getElementById("HeaderSlide4");

  if (hide4.matches(".PictureShown")) {
    hide4.classList.remove('PictureShown');
    hide4.classList.add('PictureHidden');
    hide1.classList.remove('PictureHidden');
    hide1.classList.add('PictureShown');
    header4.classList.remove('HTextShown');
    header4.classList.add('HTextHidden');
    header1.classList.remove('HTextHidden');
    header1.classList.add('HTextShown');
    return
  }

  if (hide3.matches(".PictureShown")) {
    hide3.classList.remove('PictureShown');
    hide3.classList.add('PictureHidden');
    hide4.classList.remove('PictureHidden');
    hide4.classList.add('PictureShown');
    header3.classList.remove('HTextShown');
    header3.classList.add('HTextHidden');
    header4.classList.remove('HTextHidden');
    header4.classList.add('HTextShown');
    return
  }

  if (hide2.matches(".PictureShown")) {
    hide2.classList.remove('PictureShown');
    hide2.classList.add('PictureHidden');
    hide3.classList.remove('PictureHidden');
    hide3.classList.add('PictureShown');
    header2.classList.remove('HTextShown');
    header2.classList.add('HTextHidden');
    header3.classList.remove('HTextHidden');
    header3.classList.add('HTextShown');
    return
  }

  if (hide1.matches(".PictureShown")) {
    hide1.classList.remove('PictureShown');
    hide1.classList.add('PictureHidden');
    hide2.classList.remove('PictureHidden');
    hide2.classList.add('PictureShown');
    header1.classList.remove('HTextShown');
    header1.classList.add('HTextHidden');
    header2.classList.remove('HTextHidden');
    header2.classList.add('HTextShown');
    return
  }

}


function MagniAnimation() {
  var Move11 = document.getElementById("Magni2");
  var Fade1 = document.getElementById("MagniP1");
  var Fade2 = document.getElementById("MagniP2");
  var Fade3 = document.getElementById("MagniP3");
  var Fade4 = document.getElementById("MagniP4");

  if (Move11.matches(".Move1")) {
    Fade1.classList.remove('MoveP1')
    Fade1.classList.add('MoveP11')
    setTimeout(function() {
      Move11.classList.remove('Move1')
      Move11.classList.add('Move2')
      setTimeout(function() {
        Fade2.classList.remove('MoveP22')
        Fade2.classList.add('MoveP2')
      }, 1500);
    }, 1000);  
  }

  if (Move11.matches(".Move2")) {
    Fade2.classList.remove('MoveP2')
    Fade2.classList.add('MoveP22')
    setTimeout(function() {
      Move11.classList.remove('Move2')
      Move11.classList.add('Move3')
      setTimeout(function() {
        Fade3.classList.remove('MoveP33')
        Fade3.classList.add('MoveP3')
      }, 1500);
    }, 1000);  
  }

  if (Move11.matches(".Move3")) {
    Fade3.classList.remove('MoveP3')
    Fade3.classList.add('MoveP33')
    setTimeout(function() {
      Move11.classList.remove('Move3')
      Move11.classList.add('Move4')
      setTimeout(function() {
        Fade4.classList.remove('MoveP44')
        Fade4.classList.add('MoveP4')
      }, 1500);
    }, 1000);  
  }

  if (Move11.matches(".Move4")) {
    Fade4.classList.remove('MoveP4')
    Fade4.classList.add('MoveP44')
    setTimeout(function() {
      Move11.classList.remove('Move4')
      Move11.classList.add('Move1')
      setTimeout(function() {
        Fade1.classList.remove('MoveP11')
        Fade1.classList.add('MoveP1')
      }, 1500); 
    }, 1000);  
  }

}


var intervalId = window.setInterval(function(){
  TextSlideSocialize();
  TextSlideOrganize();
  MagniAnimation();
  PictureSlideShow();
}, 4500);



