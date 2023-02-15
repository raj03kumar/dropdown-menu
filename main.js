// Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

// Loop through all dropdown elements
dropdowns.forEach(dropdown =>{
    // Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // We are using this method in order to have multiple dropdown menus on the page work

    // Add a click event to the select element
    select.addEventListener('click', ()=>{
        // Add the clicked select styles to the select element
        select.classList.toggle('select-clicked');
        // Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        // Add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    // Loop through all options elements
    options.forEach(option =>{
        // Add a click event to the option element
        option.addEventListener('click', ()=>{
            // Change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            // Add the clicked select styles to the select element
            select.classList.remove('select-clicked');
            // Add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            // Add the open styles to the menu element
            menu.classList.remove('menu-open');
            // Remove active class from all option elements
            options.forEach(option=>{
                option.classList.remove('active');
            });
            // Add active class to clicked option element
            option.classList.add('active');
        });
    });
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};