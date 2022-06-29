gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline()
  .from(".navbar", { y: "-100%", ease: "bounce" })
  .from(".link", { opacity: 0, stagger: 0.5 })
  .from(".myimage", { duration: 0.5, opacity: 0 })
  .from(".intro", {
    opacity: 0,
    duration: 0.8,
    ease: Power4.easeout,
  })
  .from(".skills-title", { scale: 0, opacity: 0, ease: "back" })
  .from(".logos", { y: 200, opacity: 0, stagger: 0.1, duration: 1 });
