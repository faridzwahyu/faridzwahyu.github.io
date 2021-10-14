// Scroll Section
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
   const scrollY = window.pageYOffset;

   sections.forEach((s) => {
      const sectionHeight = s.offsetHeight;
      const sectionTop = s.offsetTop - 50;
      const sectionId = s.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector(".menu_nav a[href*=" + sectionId + "]").classList.add("active");
      } else {
         document.querySelector(".menu_nav a[href*=" + sectionId + "]").classList.remove("active");
      }
   });
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
   origin: "top",
   distance: "80px",
   duration: 2000,
   reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home_title", {});
sr.reveal(".home_scroll", { delay: 200 });
sr.reveal(".home_img", { origin: "right", delay: 400 });

/*SCROLL ABOUT*/
sr.reveal(".about_img", { delay: 500 });
sr.reveal(".about_subtitle", { delay: 300 });
sr.reveal(".about_profession", { delay: 400 });
sr.reveal(".about_text", { delay: 500 });
sr.reveal(".about_social_icon", { delay: 600, interval: 200 });

/*SCROLL SKILL*/
sr.reveal(".skill_subtitle", {});
sr.reveal(".skill_name", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".skill_img", { delay: 400 });

/*SCROLL PORTFOLIO*/
sr.reveal(".portfolio_img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact_subtitle", {});
sr.reveal(".contact_text", { interval: 200 });
