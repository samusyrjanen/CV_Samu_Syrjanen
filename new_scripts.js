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
const highlightOffset = 200; // Adjust this value to set the offset for highlighting

function activateLinkOnScroll() {
    let scrollPosition = window.scrollY + highlightOffset; // Add the offset to the scroll position

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
