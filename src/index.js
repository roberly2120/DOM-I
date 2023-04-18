const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')
// console.log(siteContent["footer"]["copyright"]);
// Header
const headerNav = document.querySelector("header nav");
const navLink1 = document.querySelector("header nav a:nth-of-type(1)");
const navLink2 = document.querySelector("header nav a:nth-of-type(2)");
const navLink3 = document.querySelector("header nav a:nth-of-type(3)");
const navLink4 = document.querySelector("header nav a:nth-of-type(4)");
const navLink5 = document.querySelector("header nav a:nth-of-type(5)");
const navLink6 = document.querySelector("header nav a:nth-of-type(6)");
const links = document.querySelectorAll("header nav a");


navLink1.textContent = "Services";
navLink2.textContent = "Product";
navLink3.textContent = "Vision";
navLink4.textContent = "Features";
navLink5.textContent = "About";
navLink6.textContent = "Contact";

const linksArr = Array.from(links);
linksArr.map(link => link.className = "italic")
// console.log(links);

const logoImg = document.querySelector("header img");
logoImg.src = "http://localhost:9000/img/logo.png";
// CTA section
const ctaHeader = document.querySelector(".cta h1");
ctaHeader.textContent = "DOM Is Awesome";

const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = "Get Started";

const ctaImg = document.querySelector(".cta img");
ctaImg.src = "http://localhost:9000/img/cta.png";
// main content section
const featuresTitle = document.querySelector(".main-content .text-content h4:nth-of-type(1)");
featuresTitle.textContent = "Features";
const featuresText = document.querySelector(".main-content .text-content p:nth-of-type(1)");
featuresText.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const aboutTitle = document.querySelector(".main-content .text-content:nth-of-type(2) h4");
aboutTitle.textContent = "About";
const aboutText = document.querySelector(".main-content .text-content:nth-of-type(2) p");
aboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const midImg = document.querySelector(".main-content .middle-img");
midImg.src = "http://localhost:9000/img/accent.png";

const servicesTitle = document.querySelector(".main-content .bottom-content .text-content h4");
servicesTitle.textContent = "Services";
const servicesText = document.querySelector(".main-content .bottom-content .text-content p");
servicesText.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const productTitle = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) h4");
productTitle.textContent = "Product";
const productText = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) p");
productText.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const visionTitle = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) h4");
visionTitle.textContent = "Vision";
const visionText = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) p");
visionText.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = "Contact";

const contactStreet = document.querySelector(".contact p:nth-of-type(1)");
contactStreet.textContent = "123 Way 456 Street Somewhere, USA";
const contactPhone =  document.querySelector(".contact p:nth-of-type(2)");
contactPhone.textContent = "1 (888) 888-8888";
const contactEmail =  document.querySelector(".contact p:nth-of-type(3)");
contactEmail.textContent = "sales@greatidea.io";

const copyright = document.querySelector("footer a");
copyright.href = "#";
copyright.className = "bold";
copyright.textContent = "Copyright Great Idea! 2021";