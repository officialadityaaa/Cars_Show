document.querySelector(".menu").addEventListener('click', () => {
    document.querySelector(".menu_line_1").classList.toggle("menu1");
    document.querySelector(".menu_line_2").classList.toggle("menu2");
    document.querySelector(".menu_line_2").style.transform = "rotate(0deg) ";
    document.querySelector(".menu_line_3").classList.toggle("menu3");
    document.querySelectorAll(".target").forEach((item) => {
        item.classList.toggle("change");
    });
});

document.querySelectorAll('.wrapper').forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".target").forEach((item) => {
            item.classList.remove("change");
        });
    });
});

// Add smooth scrolling to all links

  
const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
