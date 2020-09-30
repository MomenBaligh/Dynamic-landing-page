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

// Highliting the in viewport section
document.addEventListener('scroll', function() {
    for(const section of sections){
        if(inViewPort(section)) {
            stylingSection(section);
        }else {
            removeStylingSection(section);
        }
    }
});

// Functions
// Testing if the secyion isn the viewport or not
function inViewPort(section) {
    const bounding = section.getBoundingClientRect();
    if(bounding.top > 0 && bounding.bottom > 0) {
        return true;
    }else {
        return false;
    }
}

// Styling the highlighted section 
function stylingSection(section) {
    section.style.cssText = 'border: 1px dashed #95f;'
}

// Removing styling
function removeStylingSection(section) {
    section.style.cssText = 'border: none;'
}