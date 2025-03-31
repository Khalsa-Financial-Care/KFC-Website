/*
<nav class="navbar">
    <div class="navTop">
        <div class="mainTitle">Khalsa Financial Care</div>
        <img src ="/images/Logo.png" class="mainLogo">
    </div>
    <div class="navLinks">
        <div class="navLink">
            <a href="index.html" class="link">Home</a>
        </div>
        <div class="navLink">
            <a href="founders.html" class="link">Founders</a>
        </div>
        <div class="navLink">
            <a href="research.html" class="link">Research</a>
        </div>
        <div class="navLink">
            <a href="blog.html" class="link">Blog</a>
        </div>
        <div class="navLink">
            <a href="contact.html" class="link">Contact</a>
        </div>
    </div>
</nav>
 */

// Navbar

const navbar = document.querySelector('nav');
navbar.innerHTML = "";

const navTop = document.createElement('div');
navTop.className = 'navTop';

const mainTitle = document.createElement('div');
mainTitle.className = 'mainTitle';
mainTitle.textContent = 'Khalsa Financial Care';

const mainLogo = document.createElement('img');
mainLogo.src = '/images/Logo.png';
mainLogo.className = 'mainLogo';

navTop.appendChild(mainTitle);
navTop.appendChild(mainLogo);

const navLinks = document.createElement('div');
navLinks.className = 'navLinks';

const createNavLink = (href, text) => {
    const navLink = document.createElement('div');
    navLink.className = 'navLink';
    const link = document.createElement('a');
    link.href = href;
    link.className = 'link';
    link.textContent = text;
    navLink.appendChild(link);
    return navLink;
};

navLinks.appendChild(createNavLink('index.html', 'Home'));
navLinks.appendChild(createNavLink('founders.html', 'Founders'));
navLinks.appendChild(createNavLink('research.html', 'Research'));
navLinks.appendChild(createNavLink('blog.html', 'Blog'));
navLinks.appendChild(createNavLink('contact.html', 'Contact'));

navbar.appendChild(navTop);
navbar.appendChild(navLinks);

// Footer

const footer = document.querySelector('footer');
footer.innerHTML = "<span>&copy; Ishbir Singh</span> <span>Khalsa Financial Care</span>";