import Vue from 'vue'
import VueTouch from 'vue-touch'
VueTouch.registerCustomEvent('doubletap', { type: 'tap', taps: 2 })
VueTouch.config.swipe = {
  direction: 'horizontal',
  threshold: 100,
  touchAction: 'pan-y'
}
Vue.use(VueTouch)
