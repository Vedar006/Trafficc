export function promotion(trigger, item) {
  // const promBtn = document.querySelector('.promotion__block-btn');
  // const promBottom = document.querySelector('.promotion__block-bottom');
  if (trigger && item) {
    trigger.addEventListener('click', () => {
      item.classList.toggle('active');
      trigger.classList.toggle('active');
    });
  }
}
