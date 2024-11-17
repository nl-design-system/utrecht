const navigate = (offset) => {
  const slides = document.querySelector('.image-slides');

  if (!slides) {
    return;
  }
  const slideList = Array.from(slides.childNodes).filter(
    (el) => el.nodeType === 1 && el.classList.contains('image-slides__slide'),
  );

  const index = slideList.findIndex((el) => el.nodeType === 1 && el.classList.contains('image-slides__slide--visible'));
  console.log(slideList);
  if (index !== -1) {
    const currentSlide = slideList[index];
    let targetOffset = index + offset;

    targetOffset = targetOffset < 0 ? slideList.length - 1 : targetOffset >= slideList.length ? 0 : targetOffset;

    const targetSlide = slideList[targetOffset];

    if (targetSlide) {
      currentSlide.classList.remove('image-slides__slide--visible');

      if (targetSlide) {
        targetSlide.classList.add('image-slides__slide--visible');
      }
    }
  }
};
const next = () => {
  navigate(1);
};

const prev = () => {
  navigate(-1);
};

window.next = next;
window.prev = prev;
