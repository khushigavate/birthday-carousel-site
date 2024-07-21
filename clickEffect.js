document.addEventListener('click', function(e) {
    // Create a new element for the ripple effect
    const effect = document.createElement('div');
    effect.classList.add('effect');
  
    // Position it where the click happened
    effect.style.width = '150px'; // Base size of the ripple
    effect.style.height = '150px'; // Base size of the ripple
    effect.style.left = `${e.clientX - 75}px`; // Center the effect
    effect.style.top = `${e.clientY - 75}px`; // Center the effect
  
    // Apply a random color with more vibrant shades
    effect.style.background = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.4)`;
  
    // Optionally vary the size of the ripple
    const size = Math.random() * 100 + 150;
    effect.style.width = `${size}px`;
    effect.style.height = `${size}px`;
  
    // Add the effect to the body
    document.body.appendChild(effect);
    
    // Remove the effect after animation ends
    setTimeout(() => {
      document.body.removeChild(effect);
    }, 2000); // Matches the duration of the ripple animation
  });
  