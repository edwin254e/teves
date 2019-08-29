function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
     // Add smooth scrolling to all links in navbar + footer link
     $(".sidenav a").on('click', function(event) {
      var hash = this.hash;
      if (hash) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function() {
          window.location.hash = hash;
        });
      }
  
    });
  
    $(".sidenav a").on('click', function() {
          closeNav();
      });
      ///
      function myFunction(){
      document.getElementById("number1").innerHTML="0963636363";
      }
     // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}