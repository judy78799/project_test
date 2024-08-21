function renderPagination(currentPage) {
    if (_totalCount <= 20) return; 
  
    //Math.ceil 소수점 이하를 올림
    var totalPage = Math.ceil(_totalCount / 20);
    var pageGroup = Math.ceil(currentPage / 10);
  
    var last = pageGroup * 10;
    if (last > totalPage) last = totalPage;
    var first = last - (10 - 1) <= 0 ? 1 : last - (10 - 1);
    var next = last + 1;
    var prev = first - 1;
  
    //이 객체는 실제 DOM에 추가되지 않고, 메모리 상에만 존재합니다. 이를 통해 여러 노드를 한 번에 DOM에 추가할 수 있어 성능 향상을 기대할 수 있습니다.
    const fragmentPage = document.createDocumentFragment();
    if (prev > 0) {
      var allpreli = document.createElement('li');
      //특정 DOM 요소의 지정된 위치에 HTML 문자열을 삽입할 수 있게 해줍니다.
      //자식 요소의 맨 끝에다가 요소를 추가함.'>>'
      allpreli.insertAdjacentHTML("beforeend", `<a href='#js-bottom' id='allprev'>&lt;&lt;</a>`);
  
      var preli = document.createElement('li');
      //'>'생성
        preli.insertAdjacentHTML("beforeend", `<a href='#js-bottom' id='prev'>&lt;</a>`);
  
        //메모리 상에 존재하는 것에 >> > 를 추가?
        fragmentPage.appendChild(allpreli);
        fragmentPage.appendChild(preli);
    }
      
    for (var i = first; i <= last; i++) {
      const li = document.createElement("li");
      //요소에 임의의 데이터를 저장할 수 있습니다. JavaScript에서 쉽게 접근하고 조작할 수 있습니다.
      //var pageNum = document.getElementById('page-3').dataset.num; // '3'
      li.insertAdjacentHTML("beforeend", `<a href='#js-bottom' id='page-${i}' data-num='${i}'>${i}</a>`);
      //DocumentFragment는 DOM 트리의 일부를 나타내는 가벼운 객체입니다.
      //appendChild(li)는 fragmentPage 객체에 li 요소를 자식으로 추가하는 메서드입니다.
      //이 코드는 일반적으로 새로운 DOM 요소를 생성하고 이를 문서에 추가할 때 사용됩니다.
      //반복문을 통해 여러 개의 <li> 요소를 생성하고 이를 fragmentPage에 추가한 뒤, 
      //마지막에 fragmentPage를 실제 DOM 트리에 추가할 수 있습니다. 이렇게 하면 DOM 트리를 한 번에 업데이트할 수 있어 성능이 향상됩니다.
      fragmentPage.appendChild(li);
    }
  
    if (last < totalPage) {
      var allendli = document.createElement('li');
      //li 요소 마지막에 a 태그를 추가 '>>'
      allendli.insertAdjacentHTML("beforeend", `<a href='#js-bottom'  id='allnext'>&gt;&gt;</a>`);
  
      var endli = document.createElement('li');
      //li 요소 마지막에 a 태그를 추가 '>' 
      endli.insertAdjacentHTML("beforeend", `<a  href='#js-program-detail-bottom'  id='next'>&gt;</a>`);
  
      fragmentPage.appendChild(endli);
      fragmentPage.appendChild(allendli);
    }
  
    document.getElementById('js-pagination').appendChild(fragmentPage);
    // 페이지 목록 생성 : 가상 메모리에 집어넣었던 것을 도큐먼트에 추가해줌.
  
    $(`#js-pagination a`).removeClass("active");
    $(`#js-pagination a#page-${currentPage}`).addClass("active");
  
    $("#js-pagination a").click(function (e) {
      e.preventDefault();
      var $item = $(this);
      var $id = $item.attr("id");
      var selectedPage = $item.text();
  
      if ($id == "next") selectedPage = next;
      if ($id == "prev") selectedPage = prev;
      if ($id == "allprev") selectedPage = 1;
      if ($id == "allnext") selectedPage = totalPage;
  
      list.renderPagination(selectedPage);//페이지네이션 그리는 함수
      list.search(selectedPage);//페이지 그리는 함수
    });
  };