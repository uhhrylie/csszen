

for (let link of document.querySelectorAll('.design-name')) {
  link.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      let stylesheet = link.getAttribute('href').replace('#', '');
      document.querySelector('#thestyle').href = stylesheet;
      console.log('Set style to ', stylesheet);
      document.querySelector('#csslink').href = stylesheet;
    }
  )
}
