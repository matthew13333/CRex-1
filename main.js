const toggleBtn = document.getElementById('tombol-btn');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  content.classList.toggle('blurred');
});

