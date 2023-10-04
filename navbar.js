// Define a function to create the navbar component
function createNavbar() {
    const navbarContainer = document.getElementById('navbar-container');

    // Create the navbar HTML structure
    const navbar = document.createElement('nav');
    const ul = document.createElement('ul');
    
    const homeLink = createNavLink('Home', '#');
    const aboutLink = createNavLink('About', '#');
    const servicesLink = createNavLink('Services', '#');
    // Add more links as needed
    
    // Append the links to the unordered list
    ul.appendChild(homeLink);
    ul.appendChild(aboutLink);
    ul.appendChild(servicesLink);
    // Append more links as needed
    
    // Append the unordered list to the navbar
    navbar.appendChild(ul);
    
    // Append the navbar to the container
    navbarContainer.appendChild(navbar);
}

// Helper function to create a navigation link
function createNavLink(text, url) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    a.textContent = text;
    a.href = url;
    
    li.appendChild(a);
    
    return li;
}

// Call the createNavbar function to generate the navbar
createNavbar();
