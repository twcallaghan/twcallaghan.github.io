let edfirstload = false;
let workfirstload = false;
let projectsfirstload = false;
let contactfirstload = false;

new fullpage('#fullpage', {
    navigation: true,
    autoScrolling: false,
    fitToSection: false,
    anchors: ['homepage', 'educationpage', 'workexpage', 'projectspage', 'contactpage'],



    afterLoad: (origin, destination, direction) => {
        const section = destination.item;

        const edbtanim = section.querySelector("button[id='ed-button']");
        const wrexbtn = section.querySelector("button[id='workex-button']");
        const prjbtn = section.querySelector("button[id='projects-button']");
        const contactbtn = section.querySelector("button[id='contact-button']");
        const homebtn = section.querySelector("button[id='home-button']");

        if (destination.index === 0 && origin.index === 0) {
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

    onLeave: (origin, destination, direction) => {
        const section = destination.item;

        const edbtanim = section.querySelector("button[id='ed-button']");
        const wrexbtn = section.querySelector("button[id='workex-button']");
        const prjbtn = section.querySelector("button[id='projects-button']");
        const contactbtn = section.querySelector("button[id='contact-button']");
        const homebtn = section.querySelector("button[id='home-button']");

        if (destination.index === 1 && edfirstload === false) {
            edfirstload = true;

            const h1anim = section.querySelector("h1");
            const h3anim = section.querySelector("h3");
            const imganim = section.querySelector("img");

            gsap.fromTo(imganim, 1.5, {x: -50, opacity: 0}, {x: 0, opacity: 1, delay: 0.5});
            gsap.fromTo(h1anim, 1.5, {y: 50, opacity: 0}, {y: 0, opacity: 1, delay: 0.5});
            gsap.fromTo(h3anim, 1.5, {y: 50, opacity: 0}, {y: 0, opacity: 1, delay: 0.5});

            gsap.fromTo(edbtanim, 1.5, {x: 50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(wrexbtn, 1.5, {x: 50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(prjbtn, 1.5, {x: 50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(contactbtn, 1.5, {x: 50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
            gsap.fromTo(homebtn, 1.5, {x: 50, opacity: 0}, {x: 0, opacity:1, delay: 0.5});
        }

        
    }

});


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