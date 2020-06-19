// Ensuring that the animations only run on the first time that each section is visited
let edfirstload = false;
let workfirstload = false;
let projectsfirstload = false;
let contactfirstload = false;
let homefirstload = false;

// This is setting up the fullpage.js 
new fullpage('#fullpage', {
    // fullpage.js open source key
    licenseKey: 'e$kyWVH!a6',
    // navigation dots on the right side
    navigation: true,
    // if you scroll more than half the page down then it will automatically scroll to the next page
    autoScrolling: false,
    // if you're a little bit off on a section and you don't move for a few seconds then the page will automatically align the section to your device
    fitToSection: false,
    // basically just names that can be used by fullpage.js to better identify the sections
    anchors: ['homepage', 'educationpage', 'workexpage', 'projectspage', 'contactpage'],


    // Loading the homepage if that is where the user starts
    afterLoad: (origin, destination, direction) => {
        const section = destination.item;

        // Getting all the buttons that stay constant over the pages
        const edbtanim = section.querySelector("button[id='ed-button']");
        const wrexbtn = section.querySelector("button[id='workex-button']");
        const prjbtn = section.querySelector("button[id='projects-button']");
        const contactbtn = section.querySelector("button[id='contact-button']");
        const homebtn = section.querySelector("button[id='home-button']");

        if (destination.index === 0 && homefirstload === false) {
            homefirstload = true;
            const h1anim = section.querySelector("h1");
            const panim = section.querySelector("p");
            const imganim = section.querySelector("img");

            gsap.fromTo(h1anim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(panim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(imganim, 1.5, {y: 50, opacity: 0}, {y:0, opacity:1});

            gsap.fromTo(edbtanim, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(wrexbtn, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(prjbtn, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(contactbtn, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(homebtn, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
        }


    },

    // Animations for when the user leaves another page heading towards a new page for the first time
    onLeave: (origin, destination, direction) => {
        const section = destination.item;

        const edbtanim = section.querySelector("button[id='ed-button']");
        const wrexbtn = section.querySelector("button[id='workex-button']");
        const prjbtn = section.querySelector("button[id='projects-button']");
        const contactbtn = section.querySelector("button[id='contact-button']");
        const homebtn = section.querySelector("button[id='home-button']");

        const h1anim = section.querySelector("h1");
        const h3anim = section.querySelector("h3");
        const imganim = section.querySelector("img");

        // Going to the home page for the first time after starting on a different page (animations)
        if (destination.index === 0 && homefirstload === false) {
            homefirstload = true;
            const panim = section.querySelector("p");

            gsap.fromTo(h1anim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(panim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(imganim, 1.5, {y: 50, opacity: 0}, {y:0, opacity:1});

            gsap.fromTo(edbtanim, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(wrexbtn, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(prjbtn, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(contactbtn, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(homebtn, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
        }

        // Going to Education page for the first time animations
        if (destination.index === 1 && edfirstload === false) {
            edfirstload = true;

            gsap.fromTo(imganim, 1.5, {x: -50, opacity: 0}, {x: 0, opacity: 1, delay: 0.5});
            gsap.fromTo(h1anim, 1.5, {y: 50, opacity: 0}, {y: 0, opacity: 1, delay: 0.5});
            gsap.fromTo(h3anim, 1.5, {y: 50, opacity: 0}, {y: 0, opacity: 1, delay: 0.5});

            gsap.fromTo(edbtanim, 1.5, {x: 50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(wrexbtn, 1.5, {x: 50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(prjbtn, 1.5, {x: 50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(contactbtn, 1.5, {x: 50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(homebtn, 1.5, {x: 50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
        }

        // Workexperience page
        if (destination.index === 2 && workfirstload === false) {
            workfirstload = true;

            const imganim2 = section.querySelector("img[id='chef-pic']");
            const h1anim2 = section.querySelector("h1[id='crunchtime-title']");

            gsap.fromTo(imganim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(imganim2, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});

            gsap.fromTo(h1anim, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(h1anim2, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(h3anim, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});

            gsap.fromTo(edbtanim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(wrexbtn, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(prjbtn, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(contactbtn, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(homebtn, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});
        }

        // Projects page
        if (destination.index === 3 && projectsfirstload === false) {
            projectsfirstload = true;

            gsap.fromTo(imganim, 1.5, {x: 50, opacity: 0}, {x: 0, opacity: 1, delay: 0.5});
            gsap.fromTo(h1anim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity: 1, delay: 0.5});
            gsap.fromTo(h3anim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity: 1, delay: 0.5});

            gsap.fromTo(edbtanim, 1.5, {x: -50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(wrexbtn, 1.5, {x: -50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(prjbtn, 1.5, {x: -50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(contactbtn, 1.5, {x: -50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(homebtn, 1.5, {x: -50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
        }

        // Contacts page
        if (destination.index === 4 & contactfirstload === false) {
            contactfirstload = true;
            
            const imganim2 = section.querySelector("img[id='linkedin-link-contact']");

            gsap.fromTo(imganim, 1.5, {y: -50, x: -50, opacity: 0}, {y: 0, x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(imganim2, 1.5, {y: -50, x: -50, opacity: 0}, {y: 0, x: 0, opacity:1, delay: 0.5});

            gsap.fromTo(h1anim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(h3anim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1, delay: 0.5});

            gsap.fromTo(edbtanim, 1.5, {x: 50, y: 50, opacity: 0}, {x: 0, y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(wrexbtn, 1.5, {x: 50, y: 50, opacity: 0}, {x: 0, y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(prjbtn, 1.5, {x: 50, y: 50, opacity: 0}, {x: 0, y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(contactbtn, 1.5, {x: 50, y: 50, opacity: 0}, {x: 0, y: 0, opacity:1, delay: 0.5});
            gsap.fromTo(homebtn, 1.5, {x: 50, y: 50, opacity: 0}, {x: 0, y: 0, opacity:1, delay: 0.5});
        }
    }
});

// Detecting button clicks that then navigate to the appropriate page
$("button").click(function(e){
    let idClicked = e.target.id;
    console.log(idClicked);
    if (idClicked === "ed-button") {
        fullpage_api.moveTo('educationpage');
    } else if (idClicked == "home-button") {
        fullpage_api.moveTo('homepage');
    } else if (idClicked == "workex-button") {
        fullpage_api.moveTo('workexpage');
    } else if (idClicked == "projects-button") {
        fullpage_api.moveTo('projectspage');
    } else if (idClicked == "contact-button") {
        fullpage_api.moveTo('contactpage');
    }
});