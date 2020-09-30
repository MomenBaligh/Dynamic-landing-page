// Global variables
const navBar = document.querySelector('#navbar__list')
const sections = Array.from(document.querySelectorAll('section'));
const sectionNum = sections.length;

//Make nav bar dynamic 
for(let i = 1; i <= sectionNum; i++) {
    //Creating new list items in the nav bar
    const listItem = document.createElement('li');
    navBar.appendChild(listItem);
    //Creating new links in each list item
    const listItemLink = document.createElement('a');
    listItem.appendChild(listItemLink);
    //Make the link scroll to the selected section
    //Make scrool behaveior smooth
    const html = document.querySelector('html');
    html.style.scrollBehavior = 'smooth';
    //Make the link scroll to the selected section
    const aTagAtt = document.createAttribute("href");
    aTagAtt.value = "#section" + i;
    listItemLink.setAttributeNode(aTagAtt);
    //Puting the section name in the list item
    listItemLink.textContent = sections[i-1].getAttribute('data-nav');
    //Adding class
    listItemLink.classList.add('menu__link');
}


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
