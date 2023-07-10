const btnUp = {
  el: null,
  scrolling: false,
  show() {
    if (
      this.el.classList.contains('btn-up_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (
      !this.el.classList.contains('btn-up_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  handleScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (this.scrolling && scrollY > 0) {
      return;
    }
    this.scrolling = false;
    if (scrollY > 400) {
      this.show();
    } else {
      this.hide();
    }
  },
  addEventListener() {
    this.el = document.querySelector('.btn-up');
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.el.addEventListener('click', () => {
      this.scrolling = true;
      this.hide();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  },
};

document.addEventListener('DOMContentLoaded', () => {
  btnUp.addEventListener();
});
