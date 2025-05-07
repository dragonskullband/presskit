window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".layer").classList.add("hide");
  }, 2200);
  let photos_grid = document.querySelector(".photos .grid");
  let photos_sizer = document.querySelector(".photos .grid-sizer");
  let gigs_grid = document.querySelector(".gigs .grid");
  let gigs_sizer = document.querySelector(".gigs .grid-sizer");

  let photos_masonry_grid = new Masonry(photos_grid, {
    columnWidth: photos_sizer,
    itemSelector: ".photos .grid-item",
    percentPosition: true,
    horizontalOrder: true,
  });

  let gigs_masonry_grid = new Masonry(gigs_grid, {
    columnWidth: gigs_sizer,
    itemSelector: ".gigs .grid-item",
    percentPosition: true,
    horizontalOrder: true,
  });
});
