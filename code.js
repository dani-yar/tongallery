const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

window.onload = function () {
  var scr = $(".scroll");
  scr.mousedown(function () {
    var startX = this.scrollLeft + event.pageX;
    var startY = this.scrollTop + event.pageY;
  scr.mousemove(function () {
    this.scrollLeft = startX - event.pageX;
    this.scrollTop = startY - event.pageY;
    return false;
  });
});
      $(window).mouseup(function () {
    scr.off("mousemove");
  });
}
  