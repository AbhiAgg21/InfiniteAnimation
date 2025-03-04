var tl = gsap.timeline({
    repeat: -1
})
tl.to(".imagecontainer", {
    width: "100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2

}, 'a')

    .to(".text h1", {
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2,
        top: 0
    }, 'a')

    .to(".text h1", {
        delay: 1.7,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2,
        top: "-100%"
    }, 'a')