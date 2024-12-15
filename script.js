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
Shery.makeMagnet(".btn-conut .btn",{
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
})
const thirdAnimation = gsap.timeline({
  scrollTrigger:{
    trigger:"#container-third",
    scroller: "body",
    // markers: true,
    start:"5% 0%",
    end:"500% 10%",
    pin: true,
    scrub: 1
  }
})
thirdAnimation.to(".text-box-right",{
  top: "-230%"
},"svg")
thirdAnimation.to(".rotating-symbol",{
  rotate: "360"
},"svg")
thirdAnimation.to(".rotating-symbol",{
  rotate: "720",
  x:"700",
})



// ! page3


gsap.to(".over2",{
  width:0,
  stagger:0.2,
  duration:2.5,
  scrollTrigger:{
      trigger:"#page3",
      scroller:"body",
      start:"top 40%",
      end:"top -40%",
      scrub:1,
  }
})

gsap.to("#round2",{
  height:0,
  duration:1.5,
  scrollTrigger:{
      trigger:"#round2",
      scroller:"body",
      start:"top 50%",
      end:"top 0%",
      scrub:true,
  }
})

gsap.to(".over3",{
  width:0,
  stagger:0.2,
  duration:2.5,
  scrollTrigger:{
      trigger:"#page4",
      scroller:"body",
      start:"top 50%",
      end:"top -50%",
      scrub:1,
  }
})


function page5(){
var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:"#page5",
      scroller:"body",
      start:"top 0%",
      end:"top -500%",
      scrub:true,
      pin:true
  }
})

tl3
.to(".cover1",{
  top:"-50%",
  delay:.5,
  duration:1,
  duration:1,
},"a")
.to(".cover2",{
  bottom:"-50%",
  delay:.5,
  duration:1,
  duration:1,
},"a")
.to("#center-txt #span1",{
  x:-300,
  y:-230,
  duration:1,
  delay:.5
},"a")
.to("#center-txt #span2",{
  x:350,
  y:210,
  duration:1,
  delay:.5
},"a")
.to("#img-container img",{
  transform: "translateY(-700%)",
  duration:3
})
}
page5()