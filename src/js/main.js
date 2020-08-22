// Timelines
const mainTl = gsap.timeline();
const arrowTl = gsap.timeline();
const bikeDoodlesTl = gsap.timeline();
const introTl = gsap.timeline();
const companiesTl = gsap.timeline();

function init() {
  arrowTweens();
  bikeTweens();
  introTweens();
  companiesTweens();
}

// Wait until page is loaded
window.addEventListener("load", () => {
  init();
});

function arrowTweens() {
  const arrow1 = document.querySelector("#arrow1");
  const arrow2 = document.querySelector("#arrow2");
  arrowTl.fromTo(
    arrow1,
    1.2,
    {
      drawSVG: "0%",
      autoAlpha: 1,
    },
    {
      drawSVG: "100%",
      delay: 0.9,
      ease: Power1.easeIn,
    }
  );

  arrowTl.fromTo(
    arrow2,
    0.8,
    {
      drawSVG: "0%",
      autoAlpha: 1,
    },
    {
      drawSVG: "100%",
      ease: Power1.easeOut,
      delay: -0.2,
    }
  );
}

function introTweens() {
  const introElements = [
    ".intro__main",
    ".intro__sub1",
    ".intro__sub2",
    ".cta",
  ];

  introTl.fromTo(
    introElements,
    {
      autoAlpha: 0,
      x: "-2rem",
    },
    {
      duration: 0.9,
      delay: 0.5,
      ease: Power3.easeInOut,
      autoAlpha: 1,
      x: 0,
      stagger: 0.2,
    }
  );
}

function bikeTweens() {
  const light = document.querySelector("#light1");

  const hero = document.querySelector(".hero");
  const heatLeftIds = ["#heatL1", "#heatL2", "#heatL3"];
  const heatRightIds = ["#heatR1", "#heatR2", "#heatR3"];

  bikeDoodlesTl.fromTo(
    hero,
    {
      autoAlpha: 0,
      x: "2rem",
    },
    {
      duration: 0.9,
      delay: 0.8,
      ease: Power3.easeInOut,
      autoAlpha: 1,
      x: 0,
    }
  );

  bikeDoodlesTl.fromTo(
    light,
    1.5,
    {
      autoAlpha: 1,
      drawSVG: "0%",
    },
    {
      drawSVG: "100%",
      ease: Power1.easeOut,
      delay: -0.3,
    }
  );

  bikeDoodlesTl.fromTo(
    heatLeftIds,
    { drawSVG: "0%", autoAlpha: 1 },
    { duration: 0.8, drawSVG: "100%", stagger: 0.3, delay: -1 }
  );

  bikeDoodlesTl.fromTo(
    heatRightIds,
    { drawSVG: "0%", autoAlpha: 1 },
    { duration: 0.8, drawSVG: "100%", stagger: 0.3, delay: -0.8 }
  );
}

function companiesTweens() {
  const companies = document.querySelectorAll(".companies__image");

  companiesTl.fromTo(
    companies,
    {
      autoAlpha: 0,
      y: 20,
    },
    {
      duration: 0.7,
      autoAlpha: 1,
      y: 0,
      stagger: 0.3,
      delay: 2,
    }
  );
}
