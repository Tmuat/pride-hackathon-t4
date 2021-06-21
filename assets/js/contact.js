/*jshint esversion: 6 */
const Config = {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  focusAt: 0,
  autoplay: 4000,
  hoverpause: true,
  breakpoints: {
    1200: {
      perView: 2
    },
    992: {
      perView: 1
    }
  }
};
new Glide('.glide', Config).mount();