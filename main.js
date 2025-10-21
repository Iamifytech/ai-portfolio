document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        mobileMenu.classList.toggle('is-active'); // For animating the hamburger icon
    });

    // Close mobile menu when a navigation link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
                mobileMenu.classList.remove('is-active');
            }
        });
    });

    // 2. Smooth Scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // 3. Dynamic Project Loading
    const projectList = document.getElementById('project-list');

    // Sample project data (in a real scenario, this might come from a JSON file or API)
    const projects = [
        {
            id: 1,
            title: 'E-commerce Store',
            description: 'A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB. Features user authentication, product catalog, shopping cart, and order processing.',
            image: 'https://via.placeholder.com/400x220/87CEEB/FFFFFF?text=E-commerce',
            liveLink: 'https://your-ecommerce-app.com',
            githubLink: 'https://github.com/yourusername/ecommerce-store'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A minimalist task management application developed using Vue.js for the frontend and Python/Flask for the backend, with PostgreSQL as the database.',
            image: 'https://via.placeholder.com/400x220/FFD700/000000?text=Task+Manager',
            liveLink: 'https://your-task-app.com',
            githubLink: 'https://github.com/Iamifytech/task-manager-app'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'A responsive weather application that fetches real-time weather data from a public API based on user location or city search. Built with Vanilla JavaScript.',
            image: 'https://via.placeholder.com/400x220/ADD8E6/000000?text=Weather+App',
            liveLink: 'https://your-weather-dashboard.com',
            githubLink: 'https://github.com/yourusername/weather-dashboard'
        },
        {
            id: 4,
            title: 'Portfolio Website V1',
            description: 'The first iteration of my personal portfolio website, designed to showcase foundational HTML, CSS, and JavaScript skills.',
            image: 'https://via.placeholder.com/400x220/90EE90/000000?text=Portfolio+V1',
            liveLink: 'https://your-old-portfolio.com',
            githubLink: 'https://github.com/yourusername/portfolio-v1'
        },
        {
            id: 5,
            title: 'Blog Platform',
            description: 'A simple blog where users can create, read, update, and delete posts. Implemented with Django and a SQLite database.',
            image: 'https://via.placeholder.com/400x220/FFC0CB/000000?text=Blog+Platform',
            liveLink: 'https://your-blog-platform.com',
            githubLink: 'https://github.com/yourusername/django-blog'
        },
        {
            id: 6,
            title: 'Recipe Finder',
            description: 'An application that allows users to search for recipes using keywords and dietary filters, leveraging an external recipe API.',
            image: 'https://via.placeholder.com/400x220/FF8C00/FFFFFF?text=Recipe+Finder',
            liveLink: 'https://your-recipe-finder.com',
            githubLink: 'https://github.com/yourusername/recipe-finder'
        }
    ];

    function loadProjects() {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="project-card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-links">
                        <a href="${project.liveLink}" target="_blank" title="View Live"><i class="fas fa-external-link-alt"></i></a>
                        <a href="${project.githubLink}" target="_blank" title="View Code"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            `;
            projectList.appendChild(projectCard);
        });
    }

    // Call loadProjects when the DOM is ready
    loadProjects();

    // Optional: Add a simple form submission handler (for demonstration)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! (This is a demo submission.)');
            // In a real application, you would send this data to a backend server
            // using fetch() or XMLHttpRequest.
            this.reset(); // Clear the form
        });
    }
});


