<template>
  <div class="grid">
    <div class="grid-cell space-side">
      <stu-space-side></stu-space-side>
    </div>
    <div class="grid-cell space-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import stuSpaceSide from '../stuSpaceSide/stuSpaceSide'
export default {
  name: 'stuSpace',
  components: {
    stuSpaceSide
  }
}
</script>
<style>

</style>
