<template>
  <div class="box box-slider">
  <div class="slider-wrap">
    <div class="slider-btn">
      <a href="javascript:void(0);" class="slider-prev"><span class="icon icon-angle-left"></span></a>
      <a href="javascript:void(0);" class="slider-next"><span class="icon icon-angle-right"></span></a>
    </div>
    <div class="slider-counter"></div>
    <div class="slider">
      <div class="slider-item" v-for="(item, index) in items" :key="index">
        <div class="img-wrap img-wrap-16by9" :style="{backgroundImage:'url(' + item.src + ')'}"></div>
        <h4 class="slider-title">{{item.title}}</h4>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'

export default {
  name: 'imgSlider',
  data: function () {
    return {
      items: [
        {
          title: '2017音乐节',
          src: './img.png'
        }
      ]
    }
  },
  methods: {
    initSlick: function () {
      var slider = $('.slider')
      var counter = $('.slider-counter')[0]
      var sl = $('.slider').slick({
        fade: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true
      })
      var len = slider.find('.slick-slide').length
      if (len > 1) {
        counter.style.display = 'block'
        counter.innerText = 1 + ' /' + len
      }
      $(sl).on('afterChange', function (slick, currentSlide) {
        counter.innerText = currentSlide.currentSlide + 1 + ' /' + currentSlide.slideCount
      })
    }
  },
  created: function () {
    this.initSlick()
  }
}
</script>
<style>

</style>
