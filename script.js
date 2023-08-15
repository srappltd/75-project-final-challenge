window.addEventListener("mousemove",(dets)=>{
    var y = document.querySelector(".mouse").offsetHeight;
    var x = document.querySelector(".mouse").offsetWidth;
    document.querySelector(".mouse").style.transform = `translate(${dets.pageX - x/2}px,${dets.pageY - y/2}px)`;
})

$("#page1").ripples({
    resolution: 512,
    dropRadius: 20,
    interactive: true,
    perturbance: 0.02,
});
gsap.to("#page1",{
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0%",
        end:"top -110%",
        // markers:true,
        scrub:true,
        pin:true
    },
})

document.querySelectorAll(".centerImg1 .img1").forEach(img1=>{
    gsap.to(img1,{
        scrollTrigger:{
            trigger:"#page1 .centerImg1",
            scroller:"body",
            start:"top 1%",
            end:"top -5%",
            // markers:true,
            scrub:true,
        },
        rotate:0
    })
})


gsap.from(".centerImg2",{
    scrollTrigger:{
        trigger:".centerImg2",
        scroller:"body",
        scrub:true,
        // markers:true,
        start:"top 90%",
        end:"top 70%",
    },
    top:"150vh"
});
gsap.to(".centerImg1",{
    scrollTrigger:{
        trigger:".centerImg1",
        scroller:"body",
        scrub:true,
        // markers:true,
        start:"top -7%",
        end:"top -15%",
    },
    top:"-80vh",
    duration:2
});

document.querySelectorAll(".centerImg2 .img1").forEach(img1=>{
    gsap.from(img1,{
        scrollTrigger:{
            trigger:"#page1 .centerImg2",
            scroller:"body",
            start:"top 70%",
            end:"top 60%",
            // markers:true,
            scrub:true,
        },
        rotate:0
    })
})

document.querySelectorAll("#page1 h1").forEach(h1=>{
    var clt = ""
    h1.textContent.split("").forEach(line=>{
        clt +=`<span>${line}</span>`
        h1.innerHTML = clt
    })
    gsap.to(".h1 span",{
        scrollTrigger:{
            trigger:".centerImg1",
            scroller:"body",
            scrub:true,
            // markers:true,
            start:"top -7%",
            end:"top -30%",
        },
        top:"-350px",
        duration:1,
        stagger:.6
    });
    gsap.from(".h2 span",{
        scrollTrigger:{
            trigger:".centerImg1",
            scroller:"body",
            scrub:true,
            // markers:true,
            start:"top -7%",
            end:"top -30%",
        },
        top:"350px",
        duration:1,
        stagger:.6
    });
})

