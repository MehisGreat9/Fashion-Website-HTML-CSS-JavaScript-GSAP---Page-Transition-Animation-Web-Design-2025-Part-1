var svg1TL = gsap.timeline({scrollTrigger: {
    trigger: "#clip1 .clip_inner",
    scrub: 2,
    pin: true,
    pinSpacing: false,
    invalidateOnRefresh: true
}})

svg1TL.fromTo("#svg1 video, #svg1 img", {y: "30%"}, {y: 0}, 0)
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

svg2TL.fromTo("#svg2 video, #svg2 img", {y: "30%"}, {y: 0}, 0)
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

svg3TL.fromTo("#svg3 video, #svg3 img", {y: "30%"}, {y: 0}, 0)
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

svg4TL.fromTo("#svg4 video, #svg4 img", {y: "30%"}, {y: 0}, 0)
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



// HERO SECTION 
const largeImage = document.getElementById('largeImage');
const imagePaths = [
    'images/denim_jacket.png',
    'images/Drape\ Dress.png',
    'images/knit_sweater.png',
    'images/trousers.png',
]
const smallImage = document.querySelectorAll('.img_box');
let current = 0;
function updateLargeImage(){
    largeImage.style.backgroundImage = `url('${imagePaths[current]}')`;
    smallImage.forEach(img => img.classList.remove('pretty_border'));
    smallImage.forEach(img => {
        if(img.style.backgroundImage.includes(imagePaths[current])){
            img.classList.add('pretty_border');
        }
    });
    current = (current + 1) % imagePaths.length;
}
updateLargeImage();
setInterval(updateLargeImage, 4000);

// FEATURED COLLECTION 
const mainImage = document.getElementById("mainImage");
const sliceContainer = document.querySelector(".image_slice");
const thumbs = document.querySelectorAll(".thumb");
const infos = document.querySelectorAll('.info');

const NUM_SLICES = 3;

function createSlices(){
    sliceContainer.innerHTML = "";
    for (let i = 0; i < NUM_SLICES; i++){
        const slice = document.createElement("div");
        slice.classList.add("slice");
        sliceContainer.appendChild(slice)
    }
}

function animateSplitReveal(newSrc){
    createSlices();
    const slices = document.querySelectorAll('.slice')
    gsap.to(slices, {
        y: "0%",
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.in",
        onComplete: () => {
            mainImage.src = newSrc;
            gsap.to(slices, {
                y: "-100%",
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    });
}

thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        if(thumb.classList.contains("active")) return;
        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add('active');
        animateSplitReveal(thumb.src);
        
        infos.forEach(info => info.classList.remove("active"));
        const targerInfo = document.querySelector(`.info[data-index="${index}"]`);
        if(targerInfo){
            targerInfo.classList.add("active");
            gsap.fromto(
                targerInfo,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            );
            const innerElements = targerInfo.querySelectorAll("h2, p, ul, li");
            gsap.fromTo(
                innerElements,
                {
                    opacity: 0,
                    y: 30,
                    clipPath: "inset(0 0 100% 0)"
                },
                {
                    opacity: 1,
                    y: 0,
                    clipPath: "inset(0 0 0% 0)",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: .1,
                    delay: .15
                }
            )
        }
    })
})

// TESTIMONIALS SECTION
const testimonials = [
    {
        img: "images/trench_coat.png",
        name: "JON SNOW",
        text: "Finally, a brand that understands modern elegance! The quality is amazing & I always get compliments when I wear my Étoile."
    },
    {
        img: "images/denim_jacket.png",
        name: "ARYA STARK",
        text: "This scarf is my new favorite accessory. Soft, stylish, and it turns heads everywhere I go."
    },
    {
        img: "images/knit_sweater.png",
        name: "SANSA STARK",
        text: "The craftsmanship is incredible. You can tell every detail was made with care."
    }
];
let currentIndex = 0;
function showTestimonial(index){
    const t = testimonials[index];
    gsap.to("#testimonial_img", {opacity: 0, duration: 0.4, onComplete: () => {
        document.getElementById("testimonial_img").src = t.img;
        document.getElementById("testimonial_name").textContent = t.name;
        gsap.to("#testimonial_img", {opacity: 1, duration: 0.4});
    }});
    gsap.to("#testimonial_text", {opacity: 0, y: 20, duration: 0.4, onComplete: () => {
        document.getElementById("testimonial_text").textContent = t.text;
        gsap.to("#testimonial_text", {opacity: 1, y: 0, duration: 0.4});
    }});
}
setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}, 5000);
showTestimonial(currentIndex);

// ABOUT SECTION
gsap.from(".about_image_mask", {
    scrollTrigger: {
        trigger: ".about_story",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    clipPath: "inset(0% 100% 0% 0%)",
    ease: "power2.out",
    duration: 1.5,
    delay: 1
});

gsap.to(".about_image_mask img", {
    scrollTrigger: {
        trigger: ".about_story",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    scale: 1,
    ease: "power2.out",
    duration: 1.5,
    delay: 2
});
gsap.from(".about_content > *", {
    scrollTrigger: {
        trigger: ".about_story",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.out",
    duration: 1,
    delay: 2
});
