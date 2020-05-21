new fullpage('#fullpage', {
    afterLoad: (origin, destination, direction) => {
        const section = destination.item;

        const h1anim = section.querySelector("h1");
        const panim = section.querySelector("p");
        const imganim = section.querySelector("img");
        gsap.fromTo(h1anim, 1.5, {y: '50', opacity: 0}, {y: 0, opacity:1});
        gsap.fromTo(panim, 1.5, {y: '50', opacity: 0}, {y: 0, opacity:1});
        gsap.fromTo(imganim, 1.5, {y: '-200', opacity: 0}, {y:-250, opacity:1});
    }
});