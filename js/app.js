window.addEventListener('scroll', e => {
   document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
   wrapper: '.wrapper',
   content: '.content'
})

document.addEventListener('DOMContentLoaded', function () {
   // Получаем элемент с классом "main-article__paragraph"
   const paragraph = document.querySelector('.main-article__paragraph');

   // Создаем анимацию для появления текста
   gsap.from(paragraph, {
      opacity: 0, // Начальная непрозрачность
      y: 20, // Начальное смещение по вертикали
      duration: 10, // Продолжительность анимации
      delay: 0  // Задержка перед началом анимации
   });
});
