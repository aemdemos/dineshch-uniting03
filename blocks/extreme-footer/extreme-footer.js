
export default function decorate(block) {
  // Add class to the block
  block.classList.add('extreme-footer');

  // Add classes to child elements
  const innerDiv = block.querySelector('div > div > div');
  const img = innerDiv.querySelector('img');
  const paragraphs = innerDiv.querySelectorAll('p');

  innerDiv.classList.add('extreme-footer__content');
  img.classList.add('extreme-footer__image');
  paragraphs.forEach((paragraph) => {
    paragraph.classList.add('extreme-footer__text');
  });

  // Add class to the container divs
  const containerDivs = block.querySelectorAll('div');
  containerDivs.forEach((container) => {
    container.classList.add('extreme-footer__container');
  });
}
