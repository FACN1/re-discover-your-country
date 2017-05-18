var initialDelay = 1.5;
TweenLite.from('.HomeBackGround', 1, {
  css: {
    'filter': 'blur(15px)','-webkit-filter': 'blur(15px)'
  },
  ease:Power2.easeInOut,
  delay: initialDelay
})
TweenLite.from('#logo', 0.7, {bottom: -150, ease:Power2.easeInOut, delay: initialDelay})
TweenLite.from('#homepage-text', 0.7, {opacity: 0, ease:Power2.easeInOut, delay: initialDelay + 0.5})
TweenLite.from('#buttons-container', 0.7, {bottom: -300, ease:Power2.easeInOut, delay: initialDelay + 0.5})
