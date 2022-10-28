import Home from '../components/home/Home';

//////////////////////////////////////////////////////////////////////
// Page navigation
const navCheckbox = document.querySelector('.navbar__checkbox');
const navbarButton = document.querySelector('.navbar__button');
document.querySelector('.navbar__list').addEventListener('click', function(e) {
    e.preventDefault();

    if (e.target.classList.contains('navbar__link')) {
        // Check whether the navivation burguer is visible
        if (window.getComputedStyle(navbarButton).display === 'block') {
            // Close the navigation window before scrolling
            navCheckbox.checked = false;
        };
        
        // Select target and scroll to it
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    };
});

const Camperock = function() {
    return <Home />
}

export default Camperock;