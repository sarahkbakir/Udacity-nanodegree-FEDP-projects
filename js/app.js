/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll('section');
const menuList = document.getElementById('navbar__list');
document.querySelector('html').style.scrollBehavior = 'smooth';
const btnUp = document.getElementById('btn-up');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

onScroll = (e) => {    
    for (const section of sections) {

        const scrollY = window.scrollY;
        const offsetTop = section.offsetTop;
        const height = section.getBoundingClientRect().height;


            if (scrollY > offsetTop - 200) {
                section.classList.add('your-active-class');
                btnUp.style.display = 'block';

            }
            else {
                section.classList.remove('your-active-class');
                btnUp.style.display = 'none';

            }

        }
    }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
buildMenu = () => {
    
    for (let i = 0; i < sections.length; i++) {
        let listItem = document.createElement('li');
        let anchor = document.createElement('a');
        let content = document.createTextNode(`${sections[i].getAttribute('data-nav')}`)
        anchor.appendChild(content);
        menuList.appendChild(listItem);
        anchor.setAttribute('href', `#${sections[i].id}`);

        
        listItem.appendChild(anchor);
        anchor.classList.add("menu__link")
    }
}

// Scroll to anchor ID using scrollTO event

function notScrolling() {
    if(window.scroll === false) {
        menuList.style.display = 'none'
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildMenu();

// Set sections as active

window.addEventListener('scroll', onScroll);
//display date at the footer of website
let today = new Date();
document.getElementById('dateToday').innerHTML = today.toLocaleDateString();