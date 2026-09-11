// PARTICLES
(function createParticles() {
  const c = document.getElementById('particles');
  const colors = ['#f472b6','#a78bfa','#fbbf24','#34d399','#60a5fa'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${Math.random()*8+6}s;animation-delay:${Math.random()*6}s;`;
    c.appendChild(p);
  }
})();

// INIT LUCIDE ICONS
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
} else {
  window.addEventListener('load', () => lucide && lucide.createIcons());
}

function validatePassword() {
  const correctPassword = "1224"; 
  
  const enteredPassword = document.getElementById("password").value; 
  if (enteredPassword === correctPassword) { 
    window.location.href = "main.html"; 
  } 
  else { 
    document.getElementById("message").textContent = "Incorrect password! Please try again."; 
  } 
}