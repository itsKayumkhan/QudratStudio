// Function to initialize animations

const originalWarn = console.warn;

console.warn = (message, ...args) => {
    if (message.includes("GSAP target") || message.includes("Invalid property")) {
        return; // Skip GSAP target and property warnings
    }
    originalWarn(message, ...args);
};
function initGSAPAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("nav", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
  });

  // Stagger Animation for Navbar Items
  gsap.from("nav ul li", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
  });

  // Pop-up Animation for Logo
  gsap.from(".logo", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 0.5,
  });

  // Stagger Animation for Social Icons
  gsap.from(".social-icon", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
    delay: 0.8,
  });

  // Shrink Navbar on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      gsap.to("nav", {
        duration: 0.3,
        padding: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      });
    } else {
      gsap.to("nav", {
        duration: 0.3,
        padding: "16px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      });
    }
  });

  // Pop Up Animation for SVG Logo
  gsap.from("svg", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
  });
  gsap.from(" .hero-text", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "back.out(1.7)",
  });

  // Slide In "We Are" Text
  gsap.from("span.absolute", {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
  });

  // Fade In & Stagger Animation for Main Heading
  gsap.from(".head-text", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    delay: 0.7,
  });

  // Rotated Image Animation
  gsap.from("img[alt='Brand Image']", {
    opacity: 0,
    rotation: -10,
    y: 30,
    duration: 1,
    ease: "power2.out",
    delay: 1,
  });

  // // Stagger Animation for Bottom Social Icons
  // gsap.from(".absolute.bottom-8.right-8 a", {
  //   opacity: 0,
  //   y: 20,
  //   duration: 0.8,
  //   ease: "power2.out",
  //   stagger: 0.3,
  //   delay: 1.5,
  // });

  // // Fade in Description Text
  // gsap.from(".absolute.bottom-8.right-8 p", {
  //   opacity: 0,
  //   y: 20,
  //   duration: 1,
  //   ease: "power2.out",
  //   delay: 1.8,
  // });

  // Section animations with ScrollTrigger
  const sections = [".who_we_are", ".our_services", ".our_project"];

  sections.forEach((selector) => {
    gsap.from(selector, {
      y: 100,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  });

  // contact
  gsap.from(".contact-heading", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".contact-heading",
      start: "top 80%",
      end: "bottom 20%",
    },
  });

  // Animate each form group (name, city, email, message)
  gsap.utils.toArray(".form-group").forEach((group, index) => {
    gsap.from(group, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: group,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });
  });

  // Animate submit button
  gsap.from(".submit-btn", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: ".submit-btn",
      start: "top 90%",
      end: "top 60%",
      scrub: false,
    },
  });

  document.querySelectorAll(".ser").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        x:  -200,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 30%",
            end: "top 0%",
            scrub: true,
        }
    });
});
document.querySelectorAll(".team-img").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        scale: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",  // When image is near the bottom of the screen, start animation
            end: "top 20%",    // Full animation done when image reaches near the top
            scrub: true,       // Smooth pop in/out based on scroll position
        }
    });
});
// Animate the heading & paragraph (left side)
gsap.from(".services-text", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".services-text",
        start: "top 60%",
        end: "top 0%",
        scrub: true,
    }
});

// Animate each service item (right side)
gsap.from(".service-item", {
    opacity: 0,
    x: 100,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".service-item-wrapper",
        start: "top 60%",
        end: "top 0%",
        scrub: true,
    }
});

// Optional: Arrow rotation animation
gsap.from(".service-arrow", {
    rotate: -90,
    scale: 0,
    opacity: 0,
    stagger: 0.3,
    duration: 2,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".service-item-wrapper",
        start: "top 30%",
        end: "top 0%",
        scrub: true,
    }
});

// feq

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".faq-item");

    items.forEach((item, index) => {
        const isEven = index % 2 === 0; // Alternate sides

        gsap.fromTo(
            item,
            {
                x: isEven ? -100 : 100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: index * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",  // When item enters viewport
                    toggleActions: "play none none reverse",
                },
            }
        );
    });
});
// footer
gsap.from('.data-gsap-header', {
    opacity: 0,
    y: -50,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.data-gsap-header',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
    }
});

// Background Text (large)
gsap.from('.data-gsap-bg-text', {
    opacity: 0,
    y: 100,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.data-gsap-bg-text',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    }
});

// Left Side Content
gsap.from('.data-gsap-left', {
    opacity: 0,
    x: -100,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.data-gsap-left',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    }
});

// Right Side Links
document.querySelectorAll('.data-gsap-right').forEach((section) => {
    const links = section.querySelectorAll('li, a'); // Grab each link (or li, depending on structure)

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });

    tl.from(links, {
        opacity: 0,
        x: -100,
        duration: 0.8,
        stagger: 0.2 // This causes the "one by one" effect
    });
});

// Footer
gsap.from('.data-gsap-footer', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.data-gsap-footer',
        start: 'top 100%',
        toggleActions: 'play none none reverse'
    }})


//pr servies

gsap.from(".section", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

}

// Only run animations on desktop
if (window.innerWidth >= 768) {
  initGSAPAnimations();
}
