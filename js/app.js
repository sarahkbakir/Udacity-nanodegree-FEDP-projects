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
const btnUp = document.getElementById('btn-up');


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

//smooth behavior for scrolling though the whole WEBPAGE---

document.querySelector('html').style.scrollBehavior = 'smooth';

// scrolling function detects which section is in VIEWPORT and adds a class to it (active class)


onScroll = (e) => {    
    for (const section of sections) {
        
        /** getting VIEWPORT height vs which section is in VIEWPORT */
        const scrollY = window.scrollY;
        const offsetTop = section.offsetTop;
        const height = section.getBoundingClientRect().height;
        
        
        /** Set sections as active when they are in VIEWPORT**/
        /** Show botton at the end of last section when it is in VIEWPORT */
        
        if (scrollY > offsetTop - 200) {
            section.classList.add('your-active-class');
            btnUp.style.display = 'block';
            
        }
        
        /** Remove the active class when section is not in VIEWPORT */
        /** Remove botton when the last section is not in VIEWPORT */
        
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


/**Creating nested elements - <a> 'anchor' inside <li> 'list item' - inside <ul> 'nav bar' */

buildMenu = () => {
    
    for (let i = 0; i < sections.length; i++) {
        let listItem = document.createElement('li');
        let anchor = document.createElement('a');
        let content = document.createTextNode(`${sections[i].getAttribute('data-nav')}`)
        anchor.appendChild(content);
        menuList.appendChild(listItem);
        //adding event listener to each anchor for a click event to call scrollInto function 

        anchor.addEventListener('click', e => {
            e.preventDefault();
            scrollInto(`${sections[i].id}`);
        })        
        
        listItem.appendChild(anchor);
        anchor.classList.add("menu__link")
    }
}

// Scroll to anchor Id using scrollIntoView event 
//scrollInto is the funtion that scrolls the page into the appropriate section (the clicked section)

scrollInto = element => {
        let anchor = document.getElementById(element);
        anchor.scrollIntoView({behavior:'smooth',
        block:'start',inline:'nearest'});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// structure the menu 
buildMenu();


/**event listener to scroll event, to call the function onScroll **/

window.addEventListener('scroll', onScroll);

/**display date at the footer of website**/

let today = new Date();

/**display date at the <footer> inside the <span>**/

document.getElementById('dateToday').innerHTML = today.toLocaleDateString();
