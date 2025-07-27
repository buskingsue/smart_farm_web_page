// 모바일 메뉴 토글
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// 폼 제출
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
  e.target.reset();
});
