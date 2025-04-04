//counter.js

$(document).ready(function () {
   // code from https://code.mukto.info/counter-up-with-a-simple-jquery/
   // Create new intersection observer
   var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
         if (entry.isIntersecting) {
            $(entry.target)
               .prop('Counter', 0)
               .animate(
                  {
                     Counter: $(entry.target).text()
                  },
                  {
                     duration: 4000,
                     easing: 'swing',
                     step: function (now) {
                        $(entry.target).text(Math.ceil(now));
                     }
                  }
               );
            observer.unobserve(entry.target);
         }
      });
   });

   $('.counterup').each(function () {
      observer.observe(this);
   });
});

//logo slider

jQuery(document).ready(function ($) {
   'use strict';
   $('.customer-logos').owlCarousel({
      margin: 30,
      loop: true,
      center: false,
      items: 8,
      autoplay: true,
      dots: false,
      nav: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
         0: {
            items: 1
         },
         768: {
            items: 2
         },
         1170: {
            items: 8
         }
      }
   });
});

// sticky-nav

window.addEventListener('scroll', function () {
   const nav = document.querySelector('nav');
   nav.classList.toggle('sticky', window.scrollY > 75);
});
