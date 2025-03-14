const form_btn = document.getElementById('form_btn');
const l_inp = document.getElementById('l_inp');
const r_inps = document.getElementById('r_inps');
const r_inp1 = document.getElementById('r_inp1');
const r_inp2 = document.getElementById('r_inp2');
const f_h1 = document.getElementById('f_h1');
const f_p = document.getElementById('f_p');
const f_row = document.getElementById('f_row');

const card1 = document.getElementById('teacher_card1');
const card2 = document.getElementById('teacher_card2');
const card3 = document.getElementById('teacher_card3');
const card_btn1 = document.getElementById('card_btn1');
const card_btn2 = document.getElementById('card_btn2');
const card_btn3 = document.getElementById('card_btn3');

form_btn.onclick = () => {
    form_btn.setAttribute('class', 'secForm__row_form_btn none');
    l_inp.setAttribute('class', 'long none');
    r_inps.setAttribute('class', 'secForm__row_form_inp_row none');
    r_inp1.setAttribute('class', 'secForm__row_form_inp none');
    r_inp2.setAttribute('class', 'secForm__row_form_inp none');
    f_h1.setAttribute('class', 'secForm__row_form_h');
    f_p.setAttribute('class', 'secForm__row_form_p');
    f_row.setAttribute('class', 'secForm__row_form row_form')
}

card_btn1.onclick = () => {
    card1.setAttribute('class', 'ourTeachers__row_who');
    card2.setAttribute('class', 'ourTeachers__row_who none');
    card3.setAttribute('class', 'ourTeachers__row_who none');
}

card_btn2.onclick = () => {
    card1.setAttribute('class', 'ourTeachers__row_who none');
    card2.setAttribute('class', 'ourTeachers__row_who ');
    card3.setAttribute('class', 'ourTeachers__row_who none');
}

card_btn3.onclick = () => {
    card1.setAttribute('class', 'ourTeachers__row_who none');
    card2.setAttribute('class', 'ourTeachers__row_who none');
    card3.setAttribute('class', 'ourTeachers__row_who ');
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: "auto",
    freeMode: true,
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });


  let lastScrollTop = 0;
  const popup = document.getElementById("popup");
  const over = document.getElementById("over");
  const btn = document.getElementById("toggleBtn");
  const closeBtn = document.getElementById("closeBtn");

  let bottomOffset = -50; // Начальная позиция (наполовину скрыт)
  let isVisible = false;  // Флаг для отслеживания состояния

  // Показать / скрыть блок при нажатии на кнопку
  btn.addEventListener("click", () => {
      if (!isVisible) {
          // popup.classList.add("half-show");
          // isVisible = true;
          bottomOffset = -1200;
          popup.style.bottom = bottomOffset + "px";
          document.body.style.overflow = "hidden";
          document.getElementById('over').style.overflow = "auto";
          over.classList.add("over2")
      }
  });

  closeBtn.onclick = () => {
      over.classList.remove('over2')
      document.body.style.overflowY = "auto";
      over.classList.remove('over2')
  }

  // over.onclick = () => {
  //     over.classList.remove('over2')
  //     document.body.style.overflowY = "auto";
  // }

  // Обработчик скролла
  window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (isVisible) {
          if (scrollTop < lastScrollTop) {
              // Скролл вверх – поднимаем блок постепенно, но не выше 50px
              bottomOffset += 5;
              if (bottomOffset > 30) bottomOffset = 10;
              popup.style.bottom = bottomOffset + "px";
          } else {
              // Скролл вниз – опускаем обратно, но не ниже -50px
              bottomOffset -= 5;
              if (bottomOffset < -1200) bottomOffset = -1200;
              popup.style.bottom = bottomOffset + "px";
          }
      }

      lastScrollTop = scrollTop;
  });



  function removeClasses() {
    if (window.innerWidth <= 399) {
      document.querySelectorAll('.swiper, .swiper-wrapper').forEach(el => {
        el.classList.remove('класс1', 'класс2'); // Удаляем классы
      });
    }
  }

  // Вызываем функцию при загрузке страницы
  window.addEventListener('load', removeClasses);
  
  // Вызываем функцию при изменении размера окна
  window.addEventListener('resize', removeClasses);