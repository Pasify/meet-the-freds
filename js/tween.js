// let begin = {
//   x: 200,
//   duration: 2,
//   ease: "back.out(4)",
// };
// let begin2 = {
//   x: 200,
//   duration: 2,
//   ease: "none",
//   //   delay: 2, //seconds before starting animation
//   //   repeat: 1,
// };

// // gsap.to(".fred", begin);
// // gsap.to(".fred2", begin2);

// gsap.to("#freds img", {
//   y: -100,
//   //   yoyo: true,
//   //   repeat: 2,
//   ease: "back.out(2)",
//   stagger: {
//     // each: 0.1,
//     amount: 0.1,
//     from: "edges",
//   },
// });
// const playButton = document.querySelector("#play");
// const pauseButton = document.querySelector("#pause");
// const reverseButton = document.querySelector("#reverse");
// const restartButton = document.querySelector("#restart");
// let tween = gsap.to(".fred", {
//   x: 600,
//   ease: "none",
//   duration: 3,
//   paused: true,
// });
// playButton.addEventListener("click", () => tween.play());
// pauseButton.addEventListener("click", () => tween.pause());
// reverseButton.addEventListener("click", () => tween.reverse());
// restartButton.addEventListener("click", () => tween.restart());

// gsap.from("#demo", { opacity: 0, duration: 1, scale: 0 });
// gsap.from("#title", {
//   duration: 1,
//   delay: 1,
//   opacity: 0,
//   scale: 0,
// });
// gsap.from("#freds img", { duration: 0.5, delay: 2, scale: 0, stager: 0.5 });
// gsap.from("#time", {
//   duration: 1,
//   opacity: 0,
//   xPercent: 100,
//   delay: 3,
//   ease: "bounce",
// });

gsap
  .timeline()
  .from("#demo", { opacity: 0, duration: 1 })
  .from("#title", { opacity: 0, scale: 0, ease: "bounce" })
  .from("#freds img", {
    opacity: 0,
    y: 160,
    stagger: {
      each: 0.1,
      amount: 0.8,
    },
    ease: "bounce",
  })
  .from("#time", { xPercent: 100, duration: 0.2, ease: "elastic" });
