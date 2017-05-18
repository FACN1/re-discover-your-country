var initialDelay = 1;
TweenLite.from('.HomeBackGround', 1, {
  css: {
    'filter': 'blur(15px)','-webkit-filter': 'blur(15px)'
  },
  ease:Power2.easeInOut,
  delay: initialDelay
})
TweenLite.from('#logo', 0.7, {top: '50%', ease:Power2.easeInOut, delay: initialDelay})
TweenLite.from('#homepage-text', 0.7, {opacity: 0, ease:Power2.easeInOut, delay: initialDelay + 0.5})
TweenLite.from('#buttons-container', 0.7, {top: '120%', ease:Power2.easeInOut, delay: initialDelay + 0.5})
