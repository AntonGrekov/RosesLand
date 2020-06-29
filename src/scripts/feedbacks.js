
class Feedbacks {
   constructor() {
      this.num = 0;
      this.imgBase = 'i/bitmapped/blog-category/feedback-';
      this.data = [
         {
            id: 0,
            img: this.imgBase + '0' + '.jpg',
            text: "Очень удобный магазин, можно зайти на сайт посмотреть, выбрать, заказать. Если возникли вопросы по товару всегда можно позвонить и уточнить у консультанта. Первый раз заказывал года два назад по совету друзей! "
         },
         {
            id: 1,
            img: this.imgBase + '1' + '.jpg',
            text: "Покупал здесь телефон в подарок девушке LG G2. Она давно о нём мечтала, так что решил её порадовать. Магазин предоставил самую низкую цену в рунете, поэтому здесь и купил"
         },
         {
            id: 2,
            img: this.imgBase + '2' + '.jpg',
            text: "Цены, персонал, обслуживание, качество товара, работа в некоторые праздники, скорость доставки"
         },
         {
            id: 3,
            img: this.imgBase + '3' + '.jpg',
            text: "Был приятно удивлен ценой, и наличием нужного товара, который долго не мог найти. Самое лучшее место для покупки наушников !!! "
         },
         {
            id: 4,
            img: this.imgBase + '4' + '.jpg',
            text: "Цена на товар, который я заказал самая низкая, что я нашёл. Очень лёгкое и быстрое оформление заказа."
         },
         {
            id: 5,
            img: this.imgBase + '5' + '.jpg',
            text: "Оперативная обратная связь. Очень быстрая доставка даже в выходной день. Всё соответствует описанию."
         },
         {
            id: 6,
            img: this.imgBase + '6' + '.jpg',
            text: "Всё то что я получил это образец пример как надо работать всем компания искренне. Я реальный покупатель сегодня привезли просто настроение хорошее наушники работают отлично"
         },
         {
            id: 7,
            img: this.imgBase + '7' + '.jpg',
            text: "Позвонили сразу, согласовали доставку на следующий день. Всё чётко и быстро. Товар соответствовал заявленному. Курьер приятный и культурный."
         }
      ];
      this.totalFB = this.data.length;
   }

   getUniqueFeedback(root=".feedback__body") {
      var exitLoop = false;

      this.data.forEach( (item, i, arr) => {
         if (exitLoop) {return;};
         if ( !$(root).find(`[data-id='${i}']`).length ) {
            if (this.num % (this.totalFB - 1) <= i) {
               this.num = i;
               exitLoop = true;
            }
         }
      });

      return {
         text: this.data[this.num].text,
         img: this.data[this.num].img,
         id: this.data[this.num].id
      }
   }
}

var FeedbacksRoller = new Feedbacks();


$(function () {
   switchFeedback('fb-block_tleft', 2500);
   switchFeedback('fb-block_tright', 2500);
   switchFeedback('fb-block_bleft', 2500);
   switchFeedback('fb-block_bright', 2500);
});


function switchFeedback(className, timeout) {

   var el = $('.' + className);
   var animating = false;

   el.on('click', function () {

      if (animating) return;

      if (!$(this).hasClass(className + '-animation')) {
         
         animating = true;
         $(this).addClass(className + '-animation');

         setTimeout(() => {
            $(this).removeClass(className + '-animation');

            var rand = Math.floor(Math.random() * 10);
            if (rand > 2) {
               $(this).addClass('shake');
               setTimeout(() => {
                  $(this).removeClass('shake');
                  animating = false;
               }, 1000);
            } else {animating = false;}

         }, timeout);
      }


      var fb = FeedbacksRoller.getUniqueFeedback();
      el.attr('data-id', fb.id);

      setTimeout(() => {
         el.find('.fb-block__img').attr('src', fb.img);
         el.find('.fb-block__text').html(fb.text);
      }, timeout - 1500);
   })
}

