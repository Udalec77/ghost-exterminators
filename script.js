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
  const wasFlipped = card.classList.contains('flipped');
  card.classList.toggle('flipped');
  if (!wasFlipped) {
    card.classList.add('flipped-back');
  } else {
    card.classList.remove('flipped-back');
  }
}

// Select category from card
function selectCategory(category) {
  document.getElementById('selectedCategory').value = category;
  // Close all flipped cards
  document.querySelectorAll('.flip-card').forEach(card => {
    card.classList.remove('flipped', 'flipped-back');
  });
  openModal();
}

// Contact via different channels
function contactVia(type) {
  if (type === 'phone') {
    window.location.href = 'tel:+79265954245';
  } else if (type === 'telegram') {
    window.open('https://t.me/udalec77', '_blank');
  } else if (type === 'whatsapp') {
    window.open('https://wa.me/79265954245', '_blank');
  }
}

// Submit form -> open Telegram
function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const category = document.getElementById('selectedCategory').value;

  const data = {
    name: (form.name && form.name.value) || '',
    phone: (form.phone && form.phone.value) || '',
    address: (form.address && form.address.value) || '',
    comment: (form.comment && form.comment.value) || '',
    category: category || ''
  };

  const text = [
    'Новая заявка с сайта Ghost Exterminators:',
    'Имя: ' + data.name,
    'Телефон: ' + data.phone,
    'Адрес: ' + data.address,
    'Категория: ' + data.category,
    'Комментарий: ' + data.comment
  ].filter(Boolean).join('\n');

  window.open('https://t.me/udalec77?text=' + encodeURIComponent(text), '_blank');
  form.reset();
  closeModal();
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
