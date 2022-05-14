// remove anchor from url
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

// art anim
let artNum = 0;
let futureArt, oldArt, newArt;
function SetImage() {
  futureArt = artNum + 1;
  if (artNum == 6) {
    artNum = 0;
  } else {
    $('#art' + artNum).css('display','none');
    $('#art' + futureArt).css('display','block');
    if (artNum == 5) {
      artNum = 0;
      $('#art0').css('display','block');
    } else {
      artNum = futureArt;
    }
  }
} setInterval(SetImage, 5000);


// touch slider
window.onload = function () {
  let scr = $(".scroll");
  scr.mousedown(function () {
    let startX = this.scrollLeft + event.pageX;
    let startY = this.scrollTop + event.pageY;
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
  