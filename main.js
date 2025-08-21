var svg1TL = gsap.timeline({scrollTrigger: {
    trigger: "#clip1 .clip_inner",
    scrub: 2,
    pin: true,
    pinSpacing: false,
    invalidateOnRefresh: true
}})

svg1TL.fromTo("#svg1 img", {y: "30%"}, {y: 0}, 0)
svg1TL.fromTo("#svg1", {width: () => {if(window.innerWidth < 600)
    {return 70} else {return 200}}},
    {width: () => {
        if(window.innerWidth < window.innerHeight)
        {return "500vh"} else {return "500vw"}},
    ease: "none"},
0);

gsap.set("#svg2", {y: "100vh"})
gsap.to("#svg2", {y: 0, x: 0, scrollTrigger: {
    trigger: "body",
    scrub: true,
    start: () => window.innerHeight * 2 + " bottom",
    end: () => window.innerHeight * 3 + " bottom"
}, ease: "none"})

var svg2TL = gsap.timeline({scrollTrigger: {
    trigger: "body",
    scrub: 2,
    start: () => window.innerHeight * 3 + " bottom",
    end: () => window.innerHeight * 4 + " bottom",
    invalidateOnRefresh: true
}})

svg2TL.fromTo('#svg2 img', {y: "30%"}, {y: 0}, 0)
svg2TL.fromTo('#svg2', {width: () => {
    if(window.innerWidth < 600)
    {return 70} else {
        return 200}}},
    {width: () => {
        if(window.innerWidth < window.innerHeight)
            {return "500vh"} else {return "500vw"}}, ease: "none"}, 0);

gsap.set("#svg3", {y: "100vh"})
gsap.to("#svg3", {y: 0, x: 0, scrollTrigger: {
    trigger: "body",
    scrub: true,
    start: () => window.innerHeight * 4 + " bottom",
    end: () => window.innerHeight * 5 + " bottom",
    invalidateOnRefresh: true
}, ease: "none"})

var svg3TL = gsap.timeline({scrollTrigger: {
    trigger: "body",
    scrub: 2,
    start: () => window.innerHeight * 5 + " bottom",
    end: () => window.innerHeight * 6 + " bottom",
    invalidateOnRefresh: true
}})

svg3TL.fromTo("#svg3 img", {y: "30%"}, {y: 0}, 0)
svg3TL.fromTo("#svg3", {width: () => {
    if(window.innerWidth < 600) {return 70}
    else {return 200}}}, {width: () => {
        if(window.innerWidth < window.innerHeight)
        {return "500vh"} else {return "500vw"}}, ease: "none"}, 0);

gsap.set("#svg4", {y: () => window.innerHeight})
gsap.to("#svg4", {y: 0, x: 0, scrollTrigger: {
    trigger: "body",
    scrub: true,
    start: () => window.innerHeight * 6 + " bottom",
    end: () => window.innerHeight * 7 + " bottom"
}, ease: "none"})

var svg4TL = gsap.timeline({scrollTrigger: {
    trigger: "body",
    scrub: 2,
    start: () => window.innerHeight * 7 + " bottom",
    end: () => window.innerHeight * 8 + " bottom"
}})

svg4TL.fromTo("#svg4 img", {y: "30%"}, {y: 0}, 0)
svg4TL.fromTo("#svg4", {width: () => {
    if(window.innerWidth < 600) {return 70}
    else {return 200}}}, {width: () => {
        if(window.innerWidth < window.innerHeight)
        {return "500vh"} else {return "500vw"}}, ease: "none"}, 0);

//Color Transition from Black to White in different Sections for Menu Links
const root = document.documentElement;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            if(entry.target.classList.contains('color')){ //section class color
                root.style.setProperty('--bl_wh', '#c8c8c8');
            } else if (entry.target.classList.contains('black')){
                root.style.setProperty('--bl_wh', '#000');
            }
        }
    });
}, {
    threshold: 0,
    rootMargin: "-10% 0px -70% 0px"
});
document.querySelectorAll('section.color, section.black').forEach(section => {
    observer.observe(section);
});
