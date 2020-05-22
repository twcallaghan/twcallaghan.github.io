new fullpage('#fullpage', {
    navigation: true,
    autoScrolling: false,
    fitToSection: false,
    anchors: ['homepage', 'educationpage'],

    afterLoad: (origin, destination, direction) => {
        const section = destination.item;
        let edbt = document.getElementById("ed-button");
        if (destination.index === 0 && origin.index === 0) {
            const h1anim = section.querySelector("h1");
            const panim = section.querySelector("p");
            const imganim = section.querySelector("img");
            const edbtanim = document.querySelector("button[id='ed-button']");
            const wrexbtn = document.querySelector("button[id='workex-button']");
            const prjbtn = document.querySelector("button[id='projects-button']");
            const contactbtn = document.querySelector("button[id='contact-button']");

            gsap.fromTo(h1anim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(panim, 1.5, {y: -50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(imganim, 1.5, {y: 50, opacity: 0}, {y:0, opacity:1});
            gsap.fromTo(edbtanim, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(wrexbtn, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(prjbtn, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});
            gsap.fromTo(contactbtn, 1.5, {y: 50, opacity: 0}, {y: 0, opacity:1});

        }

        if (destination.index === 0) {
            edbt.hidden = false;
        }


    },

    onLeave: (origin, destination, direction) => {
        let edbt = document.getElementById("ed-button");
        if (destination.index !== 0) {
            edbt.disabled = true;
            edbt.hidden = true;
        } else {
            edbt.disabled = false;
        }
    },

});


$("button").click(function(e){
    let idClicked = e.target.id;
    console.log(idClicked);
    if (idClicked === "ed-button") {
        fullpage_api.moveTo('educationpage');
    }
});