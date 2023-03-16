const  titles = document.querySelectorAll('.section-title');
const  neons = document.querySelectorAll('.neon');
const  slideIns = document.querySelectorAll('.slide-in-bottom');

const cb_sv = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // console.log('slidebox and voice inview');
      entry.target.classList.add('inview');
      observer.unobserve(entry.target);
    } else {
      // console.log('slidebox and voice out view');
      entry.target.classList.remove('inview');
    }
  });
}

const options = {
  rootMargin: "-200px 0px",
}
const io_sv = new IntersectionObserver(cb_sv, options);
titles.forEach(title =>io_sv.observe(title));
neons.forEach(neon =>io_sv.observe(neon));
slideIns.forEach(slideIn =>io_sv.observe(slideIn));
