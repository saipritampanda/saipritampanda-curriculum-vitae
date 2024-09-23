// JavaScript for Smooth Scroll and Active Link Highlighting

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust for fixed header
        behavior: "smooth"
      });

      // Update active class for nav links
      navLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Fade-in effect on scroll for About section
  const aboutSection = document.getElementById("about");
  const fadeInElements = aboutSection.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-active");
      }
    });
  }, { threshold: 0.5 });

  fadeInElements.forEach(element => observer.observe(element));
});

// JavaScript for Progress Bar Animation on Scroll
document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.querySelector(".skills");
  const progressBars = skillsSection.querySelectorAll(".progress-bar");

  const animateProgressBars = function () {
    progressBars.forEach(bar => {
      const maxWidth = bar.getAttribute("aria-valuenow");
      bar.style.width = `${maxWidth}%`;
    });
  };

  const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgressBars();
        skillsObserver.disconnect(); // Stop observing once animation is triggered
      }
    });
  }, { threshold: 0.5 });

  skillsObserver.observe(skillsSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const progressCircles = document.querySelectorAll('.progress-circle');

  progressCircles.forEach(circle => {
    const score = circle.getAttribute('data-score');
    const percentage = score ? parseInt(score, 10) : 0;

    // Update the --percentage variable in CSS
    circle.style.setProperty('--percentage', percentage);
  });
});


// JavaScript for Social Media Links Animation
document.addEventListener("DOMContentLoaded", function () {
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach(link => {
    link.addEventListener("mouseover", function () {
      this.querySelector("img").classList.add("social-hover");
    });

    link.addEventListener("mouseout", function () {
      this.querySelector("img").classList.remove("social-hover");
    });
  });
});

// Get the button
var upperButton = document.getElementById("upperButton");

// Show the button after scrolling down 750px
window.onscroll = function () {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
    upperButton.style.display = "block";
  } else {
    upperButton.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
upperButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


document.addEventListener("DOMContentLoaded", function () {
  // Fetch the quotes JSON file
  fetch('quotes.json')
    .then(response => response.json())
    .then(data => {
      // Get random tech and motivational quotes
      const randomTechQuote = getRandomQuote(data.techQuotes);
      const randomMotivationalQuote = getRandomQuote(data.motivationalQuotes);

      // Insert quotes into specific areas of the page
      document.getElementById('tech-quote').textContent = randomTechQuote.quote;
      document.getElementById('motivational-quote').textContent = randomMotivationalQuote.quote;
    })
    .catch(error => console.error('Error loading quotes:', error));

  // Function to get a random quote from an array
  function getRandomQuote(quotesArray) {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
  }
});
