// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Alert on Option Card Click
  document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', function () {
      const option = this.getAttribute('data-option');
      alert(`You selected: ${option}`);
    });
  });
  
  // Button Interaction
  document.querySelector('.animated-button').addEventListener('click', () => {
    alert('Get Started!');
  });
  