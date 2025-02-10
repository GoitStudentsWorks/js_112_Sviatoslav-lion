document.addEventListener("DOMContentLoaded", function () {
    const aboutItems = document.querySelectorAll(".accordion-item");


    aboutItems.forEach((item, index) => {
        const aboutmeHeader = item.querySelector(".accordion-header");
        const aboutmeIcon = item.querySelector(".abme");
        const aboutmeContent = item.querySelector(".accordion-content");
        
        if (index === 0) {
            // Перший елемент залишаємо відкритим
            aboutmeContent.style.display = "block";
            aboutmeIcon.style.transform = "rotate(180deg)";
            aboutmeHeader.classList.add("active");
        } else {
            // Інші приховуємо
            aboutmeContent.style.display = "none";
            aboutmeIcon.style.transform = "rotate(0deg)";
        }

        aboutmeHeader.addEventListener("click", function () {
            //item.classList.toggle("open");                      // відкриваємо прихований вміст елементу
            const isOpen = aboutmeContent.style.display === "block";     // якщо відкрили, тоді присвоємо змінній значення видимості  
            aboutmeContent.style.display = isOpen ? "none" : "block";
            aboutmeHeader.classList.toggle("active", !isOpen);
            aboutmeIcon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
        });
    });
});






















document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 2, // 2 кола на екрані
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
        },
        keyboard: {
            enabled: true,
        },
        mousewheel: true,


        breakpoints: {
            768: { 
                slidesPerView: 3,
            },
            1440: { 
                slidesPerView: 6,
            }
        }
    });
});


