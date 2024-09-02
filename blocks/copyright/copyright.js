
export default function decorate(block) {
  // Ensure the block has the correct class
  block.classList.add('copyright');

  // Select the inner divs
  const innerDivs = block.querySelectorAll('div > div');
  
  // Add classes to the divs for styling
  innerDivs[0].classList.add('left-section');
  innerDivs[1].classList.add('right-section');

  // Add classes to the ul elements
  const ulElements = block.querySelectorAll('ul');
  ulElements[0].classList.add('left-list');
  ulElements[1].classList.add('right-list');

  // Add classes to the a elements
  const links = block.querySelectorAll('a');
  links.forEach((link, index) => {
    if (index < 2) {
      link.classList.add('text-link');
    } else {
      link.classList.add('icon-link');
    }
  });
}
