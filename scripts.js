// Smooth scrolling for navigation links
document.querySelectorAll('#left-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 200; // Adjust this value to change the position
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Highlight the current section in the navigation bar
const sections = document.querySelectorAll('.sections');
const navLinks = document.querySelectorAll('#left-nav a');
const highlightOffset = 0; // Adjust this value to set the offset for highlighting

function activateLinkOnScroll() {
    let scrollPosition = window.scrollY + window.innerHeight / 2 + highlightOffset; // Add the offset to the scroll position

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const nextSectionTop = sections[index + 1]?.offsetTop || document.body.scrollHeight;

        // Check if the scroll position (with offset) is within the current section range
        if (scrollPosition >= sectionTop && scrollPosition < nextSectionTop) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`#left-nav a[href="#${section.id}"]`).classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateLinkOnScroll);

// Toggle visibility of additional info sections
function toggleInfo(bar) {
    const infoSection = bar.nextElementSibling;

    if (infoSection.style.display === "none" || !infoSection.style.display) {
        infoSection.style.display = "block";
        bar.innerHTML = "<span>Close Info</span>";
    } else {
        infoSection.style.display = "none";
        bar.innerHTML = "<span>More Info</span>";
    }
}

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/*function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides fade");
    let pics = document.getElementsByClassName("project-pics fade");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        pics[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    pics[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}*/

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides fade");
    let pics = document.getElementsByClassName("project-pics fade");
    /*let dots = document.getElementsByClassName("dot");*/
    let projectNames = document.getElementsByClassName("project-name");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        pics[i].style.display = "none";
    }
    /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/
    for (i = 0; i < projectNames.length; i++) {
        projectNames[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    pics[slideIndex - 1].style.display = "block";
    /*dots[slideIndex - 1].className += " active";*/
    projectNames[slideIndex - 1].classList.add("active");
}

// Add click functionality to project names
document.querySelectorAll('.project-name').forEach((projectName, index) => {
    projectName.addEventListener('click', () => {
        currentSlide(index + 1); // Jump to the slide corresponding to the project name
    });
});

// Collapsible
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// Show More Section
document.querySelectorAll('.expandable-section').forEach(section => {
    const toggleButton = section.querySelector('.toggle-button');
    const afterShowMore = section.querySelector('.after-show-more');

    // Add click event to toggle visibility and button text
    toggleButton.addEventListener('click', () => {
        const isHidden = afterShowMore.classList.contains('hidden');

        // Toggle visibility
        afterShowMore.classList.toggle('hidden');

        // Update button text
        toggleButton.textContent = isHidden ? 'Show less' : 'Show more';
    });
});

/*document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('#fname').value.trim();
    const message = document.querySelector('#subject').value.trim();
    if (!name || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});*/

/*function copyText() {
    navigator.clipboard.writeText("samu.syrjanen@gmail.com").then(() => {
        const feedback = document.getElementById("copy-feedback");
        feedback.classList.add("visible"); // Show the feedback text
        setTimeout(() => {
            feedback.classList.remove("visible"); // Hide it after 2 seconds
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}*/

// LANGUAGE SELECTION
/*fetch("translations.json")
  .then((response) => response.json())
  .then((translations) => {
    const languageButtons = document.querySelectorAll("#language-buttons button");
    let currentLanguage = "finnish"; // Default language

    function updateLanguage(language) {
      document.querySelectorAll("[data-key]").forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[language][key]) {
          element.textContent = translations[language][key];
        }
      });

      // Update the highlight on the language buttons
      languageButtons.forEach((button) => button.classList.remove("active"));
      document.querySelector(`#${language}-button`).classList.add("active");

      currentLanguage = language;
    }

    // Set the default language
    updateLanguage(currentLanguage);

    // Add event listeners for language buttons
    languageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedLanguage = button.id.split("-")[0]; // Extract language from button ID
        updateLanguage(selectedLanguage);
      });
    });
  })
  .catch((error) => console.error("Error loading translations:", error));*/
