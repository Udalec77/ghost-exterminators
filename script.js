// Ghost Exterminators - Interactive JavaScript

// Open modal
function openModal() {
  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Toggle flip card
function toggleCard(card) {
  card.classList.toggle('flipped');
}

// Select category from card
function selectCategory(category) {
  document.getElementById('selectedCategory').value = category;
  // Close all flipped cards
  document.querySelectorAll('.flip-card').forEach(card => {
    card.classList.remove('flipped');
  });
  openModal();
}

// Contact via different channels
function contactVia(type) {
  if (type === 'phone') {
    alert('📞 Звоните: +7 (222) 222-22-22');
  } else if (type === 'telegram') {
    alert('Telegram: @ghostexterminators');
    // window.open('https://t.me/ghostexterminators', '_blank');
  } else if (type === 'whatsapp') {
    alert('WhatsApp: +7 (222) 222-22-22');
    // window.open('https://wa.me/72222222222', '_blank');
  }
}

// Submit form
function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const category = document.getElementById('selectedCategory').value;
  
  // Анимация отправки
  const submitBtn = form.querySelector('.submit-btn');
  submitBtn.textContent = 'Отправляем...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    const categoryText = category ? ` (${category})` : '';
    alert(`✅ Заявка отправлена${categoryText}! Мы свяжемся в течение 15 минут.`);
    form.reset();
    closeModal();
    submitBtn.textContent = 'Отправить заявку';
    submitBtn.disabled = false;
  }, 1000);
}

// Close modal on outside click
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target.id === 'modal') {
    closeModal();
  }
});

// Neon flicker effect on scroll
window.addEventListener('scroll', () => {
  const title = document.querySelector('.hero-title');
  if (window.scrollY > 100) {
    title.style.opacity = '0.7';
  } else {
    title.style.opacity = '1';
  }
});

// Animated particles background
function createParticles() {
  const hero = document.querySelector('.hero');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    hero.appendChild(particle);
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', createParticles);