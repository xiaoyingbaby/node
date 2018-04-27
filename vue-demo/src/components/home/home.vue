<template>
  <div class="grid">
    <div class="grid-cell grid-3of10"><e-class-card-info></e-class-card-info></div>
    <div class="grid-cell grid-4of10">
      <img-slider></img-slider>
      <post></post>
    </div>
    <div class="grid-cell grid-3of10"><course-preview></course-preview></div>
  </div>
</template>
<script>
import imgSlider from '../imgSlider/imgSlider'
import coursePreview from '../coursePreview/coursePreview'
import eClassCardInfo from '../eClassCardInfo/eClassCardInfo'
import post from '../post/post'

export default {
  name: 'home',
  components: {
    imgSlider,
    coursePreview,
    eClassCardInfo,
    post
  }
}
</script>
<style>

</style>
