  // Get the modal
  var modal = document.getElementById('id01');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  // Get the container element
// Get the container element
// Get the container element
const container = document.querySelector('.container');

// Function to change the navbar background after scrolling
function changeNavbarBackground() {
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        container.classList.add('scrolled');
    } else {
        container.classList.remove('scrolled');
    }
}

// Initial call to ensure navbar is visible on page load
changeNavbarBackground();

// Event listener for scroll event
window.addEventListener('scroll', changeNavbarBackground);


