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
  autoplay: {
    delay: 5000               // 자동 슬라이드 간 시간 간격 (ms 단위)
  },

  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 요소 (수정됨: promation → promotion)
    clickable: true                       // 페이지 번호 클릭으로 슬라이드 이동 가능
  },

  navigation: {
    prevEl: '.promotion .swiper-prev',    // 이전 슬라이드 버튼 요소 (수정됨: promation → promotion)
    nextEl: '.promotion .swiper-next'     // 다음 슬라이드 버튼 요소 (수정됨: promation → promotion)
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});




// 프로모션 영역 요소를 선택 
const promotionEl = document.querySelector('.promotion');

// 프로모션 토글 버튼 요소 선택 
const promotionToggleBtn = document.querySelector('.toggle-promotion');

// 프로모션 숨김 여부 상태를 저장할 변수 (초기값: false → 보임 상태)
let isHidePromotion = false;

// 토글 버튼 클릭 시 실행되는 이벤트 핸들러
promotionToggleBtn.addEventListener('click', function () {
  // 상태 값을 반전시킴 (true <-> false)
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {
    // 숨김 상태일 경우: 'hide' 클래스를 추가하여 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 상태일 경우: 'hide' 클래스를 제거하여 다시 보여줌
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size){
  // gsap.to(요소, 시간, 옵션):
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), { // 애니메이션 동작 시간
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInout,
    delay: random(0, delay)
  }
);
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy")
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐의 여부를 감시할 요소들
      triggerHook: .8, 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();