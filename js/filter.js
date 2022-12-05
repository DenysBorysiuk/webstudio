const refs = {
  gallery: document.querySelectorAll('.card-set__item'),
  filter: document.querySelector('.portfolio__filter'),
  button: document.querySelector('.filter__btn'),
};

refs.filter.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  let filterClass = e.target.dataset['filter'];

  refs.gallery.forEach(elem => {
    elem.classList.remove('visually-hidden');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('visually-hidden');
      refs.button.classList.remove('filter__btn--current');
    }
  });
}
