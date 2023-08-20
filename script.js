function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the "Scroll to Top" button when user scrolls down
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTop").style.display = "block";
  } else {
      document.getElementById("scrollToTop").style.display = "none";
  }
};