<template>
  <div class="grid">
    <div class="grid-cell space-side">
      <class-space-side></class-space-side>
    </div>
    <div class="grid-cell space-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import classSpaceSide from '../classSpaceSide/classSpaceSide'
export default {
  name: 'classSpace',
  components: {
    classSpaceSide
  }
}
</script>
<style>

</style>
