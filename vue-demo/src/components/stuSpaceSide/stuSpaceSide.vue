<template>
  <div class="box">
    <div class="box-body scroll-container">
      <div class="role">
        <span class="role-img"><img src="./female.png" alt=""></span>
        <h4 class="role-name">小李子</h4>
      </div>
      <ul class="side-nav">
        <li><router-link to="/stuSpace/stuCourseTable">我的课表</router-link></li>
        <li><router-link to="/stuSpace/note">我的小纸条</router-link></li>
        <li><router-link to="/stuSpace/leavePaper">我的请假</router-link></li>
        <li><router-link to="/stuSpace/health">健康数据</router-link></li>
        <li><router-link to="/stuSpace/stuHonor">我的荣誉</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
import utils from '../../common/js/utils'
export default {
  name: 'stuSpaceSide',
  methods: {
    scrollContainer: function () {
      var containers = this.$el.lastElementChild
      utils.calcScroll(containers, 180)
    }
  },
  mounted: function () {
    this.scrollContainer()
  }
}
</script>
<style>

</style>
