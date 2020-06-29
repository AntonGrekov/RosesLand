var cart = [];
var goods = [];
var animating = false;

//onload
$(function () {

  cart = getUserCart();
  loadGoods();
  scrollBySections($('.js-slider-main'), $('.js-header'));

});


function printMiniCartList() {
  
  var $cartEmpty    = $('.js-cart-detailed__row_empty');
  var $cartItem     = $('.js-cart-detailed__row').first();
  var $cartBody     = $cartItem.parent();
  var $totalCart    = $('.cart-detailed__total');
  var total         = 0;

  $cartItem.css('display', 'none');

  if (getCartCount())
    //В корзине есть товары, выводим
    {
    $cartEmpty.css('display', 'none');
    cart.forEach( (item,i,arr) => {
      if (item > 0) {

        $totalCart.css('display', 'inline-block');
        //находим соответствии между товаром в cart и отображением
        //в mini-cart(cart-detailed)
        let curCartItem = $cartBody.find(`[data-id='${i + 1}']`)
        //ищем уже добавленные товары в корзине с помощью атрибута data-id
        //если находим - обновляем кол-во иначе добавляем в отображение корзины
        if (curCartItem.length ){
          curCartItem.find('.cart-detailed__quantity').val( item );
          curCartItem.find('.cart-detailed__price').html( prettyNumber(item * goods[i+1].price) );
        }
        else {
          //устанавливаем цену, количество, имя, аттрибут data-id, вещаем обработчик удаления
          var $newItem = $cartItem.clone();
          $newItem.css('visibility', 'visible');
          $newItem.find('.cart-detailed__name').html( goods[i+1].name );
          $newItem.find('.cart-detailed__quantity').val( item );
          $newItem.find('.cart-detailed__price').html( prettyNumber(goods[i+1].price * item) );
          //handlers
          $newItem.find('.js-cart-detailed__close').on('click', deleteItem);
          $newItem.find('.cart-detailed__quantity').on('input', editQuantity);
          $newItem.find('.cart-detailed__quantity').keydown(checkInput);

          $newItem.attr('data-id', i+1);
          $newItem.css('display', 'flex');

          $newItem.appendTo($cartBody);
        }
      }
    });
    // подсчет итоговой суммы
    $('.js-cart-detailed__row').each( function () {
      total += +$(this).find('.cart-detailed__price').html().replace(/ /g, "");
    });
    $totalCart.find('.cart-detailed__total-value').html( prettyNumber(total) );

  } else //В корзине пусто
    {
      $cartEmpty.css('display', 'block');
      $totalCart.css('display', 'none');
  }
}


function printMiniCartCount() {

  var $num = $('.js-mini-cart__count');

  var itemsInCart = getCartCount();

  $num.html(itemsInCart);

  if (itemsInCart == 0)
    $num.css('visibility', 'hidden');

  if ($num.css('visibility') == 'hidden' && $num.html() > 0) {
    $num.css('visibility', 'visible');
  }
}


//Обновляем состояние пользовательской корзины в localStorage и обновляем отображение 
//кол-ва и списка товаров
function updateCart() {

  localStorage.setItem('cart', JSON.stringify(cart));
  
}

function updateMiniCart() {
  printMiniCartCount();
  printMiniCartList();
}


function editQuantity(e) {

  var index = $(this).parent().attr('data-id') - 1;

  cart[index] = $(this).val();
  updateMiniCart();

}

// Prevents incorrent input
function checkInput(e) {
  console.log(e.keyCode);

  if (!((e.keyCode > 95 && e.keyCode < 106)
    || (e.keyCode > 47 && e.keyCode < 58)
      )) {
    return false;
  }
}

//Добавляем товар в пользовательскую корзину cart
function addToCart() {
  var index = $(this).attr('data-id') - 1;

  if (cart[index] == null) {
    cart[index] = 1;
    } else {
      cart[index]++;
  }

  updateCart();
  updateMiniCart();
}


function deleteItem() {
  var id = $(this).parent().attr('data-id');

  $(this).parent().remove();
  cart[id - 1] = null;

  updateCart();
  updateMiniCart();
}


function getUserCart() {
  var res = JSON.parse(localStorage.getItem('cart'));
  res = res || [];

  return res;
}

//Возвращает кол-во товаров в корзине
function getCartCount(params) {
  return cart.filter((item, i, arr) =>
    item > 0
  ).length;
}


//загружает через AJAX данные товаров из goods.json, выводит их
function loadGoods() {

  $.getJSON('data/goods.json', function (data) {
    var $mainContainer = $('.entity-cards.js-goods');
    var $goodsCount = Object.keys(data).length;
    // Записываем объект товаров в глобальную переменную для дальнейшей работы
    // Объект goods/data - readonly
    // Менять можно только исходный файл goods.json
    window.goods = data;
    var count = 0;

    document.addEventListener('scroll', function (e) {
      if (isScrolledIntoView($('.heading__title.title.title_main'))) {
        if (!animating) {
          showChild($goodsCount);
          animating = true;
        }
      }


    });

    //если мы на главной выводим товары
    if (location.pathname == "/" || location.pathname == "/index.html") {
      setData();
      $mainContainer.children().find('.entity-card__price-buybutton').on('click', addToCart);
    }

    updateCart();
    updateMiniCart();

    // Описание функций
    // Функция показывает товары с анимацией, согласно кол-ву товаров в файле goods.json
    function showChild(number) {
      var $toShow = $mainContainer.children().slice(0, number);

      var timer = setInterval(function () {
        $toShow[count++].style = "visibility: visible; animation: showUp 2s forwards;";
        if (count >= $goodsCount) {
          clearInterval(timer);
        }
      }, 300);
    };

    // Функция задает данные из файла goods.json (id-товара, картинку, цену)
    function setData() {
      var count = 0;

      while (count < $goodsCount) {
        $mainContainer.children().find('.entity-card__image')[count].setAttribute("src", data[count + 1].image);
        $mainContainer.children().find('.entity-card__price-value')[count].innerHTML = prettyNumber(data[count + 1].price) + " ₽";
        $mainContainer.children().find('.entity-card__title-link')[count].innerHTML = data[count + 1].name;
        $mainContainer.children().find('.entity-card__price-buybutton')[count].setAttribute("data-id", count + 1);
        count++;
      }
    }
  });
}


function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



function scrollBySections(sectionToScroll, offset) {
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

//returns formated 3-rank number
// 9000000 -> 9 000 000
function prettyNumber(num) {
  return (num + "").replace(/(\d{1,3})(?=(?:\d{3})+$)/g, "$1 ")
}