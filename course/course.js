let lastScrollTop = 0;
        const popup = document.getElementById("popup");
        const over = document.getElementById("over");
        const btn = document.getElementById("toggleBtn");
        const btn2 = document.getElementById("toggleBtn2");
        const btn3 = document.getElementById("toggleBtn3");
        const btn4 = document.getElementById("toggleBtn4");
        const btn5 = document.getElementById("toggleBtn5");
        const closeBtn = document.getElementById("closeBtn");

        const ARAB = document.querySelector(".arab");
        const ENG = document.querySelector(".en");
        const ORT = document.querySelector(".ort");
        const IT = document.querySelector(".it");

        const itBtn = document.getElementById("it_btn");
        const enBtn = document.getElementById("en_btn");
        const arBtn = document.getElementById("ar_btn");
        const orBtn = document.getElementById("or_btn");

        enBtn.onclick = () => {
            IT.classList.add('none');
            ARAB.classList.add('none');
            ORT.classList.add('none');
            ENG.classList.remove('none');
        }

        arBtn.onclick = () => {
            IT.classList.add('none');
            ARAB.classList.remove('none');
            ORT.classList.add('none');
            ENG.classList.add('none');
        }

        itBtn.onclick = () => {
            IT.classList.remove('none');
            ARAB.classList.add('none');
            ORT.classList.add('none');
            ENG.classList.add('none');
        }

        orBtn.onclick = () => {
            IT.classList.add('none');
            ARAB.classList.add('none');
            ORT.classList.remove('none');
            ENG.classList.add('none');
        }

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

        btn2.addEventListener("click", () => {
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

        btn3.addEventListener("click", () => {
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

        btn4.addEventListener("click", () => {
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

        btn5.addEventListener("click", () => {
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