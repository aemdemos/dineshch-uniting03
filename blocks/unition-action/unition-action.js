
export default function decorate(block) {
  // Add classes to elements for styling
  const header = block.querySelector('h2');
  header.classList.add('unition-header');

  const paragraphs = block.querySelectorAll('p');
  paragraphs.forEach((p, index) => {
    p.classList.add('unition-paragraph');
  });
}
