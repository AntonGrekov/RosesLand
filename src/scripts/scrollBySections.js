
export function scrollBySections (sectionToScroll, offset) {
   var animating = false,
      $target = $('html, body'),
      tempScrollTop = 0,
      fullScrollTop = 0,
      currentScrollTop = 0,
      xoffset = 0,
      inSection = false,
      topEdge = sectionToScroll.offset().top,
      botEdge = topEdge + sectionToScroll.height();

   if (offset) {
      if (offset instanceof jQuery)
         xoffset = offset.height();
      else if (offset.match(/^[0-9]{1,2}%$/)) {
         xoffset = $(window).height() / 100 * +offset.replace('%', '');
      }
      else if (offset.match(/^[0-9]+px$/)) {
         xoffset = +offset.replace('px', '');
      }
      else console.log('error in offset input');
   }

   $(document).scroll(function (e) {
      if (animating) {
         return;
      }

      fullScrollTop = $(document).scrollTop() + $(window).height();
      currentScrollTop = $(document).scrollTop();

      if (fullScrollTop > topEdge && currentScrollTop < botEdge - xoffset
         || tempScrollTop > currentScrollTop && currentScrollTop < botEdge - xoffset) {

         animating = true;
         $target.stop(true).animate(
            { scrollTop: sectionToScroll.offset().top }, 1000, function () {
               inSection = true;
               animating = false;
               tempScrollTop = $(document).scrollTop();
               currentScrollTop = $(document).scrollTop();
            });
      };

      if (tempScrollTop < currentScrollTop && inSection) {
         console.log('moving bottom in section');
         animating = true;
         $target.stop(true).animate(
            { scrollTop: $(document).scrollTop() + $(window).height() - xoffset }
            , 1000, function () {
               animating = false;
               inSection = false;
               tempScrollTop = $(document).scrollTop();
            });
      } else
         if (tempScrollTop > currentScrollTop && inSection) {
            console.log('moving up in section');
            animating = true;
            $target.stop(true).animate({ scrollTop: $(window).scrollTop() - $(window).height() - 150 }, 1000, function () {
               animating = false;
               inSection = false;
               tempScrollTop = $(document).scrollTop();
            });
         }
   });
};