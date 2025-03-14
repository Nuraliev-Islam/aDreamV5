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