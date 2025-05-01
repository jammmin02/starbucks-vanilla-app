const searchEl = document.querySelector('.search'); // 검색창
const searchInputEl = searchEl.querySelector('input'); // 검색창 input

searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // 검색창 클릭 시 input에 포커스
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});



const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', function () {
  console.log('scroll')
})