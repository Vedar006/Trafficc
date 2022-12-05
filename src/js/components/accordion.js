export function accordion() {
  const accordionItems = document.querySelectorAll('.footer__accordion-item');

  accordionItems.forEach((i) => {

    i.addEventListener('click', () => {

      if (i.classList.contains('active')) {
        i.classList.remove('active');
      } else {
        i.classList.add('active');
      }
    });

  });
}
