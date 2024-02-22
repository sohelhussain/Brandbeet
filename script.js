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
      marginTop: "-40%",
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
  .to(`.containt-part1 h1`, {
    opacity: 1,
    delay:.3
  },"sam")
  .to(
    `.overlaye`,
    {
      backgroundColor: `rgba(0, 0, 0, 0.416)`,
    },
    "sam"
  )

