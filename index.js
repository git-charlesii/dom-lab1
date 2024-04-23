


//Part 1: Getting Started

const mainEl = document.querySelector("main") 
mainEl.style.backgroundColor= "var(--main-bg)"
mainEl.innerHTML = ("<h1>DOM Manipulation</h1>")
mainEl.setAttribute('class', 'flex-ctr');
console.log(mainEl);

// Part 2 : Creating a Menu Bar
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.setAttribute('class', 'flex-around');

//Part 3: Adding Menu Buttons
// Menu data structure
// const menuLinks = [
//   { text: 'about', href: '/about' },
//   { text: 'catalog', href: '/catalog' },
//   { text: 'orders', href: '/orders' },
//   { text: 'account', href: '/account' },
// ];
// menuLinks.forEach(link=>{
//   const a = document.createElement('a')
//   a.setAttribute('href', link.href) //setting attribute to each anchor
//   a.textContent = link.text;
//   topMenuEl.appendChild(a)
// })

// Part 4: Adding Menu Interaction
// In order to add submenu links, we will need to restructure the menuLinks array within index.js. Update the menuLinks array to the following:

const menuLinks = [
  {text: 'about',  href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Part 3 cont'd. Creating the Submenu
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg";
// Add the class of flex-around to the subMenuEl element.
subMenuEl.style.position = "absolute";
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

const topMenuLinks = topMenuEl.querySelectorAll("a");