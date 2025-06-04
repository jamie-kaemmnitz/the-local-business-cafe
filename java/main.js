
document.addEventListener('DOMContentLoaded', () => {
  const hotDrinksMenu = document.getElementById('all-hot-drinks');
  const coldDrinksMenu = document.getElementById('all-cold-drinks');
  const snacksMenu = document.getElementById('all-snacks');

  // Only run if at least one menu exists on this page
  if (hotDrinksMenu || coldDrinksMenu || snacksMenu) {
    const urlParams = new URLSearchParams(window.location.search);
    const menuType = urlParams.get('menu');
    console.log('Menu type from URL:', menuType);

    // Hide all menus initially
    hotDrinksMenu && (hotDrinksMenu.style.display = 'none');
    coldDrinksMenu && (coldDrinksMenu.style.display = 'none');
    snacksMenu && (snacksMenu.style.display = 'none');

    // Show the menu based on URL param
    if (menuType === 'hot-drinks' && hotDrinksMenu) {
      hotDrinksMenu.style.display = 'block';
    } else if (menuType === 'cold-drinks' && coldDrinksMenu) {
      coldDrinksMenu.style.display = 'block';
    } else if (menuType === 'snacks' && snacksMenu) {
      snacksMenu.style.display = 'block';
    } else {
      alert("Something's gone wrong. Please try again");
    }
  }
});