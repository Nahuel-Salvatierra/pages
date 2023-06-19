const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggleIcon = body.querySelector('.toggle-icon'),
      searchBtn = body.querySelector('.search-box');

      toggleIcon.addEventListener('click', () => {
        sidebar.classList.toggle('close');
      });

      searchBtn.addEventListener('click', () => {
        sidebar.classList.remove('close');
      });