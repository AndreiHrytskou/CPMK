const videoBtn = document.querySelector(".video__button");
const videoImg = document.querySelector(".video__img");
videoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  videoBtn.className = "video-active";
  const iframe = document.createElement("iframe");
  videoBtn.append(iframe);
  iframe.className = "video__frame";
  let videoSrc = videoBtn.href;
  let videoId = videoSrc.substr(17) + "?autoplay=1&mute=1";
  videoImg.style.display = "none";
  let link = "https://www.youtube.com/embed/" + videoId;
  iframe.src = link;
  iframe.style.display = "block";
});
