const navLinks = [
    { text: "Home", href: "./index.html" },
    { text: "Trending", href: "./trending.html" },
    { text: "Top Rated", href: "./topRated.html" },
    { text: "Sign In", href: "./sign_up.html" }
];

const navbar = document.getElementById("navbar");

for (let i = 0; i < navLinks.length; i++) {
    const link = document.createElement("a");
    link.textContent = navLinks[i].text;
    link.href = navLinks[i].href;
    navbar.appendChild(link);
}