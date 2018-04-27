<template>
  <div class="grid">
    <div class="grid-cell space-side">
      <course-preview></course-preview>
    </div>
    <div class="grid-cell space-main">
      <div class="box">
        <div class="box-body signinStuList">
          <stu-list></stu-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import coursePreview from '../coursePreview/coursePreview'
import stuList from '../stuList/stuList'
import utils from '../../common/js/utils'
export default {
  name: 'signIn',
  components: {
    coursePreview,
    stuList
  },
  methods: {
    scrollContainer: function () {
      console.log(this)
      var containers = document.querySelector('.signinStuList')
      utils.calcScroll(containers, 160)
    }
  },
  mounted: function () {
    this.scrollContainer()
  }
}
</script>
<style>

</style>
