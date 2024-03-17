function swiper() {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  });
}
swiper();


var tl = gsap.timeline()

tl.from(".nav", {
  x: -100,
  duration: 2,
  delay: 1,
  opacity: 0,
  stagger: 1
})

tl.from(".swiper-div", {
  opacity: 0,
})

tl.from(".info-panel", {
  y: -100,
  duration: 2,
  delay: 1,
  opacity: 0,
  stagger: 1
})

tl.from(".pg2-top", {
  // y:100,
  duration: 2,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".pg2-top",
    scroller: "body",
    scrub: 2,
    // markers:true,
    start: "top 60%",
    end: "top 40%"
  }
})

tl.from(".pg2-bottom", {
  y: 100,
  duration: 2,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".pg2-bottom",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 40%"
  }
})

tl.from(".page3", {
  // x:-100,
  duration: 2,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 40%"
  }
})

tl.from(".pg4-top", {
  // y:100,
  duration: 2,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".pg4-bottom",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 40%"
  }
})

tl.from(".pg4-bottom", {
  y: 100,
  duration: 2,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".pg4-bottom",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 40%"
  }
})

tl.from(".page6", {
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page6",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 40%"
  }
})