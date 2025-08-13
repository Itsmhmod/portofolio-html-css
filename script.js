// // Smooth scrolling for navigation links
// document.addEventListener("DOMContentLoaded", function () {
//   // Smooth scrolling for navigation links
//   const navLinks = document.querySelectorAll("nav a, .main-btn");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();

//       const targetId = this.getAttribute("href");
//       const targetSection = document.querySelector(targetId);

//       if (targetSection) {
//         targetSection.scrollIntoView({
//           behavior: "smooth",
//           block: "start"
//         });
//       }
//     });
//   });

//   // Header background change on scroll
//   const header = document.querySelector("header");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 100) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });

//   // Project cards hover effect
//   const projectCards = document.querySelectorAll(".project-card");

//   projectCards.forEach((card) => {
//     card.addEventListener("mouseenter", function () {
//       this.style.transform = "translateY(-10px)";
//       this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
//     });

//     card.addEventListener("mouseleave", function () {
//       this.style.transform = "translateY(0)";
//       this.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
//     });
//   });

//   // Service cards animation
//   const serviceCards = document.querySelectorAll(".card");

//   const observerOptions = {
//     threshold: 0.3,
//     rootMargin: "0px 0px -50px 0px"
//   };

//   const observer = new IntersectionObserver(function (entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = "1";
//         entry.target.style.transform = "translateY(0)";
//       }
//     });
//   }, observerOptions);

//   serviceCards.forEach((card) => {
//     card.style.opacity = "0";
//     card.style.transform = "translateY(30px)";
//     card.style.transition = "all 0.6s ease";
//     observer.observe(card);
//   });

//   // Project cards animation
//   projectCards.forEach((card) => {
//     card.style.opacity = "0";
//     card.style.transform = "translateY(50px)";
//     card.style.transition = "all 0.8s ease";
//     observer.observe(card);
//   });

//   // Typing effect for main heading
//   const mainHeading = document.querySelector(".main h2");
//   if (mainHeading) {
//     const text = mainHeading.textContent;
//     mainHeading.textContent = "";

//     let i = 0;
//     const typeWriter = () => {
//       if (i < text.length) {
//         mainHeading.textContent += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, 100);
//       }
//     };

//     // Start typing effect after a short delay
//     setTimeout(typeWriter, 500);
//   }

//   // Social icons hover effect
//   const socialIcons = document.querySelectorAll(".social-icons a");

//   socialIcons.forEach((icon) => {
//     icon.addEventListener("mouseenter", function () {
//       this.style.transform = "scale(1.2) rotate(5deg)";
//     });

//     icon.addEventListener("mouseleave", function () {
//       this.style.transform = "scale(1) rotate(0deg)";
//     });
//   });

//   // More details button click handler
//   const moreDetailsButtons = document.querySelectorAll(".more-details");

//   moreDetailsButtons.forEach((button) => {
//     button.addEventListener("click", function (e) {
//       e.preventDefault();

//       // Get project title
//       const projectTitle =
//         this.closest(".project-title").querySelector("span").textContent;

//       // Show alert with project details (you can replace this with a modal)
//       alert(
//         `Project: ${projectTitle}\n\nThis is a detailed view of the project. You can add more information here or link to the actual project.`
//       );
//     });
//   });

//   // Add loading animation
//   window.addEventListener("load", function () {
//     document.body.classList.add("loaded");
//   });

//   // Mobile menu toggle (if needed)
//   const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
//   const navigation = document.querySelector(".navigation");

//   if (mobileMenuToggle) {
//     mobileMenuToggle.addEventListener("click", function () {
//       navigation.classList.toggle("active");
//     });
//   }

//   // Scroll to top functionality
//   const scrollToTopBtn = document.createElement("button");
//   scrollToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
//   scrollToTopBtn.className = "scroll-to-top";
//   scrollToTopBtn.style.cssText = `
//         position: fixed;
//         bottom: 20px;
//         right: 20px;
//         width: 50px;
//         height: 50px;
//         border-radius: 50%;
//         background: #0ef;
//         border: none;
//         color: #1f242d;
//         font-size: 20px;
//         cursor: pointer;
//         opacity: 0;
//         visibility: hidden;
//         transition: all 0.3s ease;
//         z-index: 1000;
//     `;

//   document.body.appendChild(scrollToTopBtn);

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 300) {
//       scrollToTopBtn.style.opacity = "1";
//       scrollToTopBtn.style.visibility = "visible";
//     } else {
//       scrollToTopBtn.style.opacity = "0";
//       scrollToTopBtn.style.visibility = "hidden";
//     }
//   });

//   scrollToTopBtn.addEventListener("click", function () {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   });
// });

// // Add some CSS for the scroll-to-top button
// const style = document.createElement("style");
// style.textContent = `
//     .scroll-to-top:hover {
//         background: #0cc !important;
//         transform: scale(1.1);
//     }
    
//     header.scrolled {
//         background: rgba(31, 36, 45, 0.95);
//         backdrop-filter: blur(10px);
//     }
    
//     body.loaded .main {
//         animation: fadeInUp 1s ease;
//     }
    
//     @keyframes fadeInUp {
//         from {
//             opacity: 0;
//             transform: translateY(30px);
//         }
//         to {
//             opacity: 1;
//             transform: translateY(0);
//         }
//     }
// `;
// document.head.appendChild(style);
