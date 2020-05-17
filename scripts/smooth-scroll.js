function smoothScroll(destination, duration) {
  let target = document.querySelector(destination);
  let targetRelativePosition = target.getBoundingClientRect().top;
  let currentPosition = window.pageYOffset;
  let distance = targetRelativePosition - currentPosition;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    let positionY = easeInOut(progress, currentPosition, distance, duration);
    scrollTo(0, positionY);
    if (progress < duration) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function easeInOut(currentTime, startValue, distanceBetweenStartEnd, duration) {
  t = currentTime;
  c = distanceBetweenStartEnd;
  t /= duration / 2;
  if (t < 1) return (c / 2) * t * t * t * t + startValue;
  t -= 2;
  return (-c / 2) * (t * t * t * t - 2) + startValue;
}

let aboutMe = document.querySelector("#about-me");
aboutMe.addEventListener("click", () => {
  smoothScroll(".blob-card", 2000);
});
