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
    //wraps => 슬라이드들
    wraps.forEach(selector => {
      //wrap => 슬라이드 단일 요소
      const wrap = document.querySelector(selector); // 셀렉터로 요소를 선택
      if (wrap) { // 요소가 존재할 때만 실행
        //box => 슬라이드 단일요소의 이미지 박스들
        // wrap의 자식 요소들을 배열로 만들어 boxes라는 변수에 할당하는 코드입니다.
        const boxes = Array.from(wrap.children); // 자식 요소들을 배열로 변환
        boxes.forEach(box => {
          const clone = box.cloneNode(true); // 자식 요소를 복제
          wrap.appendChild(clone); // 복제한 요소를 원래 요소에 추가
        }); //하나씩 복제함
  
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
    document.querySelectorAll('.sec3-areas_box1, .sec3-areas_box2, .sec3-areas_box4, .sec3-areas_box6, .sec3-areas_box7').forEach(div => {
      div.addEventListener('click', function () {
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