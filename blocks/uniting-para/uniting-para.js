
export default function decorate(block) {
  const innerDiv = block.querySelector('div > div');
  const h2 = block.querySelector('h2');

  // Add classes to the elements
  block.classList.add('uniting-para');
  innerDiv.classList.add('uniting-para-inner');
  h2.classList.add('uniting-para-heading');
}
