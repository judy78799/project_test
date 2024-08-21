//====================================================================//
//스크롤 헤더 인디게이터 javascript
//wave_container
window.addEventListener("scroll", () => {
    const indicatorBar = document.querySelector(".scroll-indicator-bar");
  
    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;
  
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
  
  //웨이브 컨테이너 위치 계산
    let wave_container = document.querySelector('#wave_container');
    let wave_container_top = window.pageYOffset + wave_container.getBoundingClientRect().top;
    console.log("wave_container의 위치 ? : " + wave_container_top); //747
  
    //만약 현재 스크롤 값이 웨이브 컨테이너 위치보다 크다면~
    if(winY > wave_container_top){
      console.log("true======================================");
      navFontColor1.style.color = 'black';
      navFontColor2.style.color = 'black';
      navFontColor3.style.color = 'black';
      navFontColor4.style.color = 'black';
      logoColor.style.color = 'black';
      loginBtn.style.backgroundColor = 'black';
      my_page.style.backgroundColor = 'black';
    }else{
      navFontColor1.style.color = 'white';
      navFontColor2.style.color = 'white';
      navFontColor3.style.color = 'white';
      navFontColor4.style.color = 'white';
      logoColor.style.color = 'white';
      loginBtn.style.backgroundColor = 'transparent';
      my_page.style.backgroundColor = 'transparent';
    }
  });
  
  
  //이미지 슬라이더 javascript
  //totalNum : 우측 작은 사각형의 개수
  let totalNum = document.getElementById("ulSet").childElementCount;
  let currentNum;
  let indexNum = 0;
  let imgLoof;
  
  //우측의 작은 사각형 부분 띠 부분.
  for (i = 1; i <= totalNum; i++) {
      var list = document.getElementById("list" + i); //list 1,2,3,4..
      //list 요소의 HTML 내용을 수정함. (앞 뒤로 sapn 태그 추가 앞 2 뒤 3개)
      //앞 : 큰 박스 , 뒤: 작은 박스
      //기존 내용 앞 뒤로 span 태그들이 추가됨. -> 해당 span 태그에 css 상에서 nth:child(n) 방식으로 스타일 추가함.
      list.innerHTML = "<span></span><span></span>" + list.innerHTML + "<span><span></span><span></span></span>";
      list.onclick = function () {
          console.log("currentNum : 현재 슬라이스 번호는?" + this.id.slice(4, 5)); //list'1' 현재 번호 아이디 체크 
          clearInterval(imgLoof);
          currentNum = this.id.slice(4, 5);
          viewImg();  //이미지 보여주세요~
          imgSetting(); //이미지 세팅해주세요~
      }
  }
  
  //이미지 + 텍스트 + 우측 막대기 반복 기능 
  let viewImg = function () {
      console.log(currentNum); //현재 번호
      
      for (i = 1; i <= totalNum; i++) {
        document.getElementById("list" + i).classList.remove("listShow");
      }
      //각 이미지, 텍스트 indexNum 번호 반복
      document.getElementById("img" + currentNum).style.zIndex = ++indexNum;
      let imgIdZindex = document.getElementById("img" + currentNum).style.zIndex;
      document.getElementById("text" + currentNum).style.zIndex = ++indexNum;
      // if(imgIdZindex > totalNum ){
      //   imgIdZindex = totalNum;
      // }
      //console.log("imgIdZindex 은? :" + ulSetIdZindex);
      //document.getElementById("button" + currentNum).style.zIndex = ++indexNum;
      // 우측 막대기들도 같이 적용시켜줘야 묻히지 않음.
      // let ulSetIdZindex = document.getElementById("ulSet").style.zIndex;
      document.getElementById("ulSet").style.zIndex = ++indexNum;
      // if(ulSetIdZindex > totalNum ){
      //   ulSetIdZindex = totalNum;
      // }
      //console.log("ulSetIdZindex은? : " + ulSetIdZindex);
      document.getElementById("img" + currentNum).classList.add("imgHide");
      document.getElementById("text" + currentNum).classList.add("textShow");
      //document.getElementById("button" + currentNum).classList.add("buttonShow");
      document.getElementById("list" + currentNum).classList.add("listShow");
      let clear = setInterval(function () {
          if (currentNum == 1) {
              document.getElementById("img4").classList.remove("imgHide");
          } else {
              document.getElementById("img" + (currentNum - 1)).classList.remove("imgHide");
          }
          clearInterval(clear);
      }, 1000);
  }
  
  let imgSetting = function () {
      imgLoof = setInterval(function () {
        //이미지 현재 번호가 끝에 다다르면 초기화 시켜줘
          if (currentNum == totalNum) {
              currentNum = 1;
          } else {
            //아니라면 계속 이미지 숫자 올려줘~
              currentNum++;
          }
          viewImg();
      }, 3000);
  }
  currentNum = 1;
  viewImg();
  imgSetting();
  
  //wave Container 자바스크립트
  let wave1 = document.getElementById('wave1');
  let wave2 = document.getElementById('wave2');
  let wave3 = document.getElementById('wave3');
  let wave4 = document.getElementById('wave4');
  
      window.addEventListener('scroll', function(){
        let value = window.scrollY;
        wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
        wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
        wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
        wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
      })
  
  
  //sec3 자바스크립트
      /*window.onload = function () {
        const wrap = document.querySelector('.sec3-mainimg_box_wrap');
        const boxes = Array.from(wrap.children);
  
        boxes.forEach(box => {
          const clone = box.cloneNode(true);
          wrap.appendChild(clone);
        });
  
        document.querySelector('.sec3-areas_box2 a').addEventListener('click', function(e) {
          e.preventDefault(); 
  
          const mainImgWrap = document.querySelector('.sec3-mainimg_box_wrap');
          mainImgWrap.classList.toggle('hidden'); 
        });
      };
*/
window.onload = function () {  // 페이지가 로딩된 후에 실행되는 함수
  // 여러 슬라이드 요소를 처리하기 위해서 셀렉터 배열로 만듬
  const wraps = [
    '.sec3-mainimg_box_wrap1',
    '.sec3-mainimg_box_wrap2',
    '.sec3-mainimg_box_wrap3',
    '.sec3-mainimg_box_wrap4',
    '.sec3-mainimg_box_wrap5'
  ];

  // 각 슬라이드 요소를 처리하기 위한 반복문
  wraps.forEach(selector => {
    const wrap = document.querySelector(selector); // 셀렉터로 요소를 선택
    if (wrap) { // 요소가 존재할 때만 실행
      const boxes = Array.from(wrap.children); // 자식 요소들을 배열로 변환
      boxes.forEach(box => {
        const clone = box.cloneNode(true); // 자식 요소를 복제
        wrap.appendChild(clone); // 복제한 요소를 원래 요소에 추가
      });

      let currentIndex = 0; // 현재 슬라이드 인덱스를 0으로 초기화

      function goToSlide(index) {
        const slideWidth = boxes[0].offsetWidth; // 슬라이드의 길이측정
        wrap.style.transform = `translateX(${-slideWidth * index}px)`; // 슬라이드를 좌우로 이동시키는 CSS 변환
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % boxes.length; // 다음 슬라이드 인덱스 계산
        goToSlide(currentIndex); // 다음 슬라이드로 이동
      }

      wrap.addEventListener('click', nextSlide); // 슬라이드 요소를 클릭하면 다음 슬라이드로 이동
    }
  });

  function showSection(idToShow) {
    // 모든 섹션을 선택
    const sections = document.querySelectorAll('#sec3-mainimg1, #sec3-mainimg2, #sec3-mainimg3, #sec3-mainimg4, #sec3-mainimg5');

    // 모든 섹션을 숨김 처리
    sections.forEach(section => {
      section.classList.add('hidden');
    });

    // 선택한 섹션만 보이도록 설정
    document.getElementById(idToShow).classList.remove('hidden');
  }

  // 페이지 로드 시 기본적으로 'sec3-mainimg1' 섹션을 표시
  showSection('sec3-mainimg1');

  // '즐거운 공간' 버튼 클릭 시 'sec3-mainimg1' 섹션을 표시
  document.getElementById('show-enjoyment').addEventListener('click', function (e) {
    e.preventDefault(); // 기본 링크 동작 방지
    showSection('sec3-mainimg1'); // 'sec3-mainimg1' 섹션을 표시
    e.style.backgroundColor = "red";
  });

  // '감성 공간' 버튼 클릭 시 'sec3-mainimg2' 섹션을 표시
  document.getElementById('show-sensibility').addEventListener('click', function (e) {
    e.preventDefault(); // 기본 링크 동작 방지
    showSection('sec3-mainimg2'); // 'sec3-mainimg2' 섹션을 표시
  });

  // '산책 공간' 버튼 클릭 시 'sec3-mainimg3' 섹션을 표시
  document.getElementById('show-walk').addEventListener('click', function (e) {
    e.preventDefault(); // 기본 링크 동작 방지
    showSection('sec3-mainimg3'); // 'sec3-mainimg3' 섹션을 표시
  });

  // '놀이 공간' 버튼 클릭 시 'sec3-mainimg4' 섹션을 표시
  document.getElementById('show-play').addEventListener('click', function (e) {
    e.preventDefault(); // 기본 링크 동작 방지
    showSection('sec3-mainimg4'); // 'sec3-mainimg4' 섹션을 표시
  });

  // '힐링 공간' 버튼 클릭 시 'sec3-mainimg5' 섹션을 표시
  document.getElementById('show-healing').addEventListener('click', function (e) {
    e.preventDefault(); // 기본 링크 동작 방지
    showSection('sec3-mainimg5'); // 'sec3-mainimg5' 섹션을 표시
  });

}; window.onload = function () {
  // 슬라이드 요소를 선택하기 위한 셀렉터 배열
  const wraps = [
    '.sec3-mainimg_box_wrap1',
    '.sec3-mainimg_box_wrap2',
    '.sec3-mainimg_box_wrap3',
    '.sec3-mainimg_box_wrap4',
    '.sec3-mainimg_box_wrap5'
  ];

  // 각 슬라이드 요소를 처리하기 위한 반복문
  wraps.forEach(selector => {
    const wrap = document.querySelector(selector); // 셀렉터로 요소를 선택
    if (wrap) { // 요소가 존재할 때만 실행
      const boxes = Array.from(wrap.children); // 자식 요소들을 배열로 변환
      boxes.forEach(box => {
        const clone = box.cloneNode(true); // 자식 요소를 복제
        wrap.appendChild(clone); // 복제한 요소를 원래 요소에 추가
      });

      let currentIndex = 0; // 현재 슬라이드 인덱스를 0으로 초기화

      // 슬라이드를 이동시키는 함수
      function goToSlide(index) {
        const slideWidth = boxes[0].offsetWidth; // 슬라이드의 너비 측정
        wrap.style.transform = `translateX(${-slideWidth * index}px)`; // 슬라이드를 좌우로 이동시키는 CSS 변환
      }

      // 다음 슬라이드로 이동하는 함수
      function nextSlide() {
        currentIndex = (currentIndex + 1) % boxes.length; // 다음 슬라이드 인덱스 계산
        goToSlide(currentIndex); // 다음 슬라이드로 이동
      }

      // 슬라이드 요소를 클릭하면 다음 슬라이드로 이동
      wrap.addEventListener('click', nextSlide);
    }
  });

  // 특정 섹션을 보이도록 하는 함수
  function showSection(idToShow) {
    // 모든 섹션 선택
    const sections = document.querySelectorAll('#sec3-mainimg1, #sec3-mainimg2, #sec3-mainimg3, #sec3-mainimg4, #sec3-mainimg5');

    // 모든 섹션을 숨김 처리
    sections.forEach(section => section.classList.add('hidden'));

    // 선택한 섹션만 보이도록 설정
    document.getElementById(idToShow).classList.remove('hidden');
  }

  // 페이지 로드 시 기본적으로 'sec3-mainimg1' 섹션을 표시
  showSection('sec3-mainimg1');

  // 각 div 요소에 클릭 이벤트 추가
  document.querySelectorAll('.sec3-areas_box1, .sec3-areas_box2, .sec3-areas_box4, .sec3-areas_box6, .sec3-areas_box7').forEach((div) => {
    div.addEventListener('click', function () {
      let box1 = document.getElementsByClassName("sec3-areas_box1");
      let box2 = document.getElementsByClassName("sec3-areas_box2");
      let box3 = document.getElementsByClassName("sec3-areas_box4");
      let box4 = document.getElementsByClassName("sec3-areas_box6");
      let box5 = document.getElementsByClassName("sec3-areas_box7");
      if(this == box1){
        this.style.backgroundColor="red";
      }
      //this.style.backgroundColor="red";

      //클릭되지 않은 나머지 버튼색상은 none으로 해줘
      // div의 className에서 섹션 ID를 결정
      const sectionMap = {
        'sec3-areas_box1': 'sec3-mainimg1',
        'sec3-areas_box2': 'sec3-mainimg2',
        'sec3-areas_box4': 'sec3-mainimg3',
        'sec3-areas_box6': 'sec3-mainimg4',
        'sec3-areas_box7': 'sec3-mainimg5'
      };

      // div의 클래스를 기준으로 섹션 ID를 찾음
      const className = Array.from(this.classList).find(cls => sectionMap[cls]);
      const sectionId = sectionMap[className]; // 클래스 이름에 해당하는 섹션 ID 찾기

      if (sectionId) {
        showSection(sectionId); // 해당 섹션을 보이도록 설정
      }
    });
  });
};    
  

  // 아코디언 자바스크립트
  //리스트 개수 자식 개수의 /2 개
  var totalList = document.getElementById("challengeSet").childElementCount/2;
  
  let initFunction = function () {
      for (var i = 1; i <= totalList; i++) {
          document.getElementById("dd" + i).classList.remove("active");
          document.getElementById("dt" + i).classList.remove("active");
      }
  }
  for (var i = 1; i <= totalList; i++) {
    //해당 번호의 리스트를 클릭하면~
      document.getElementById("dt" + i).onclick = function () {
          console.log("현재 리스트 id 번호는? : " + this.id.slice(2, 3));
          //일단 list 가 처음 닫혀있는 상태로 만들어줌(초기화)
          initFunction();
          //클릭한 id 값에 해당하는 dd에 active 클래스 붙여줘
          document.getElementById("dd" + this.id.slice(2, 3)).classList.add("active");
          document.getElementById("dt" + this.id.slice(2, 3)).classList.add("active");
      };
  }
  


  function scrollToTop() {
    // 현재 스크롤 위치를 가져옵니다.
    const scrollY = window.scrollY; //상수 scrollY는 윈도우의 scrollY값을 가져온다.

    // 스크롤 위치가 0보다 크면, 다시 scrollToTop 함수를 호출합니다.
    if (scrollY > 0) {
        requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollY - scrollY / 35); //top으로 스크롤 하여 '0' 으로 도착(맨위), Y에서 Y값으로 스크롤/ 35속도 만큼.
    }
    const topBtn = document.getElementById("topBtn");

    }
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", scrollToTop);


//실험중...  
/*
//sec1_box를 호버하면 box_move_btn의 색상도 바꿔줘
let sec1_box = document.getElementsByClassName("sec1_box");
let box_move_btn = document.getElementsByClassName("box_move_btn");

function sec1_box_hover(){
  sec1_box[i].addEventListener('mouseover', sec1_box_hover);
  for( var i = 0; i < sec1_box.length; i++){
    sec1_box[i].style.cursor = "pointer";
    sec1_box[i].style.backgroundColor = "red";
  sec1_box[i].addEventListener('mouseover', function(){
    console.log("마우스 오버됨");
      sec1_box[i].style.cursor = "pointer";
      box_move_btn[i].style.backgroundColor = "#00000087";
      box_move_btn[i].style.transition = "all 1s ease";
    });
  }
}
sec1_box[i].addEventListener('mouseover', sec1_box_hover);


sec1_box.addEventListener('mouseleave', function(){
  sec1_box.style.cursor = "none";
  box_move_btn.style.backgroundColor = "transparent";
  box_move_btn.style.transition = "all 1s ease";
});
*/
