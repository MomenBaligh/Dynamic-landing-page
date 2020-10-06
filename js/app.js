const navBar = document.querySelector('#navbar__list');
const sections = Array.from(document.querySelectorAll('section'));
const sectionNum = sections.length;
const fragment = document.createDocumentFragment();
const vh = window.innerHeight;
const vhm = vh * -1;

// Make scroll behaveior smooth
const html = document.querySelector('html');
html.style.scrollBehavior = 'smooth';

// Making nav bar dynamic and styling it
sections.forEach((section, index)=> {
    // Creating new list items in the nav bar
    const listItem = document.createElement('li');

    // Creating new links in each list item
    const listItemLink = document.createElement('a');

    // Make the section name scroll to it when clicked
    const aTagAtt = document.createAttribute('href');
    const i = index+1;
    aTagAtt.value = '#section' + i;

    // Puting the section name in the nav bar
    listItemLink.textContent = section.getAttribute('data-nav');
    
    // Add class to style the nav bar
    listItemLink.classList.add('menu__link');

    // Adding all list elements to the DOM
    listItemLink.setAttributeNode(aTagAtt);
    listItem.appendChild(listItemLink);
    fragment.appendChild(listItem);
    navBar.appendChild(fragment);
})

// Highliting the in viewport section
document.addEventListener('scroll', ()=> {
    for(const section of sections){
        if(inViewPort(section)) {
            section.style.cssText = 'border: 2px solid pink;';
        } else {
            section.style.cssText = 'border: none;';
        }
    }
});

// Testing if the secyion is in the viewport or not
function inViewPort(section) {
    const bounding = section.getBoundingClientRect();
    if(bounding.top > vhm/2 && bounding.bottom < vh ) {
        return true;
    }
    return false;
}

// Adding go to top botton
const goToBotton = document.createElement('botton');
goToBotton.style.cssText = 'width: 40px ; height: 40px; position: fixed; bottom: 5%; right: 5%; border-radius:100%; background-color: rgb(0, 120, 156); border: 5px white; color: white; text-align: center; text-justify: center; padding: 15px; cursor: pointer;';
goToBotton.innerHTML = 'Go Top';
console.log(goToBotton);
document.body.appendChild(goToBotton);

// Make the top botton go to the top of the page
goToBotton.addEventListener('click', ()=> {
    scrollTo(0,0);
})