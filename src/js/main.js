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

// Drawing the arrowSvg
function arrowTweens() {
  const arrow1 = document.querySelector("#arrow1");
  const arrowHead = document.querySelector("#arrow2");
  const ctaButton = document.querySelector(".cta__button");

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
    arrowHead,
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

  ctaButton.addEventListener("mouseenter", (e) => {
    gsap.set(arrowHead, { transformOrigin: "left" });
    gsap.to(arrowHead, 0.1, {
      rotate: "-=15",
      yoyo: true,
      repeat: 5,
      ease: Power0.easeNone,
    });
    gsap.to(arrowHead, 0.1, {
      rotate: "+=15",
      yoyo: true,
      repeat: 5,
      ease: Power0.easeNone,
    });
    gsap.to(arrowHead, { rotate: "0", delay: 0.5, duration: 0.1 });
  });
}

// Simple staggered load in of elements
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

// Here we draw the svg's strokes in and fade the background image in
function bikeTweens() {
  const light = document.querySelector("#light1");

  const hero = document.querySelector(".hero");
  const heatLeftIds = ["#heatL1", "#heatL2", "#heatL3"];
  const heatRightIds = ["#heatR1", "#heatR2", "#heatR3"];
  const heatIds = [...heatRightIds, ...heatLeftIds];

  const isMobile = window.innerWidth < 590;

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
      autoAlpha: isMobile ? 0.3 : 1,
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

  hero.addEventListener("mouseenter", (e) => {
    const heatTl = gsap.timeline();
    heatTl.to(heatIds, {
      drawSVG: "50% 50%",
      yoyo: true,
      repeat: 1,
      duration: 0.4,
      ease: Power3.easeInOut,
      stagger: 0.1,
    });
    heatTl.to(heatIds, {
      drawSVG: "100%",
    });
  });
}

// Simple staggered fadeIn animation
function companiesTweens() {
  const companies = document.querySelectorAll(
    ".companies__image, .companies__text"
  );

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
