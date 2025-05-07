window.addEventListener("load", () => {
  let gigs_grid = document.querySelector(".gigs .grid");
  let gigs_sizer = document.querySelector(".gigs .grid-sizer");

  let gigs_masonry_grid = new Masonry(gigs_grid, {
    columnWidth: gigs_sizer,
    itemSelector: ".gigs .grid-item",
    percentPosition: true,
    horizontalOrder: true,
  });

  var swiper = new Swiper(".photos .swiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    on: {
      sliderFirstMove: function () {
        let swipe_gif = document.querySelector(".photos .swipe");
        if (swipe_gif) {
          swipe_gif.remove();
        }
      },
    },
    breakpoints: {
      661: {
        slidesPerView: "auto",
        centeredSlides: true,
      },
    },
  });

  ScrollTrigger.batch(".show-in-view", {
    once: true,
    toggleClass: "animate",
    start: "top 80%",
  });

  setTimeout(() => {
    document.querySelector(".layer").classList.add("hide");
  }, 2000);
});
