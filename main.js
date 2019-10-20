const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

console.log(tabItems);

// Remove Border
function removeBorder() {
  tabItems.forEach(item => item.classList.remove('active'));
}

// Remove Show
function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// Select Tab content item
function selectItem(e) {
  removeBorder();
  removeShow();

  // Add border current tab
  this.classList.add('active');
  // Grab Content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add Show Class
  tabContentItem.classList.add('show');
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
