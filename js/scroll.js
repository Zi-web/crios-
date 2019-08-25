var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    var listItems = document.querySelectorAll(".bouncer--1, .bouncer--2, .bouncer--3, .bouncer--4, .bouncer--5, .bouncer--6, .bouncer--7, .bouncer--8, .bouncer--9, .bouncer--10, .bouncer--11, .bouncer--12, .bouncer--13, .bouncer--14, .bouncer--15, .bouncer--16, .bouncer--17, .heart--1, .heart--2, .heart--3, .heart--4, .heart--5, .heart--6, .heart--7, .heart--8, .heart--9, .heart--10, .heart--11,.heart--12,.heart--13,.heart--14,.heart--15,.heart--16,.heart--17,.heart--18,.heart--19,.heart--20,.heart--21,.heart--22,.heart--23,.heart--24,.heart--25,.heart--26,.heart--27,.heart--28,.heart--29,.heart--30,.heart--31,.heart--32,.heart--33,.heart--34,.heart--35,.heart--36,.heart--37,.heart--38,.heart--39,.heart--40");
    var firstBox = document.querySelector("#firstBox");
    var secondBox = document.querySelector("#secondBox");
 
    function scrolling(e) {
 
        for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
 
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("active");
        } else {
          listItem.classList.remove("active");
        }
      }
    }
 
    function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }