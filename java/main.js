const urlParams = new URLSearchParams(window.location.search);
const menuType = urlParams.get('menu');
console.log(menuType);

const hotDrinksMenu = document.getElementById('all-hot-drinks');
const coldDrinksMenu = document.getElementById('all-cold-drinks');
const snacksMenu = document.getElementById('all-snacks');

hotDrinksMenu.style.display = 'none';
coldDrinksMenu.style.display = 'none';
snacksMenu.style.display = 'none';

if (menuType === 'hot-drinks') {
    hotDrinksMenu.style.display = 'block';
} else if (menuType === 'cold-drinks') {
    coldDrinksMenu.style.display = 'block';
} else if (menuType === 'snacks') {
    snacksMenu.style.display = 'block';
} else {
    alert("Something's gone wrong. Please try again")
};