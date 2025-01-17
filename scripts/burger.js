function burgerMenu() {
  const menu = document.querySelector('.menu-links');
  // თავიდან ვიღებთ მენიუს ამჟამინდელ სტილს
  if (!menu.style.display || menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}

// საიტის ჩატვირთვისას მენიუს გამოჩენა
window.onload = () => {
  const menu = document.querySelector('.menu-links');
  menu.style.display = 'block'; // თავიდან მენიუ ჩანდეს
};
