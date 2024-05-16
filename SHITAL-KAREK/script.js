// smooth scrolling = locomotive  scroll css, locomotive cdn, locomotive script url ✅
//gsap
//scrolltrigger



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



// var main = document.querySelector("#main")
// var crsr = document.querySelector("#circle")

// // dets == gives information about when the mouse moving whats ghatnayae gat rhi uske sath  dets.x x axis pr mouse kitna use ho rha hai dets.y y axis pr kitna mouse use ho rha hai
// main.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x + "px"
//     crsr.style.top = dets.y + "px"
// })



// first page animation

function firstPage() {
    var timeline1 = gsap.timeline();

    timeline1.from('#nav',{
        y: '-10',
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut
    })


    
       timeline1.to('.boundingElem',{
           y:0,
           ease: Expo.easeInOut,
           duration: 2,
           delay:-1,
    
        //    for more delay
        stagger: .2
        })


        
    timeline1.from('#heroFooter',{
        y: '-10',
        opacity:0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
        
    }
    

// cursor

function circleMOve(){

    window.addEventListener("mousemove", function(dets){

        document.querySelector('#circle').style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    })

}



// calling the functions 

circleMOve()
firstPage()


// project wala section me animation

//teene element ko select krke  mouse move laga denge fir jb mouse move ho tb yh pta kro ki mouse kaha se kaha pr hai, jiska mtlb hai mouse ki x and y position pata kro and mouse ki x and y position ke bdle img show kro and move kro, move krte time roatate kro jaise jaise mouse tezz ho waise waise rotataion v tezz ho jaise...... lets built it ... .. . . . .

// document.querySelectorAll(".elem").forEach(function (elem) {
//     var rotate = 0;
//     var diffrot = 0;
  
    // elem.addEventListener("mousemove", function (dets) {
    //   gsap.to(elem.querySelector("img"), {
    //     opacity: 0,
    //     ease: Power3,
    //     duration: 0.5,
    //   });
    // });
    // elem.addEventListener("mousemove", function (dets) {
    //     var diff = dets.clientY - elem.getBoundingClientRect().top;
    //     diffrot = dets.clientX - rotate;
    //     rotate = dets.clientX;
    //     gsap.to(elem.querySelector("img"), {
    //       opacity: 1,
    //       ease: Power3,
    //       top: diff,
    //       left: dets.clientX,
    //       rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    //     });
    //   });
// });



document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  
