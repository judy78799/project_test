//====================================================================//
//스크롤 헤더 인디게이터 javascript
//wave_container
window.addEventListener("scroll", () => {
  const indicatorBar = document.querySelector(".scroll-indicator-bar");
  //스크롤 위치 가져오기
  const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
  //전체 페이지 높이 반환 - 뷰포트 높이 -> 스크롤 가능한 범위
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //스크롤 된 비율
  const scrollValue = (pageScroll / height) * 100;
  //위드 값에 스크롤 비율을 접목시킴 -> 스크롤 할 수록 가로 너비가 늘어남.
  indicatorBar.style.width = scrollValue + "%";
  
  const winY = window.pageYOffset;  //브라우저에서 얼마나 스크롤 했는지 확인
  console.log("얼마나 스크롤 했을까요? : " + winY);
  
//헤더 폰트 색상 바꾸기========================================================//
//sec1의 백그라운드 스타일이 white?라면 -> header의 font color를 black으로 바꿔줘!
    let headerFontColor2 = document.querySelectorAll('.nav-item-font');
    let logoColor = document.querySelector('#logo');
    let loginBtn = document.querySelector('.login');
    let my_page = document.querySelector('.my_page');
    let navFontColor1 = document.querySelector('.nav_font1');
    let navFontColor2 = document.querySelector('.nav_font2');
    let navFontColor3 = document.querySelector('.nav_font3');
    let navFontColor4 = document.querySelector('.nav_font4');
  
  
  //메뉴 nav_font1,2 호버 하면 display block 처리해줘
  let menu1 = document.querySelector('.nav-item');
  let menu2 = document.querySelector('.nav-item2');
  let nav_hover_box = document.querySelector('.nav-hover-box');
  let nav_hover_box2 = document.querySelector('.nav-hover-box2');
  
  //메뉴 1 (.nav-item)
  menu1.addEventListener('mouseover', function(){
    console.log('마우스 오버함');
    //nav_hover_box.style.opacity = 1;
    nav_hover_box.style.display = 'block';
    nav_hover_box.style.transition = 'all 3s ease';
  });
  
  menu1.addEventListener('mouseout', function(){
    console.log('마우스 아웃함');
    nav_hover_box.style.display = 'none';
  });
  
  //메뉴 2 (.nav-item2)
  menu2.addEventListener('mouseover', function(){
    console.log('마우스 오버함2');
    nav_hover_box2.style.display = 'block';
  });
  
  menu2.addEventListener('mouseout', function(){
    console.log('마우스 아웃함2');
    nav_hover_box2.style.display = 'none';
  });
});