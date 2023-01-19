
 /*    Modal Search */
const modal = document.querySelector('.modal')
const searchBtn = document.getElementById('searchBtn')
const closeBtn = document.getElementById('close')

/* MENU */
const overlay = document.querySelector('.overlay')
const openMenu = document.querySelector('.hamburguer')
const closeMenu = document.getElementById('pocket-close')
const overSeach = document.getElementById('searchBtnOver')
const searchMenu = document.getElementById('pocket-search')



 /*    Modal Search */
searchBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

/* MENU */
openMenu.addEventListener('click', openNav)
closeMenu.addEventListener('click', closeNav)
searchMenu.addEventListener('click', openModal)



 /*    Modal Search */
function openModal(){
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}
function outsideClick(e){
    if(e.target == modal){
        closeModal();
    }
}

$(document).ready(function () {
    $("#kitchen").hover(
      function () {
        $(".overlay").addClass("overlay-kitchen");
      },
      function () {
        $(".overlay").removeClass("overlay-kitchen");
      }
    );
  });

  $(document).ready(function () {
    $("#ironing").hover(
      function () {
        $(".overlay").addClass("overlay-ironing");
      },
      function () {
        $(".overlay").removeClass("overlay-ironing");
      }
    );
  });

  $(document).ready(function () {
    $("#collections").hover(
      function () {
        $(".overlay").addClass("overlay-collections");
      },
      function () {
        $(".overlay").removeClass("overlay-collections");
      }
    );
  });


  $(document).ready(function () {
    $("#promotions").hover(
      function () {
        $(".overlay").addClass("overlay-promotions");
      },
      function () {
        $(".overlay").removeClass("overlay-promotions");
      }
    );
  });


  $(document).ready(function () {
    $("#More").hover(
      function () {
        $(".overlay").addClass("overlay-more");
      },
      function () {
        $(".overlay").removeClass("overlay-more");
      }
    );
  });


  
  $(document).ready(function () {
    $("#More").hover(
      function () {
        $(".overlay").addClass("overlay-more");
      },
      function () {
        $(".overlay").removeClass("overlay-more");
      }
    );
  });

  
  $(document).ready(function () {
    $("#More").hover(
      function () {
        $(".overlay").addClass("overlay-more");
      },
      function () {
        $(".overlay").removeClass("overlay-more");
      }
    );
  });


  
  $(document).ready(function () {
    $("#versatility").hover(
      function () {
        $(".overlay").addClass("overlay-versatility");
      },
      function () {
        $(".overlay").removeClass("overlay-versatility");
      }
    );
  });


  $(document).ready(function () {
    $("#garment").hover(
      function () {
        $(".overlay").addClass("overlay-garment");
      },
      function () {
        $(".overlay").removeClass("overlay-garment");
      }
    );
  });



 
/* MENU */
function openNav() {
    document.getElementById('myNav').style.height="100%";

  }
  
  function closeNav() {
    document.getElementById('myNav').style.height="0%";
  }
  
  
