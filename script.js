const smoothScroll = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};
smoothScroll();
const splitText = (element) => {
  const text = document.querySelector(element);
  let clutter = "";
  text.textContent.split("").forEach((word) => {
    clutter += `<span>${word}</span>`;
  });
  text.innerHTML = clutter;
};
const firstAnimation = () => {
  const swip = gsap.timeline({
    scrollTrigger: {
      trigger: "#container-first",
      scroller: "body",
      // markers: true,
      start: "0% 0%",
      end: "100% -100%",
      pin: true,
      scrub: 1,
    },
  });
  swip
    .to(
      `.row-div`,
      {
        marginTop: "-30%",
      },
      "sam"
    )
    .to(
      `.rotate-div`,
      {
        transform: `rotate(-20deg) scale(.8)`,
        delay: 0.2,
        marginLeft: "10%",
      },
      "sam"
    )
    .to(
      `.containt-part1 h1`,
      {
        opacity: 1,
        // display: "block",
        delay: 0.1,
      },
      "sam"
    )
    .to(
      `.overlaye`,
      {
        backgroundColor: `rgba(0, 0, 0, 0.416)`,
      },
      "sam"
    )
    .to(
      `.inner-line`,
      {
        width: "100%",
      },
      ""
    );
};
firstAnimation();
splitText(`.text-area .lin-text h1`);
splitText(`.text-area .lin-text h2`);
const secondAnimation = () => {
    const not = gsap.timeline({
        scrollTrigger: {
            trigger: "#container-second",
            scroller: "body",
            start: "0% 50%",
            end: "100% 100%",
            scrub: 1,
          }
    })
    
    not.to(`.round-wraper`, {
      y: "0%",
    },"a")
    .to(`.round-div`, {
        height: "0%",
    
    },"a");
    
    
    const time2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#container-second",
        scroller: "body",
        start: "0% 0%",
        end: "60% 50%",
        scrub: 1,
      },
    });
    time2
      .to(`.text-area .lin-text h1 span`, {
        color: "black",
        stagger: 0.1,
      })
      .to(`.text-area .lin-text h2 span`, {
        color: "black",
        stagger: 0.1,
      });
};
secondAnimation();
