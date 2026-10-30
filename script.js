let gamma = document.getElementById("ejeGamma");
let beta = document.getElementById("beta");
let buton = document.getElementById("buton");

// buton.addEventListener("click", handleClick)
buton.addEventListener("click", () => {
  beta.textContent = "guay";
});

function handleClick() {
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    // The API requires permission — request it
    Promise.all([
      DeviceMotionEvent.requestPermission(),
      DeviceOrientationEvent.requestPermission(),
    ]).then(([motionPermission, orientationPermission]) => {
      if (
        motionPermission === "granted" &&
        orientationPermission === "granted"
      ) {
        window.addEventListener("devicemotion", handleMotion);
        window.addEventListener("deviceorientation", handleOrientation);
      }
    });
  } else {
    // No permission needed, add event listeners directly
    window.addEventListener("devicemotion", handleMotion);
    window.addEventListener("deviceorientation", handleOrientation);
  }
}


function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  gamma.innerText = gamma;
  beta.innerText = beta;
}
