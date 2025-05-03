// ✅ 검색창 요소 가져오기
const searchEl = document.querySelector('.search');           // 검색창 전체 요소 (.search)
const searchInputEl = searchEl.querySelector('input');        // 검색창 안의 input 요소

// ✅ 검색창을 클릭하면 input 요소에 포커스 되도록 설정
searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // input 요소에 포커스 설정
});

// ✅ input에 포커스되면 클래스와 placeholder 추가
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');                // .focused 클래스 추가 (스타일링 목적)
  searchInputEl.setAttribute('placeholder', '통합검색'); // placeholder 텍스트 추가
});

// ✅ input에서 포커스가 해제되면 클래스와 placeholder 제거
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');             // .focused 클래스 제거
  searchInputEl.setAttribute('placeholder', '');    // placeholder 텍스트 제거
});


// ✅ 배지 요소 선택 (헤더 내부의 .badges 요소)
const badgeEl = document.querySelector('header .badges');

// ✅ window 스크롤 이벤트에 throttle을 적용해 성능 최적화
// - lodash의 _.throttle 함수 사용
// - 스크롤 이벤트가 0.3초에 한 번씩 실행됨
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY); // 현재 스크롤 위치 로그 출력

  // ✅ 스크롤 위치가 500px보다 크면 배지 숨기기
  if (window.scrollY > 500) {
    // gsap 애니메이션을 통해 배지를 서서히 사라지게 함
    gsap.to(badgeEl, 0.6, {
      opacity: 0,       // 투명도 0으로 설정
      display: 'none'   // 화면에서 숨김 처리
    });
  } else {
    // ✅ 스크롤 위치가 500px 이하면 배지 다시 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,       // 투명도 1로 설정 (완전히 보이게 함)
      display: 'block'  // 화면에 다시 표시
    });
  }
}, 300)); // 300ms마다 실행


// ✅ 순차적으로 나타날 요소들을 선택 (.visual 섹션 내부의 .fade-in 요소들)
const fadeEls = document.querySelectorAll('.visual .fade-in');

// ✅ 각 요소에 대해 반복 실행
fadeEls.forEach(function (fadeEl, index) {
  // gsap을 사용해 opacity 1로 서서히 나타나도록 애니메이션 적용
  gsap.to(fadeEl, 1, {           // 지속시간: 1초
    delay: (index + 1) * 0.7,    // 요소마다 순차적으로 0.7초씩 지연
    opacity: 1                   // 투명도 1로 설정 (보이게 하기)
  });
});


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
// Swiper 인스턴스 생성 (프로모션 영역용)
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,              // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10,              // 슬라이드 사이 여백 (px 단위)
  centeredSlides: true,          // 1번 슬라이드를 가운데로 배치
  loop: true,                    // 슬라이드 반복 재생 여부
  // autoplay: {
  //   delay: 5000               // 자동 슬라이드 간 시간 간격 (ms 단위)
  // },

  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 요소 (수정됨: promation → promotion)
    clickable: true                       // 페이지 번호 클릭으로 슬라이드 이동 가능
  },

  navigation: {
    prevEl: '.promotion .swiper-prev',    // 이전 슬라이드 버튼 요소 (수정됨: promation → promotion)
    nextEl: '.promotion .swiper-next'     // 다음 슬라이드 버튼 요소 (수정됨: promation → promotion)
  }
});