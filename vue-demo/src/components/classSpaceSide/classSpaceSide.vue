<template>
  <div class="box">
    <div class="box-body scroll-container">
      <div class="role">
        <span class="role-img"><img src="./male.png" alt=""></span>
        <span class="label label-fill label-fill-bluePurple">班主任</span>
        <h4 class="role-name">小李子</h4>
      </div>
      <ul class="side-nav">
        <li><router-link to="/classSpace/stuList">班内学生</router-link></li>
        <li><router-link to="/classSpace/classAlbum">班级相册</router-link></li>
        <li><router-link to="/classSpace/honor">荣誉</router-link></li>
        <li><router-link to="/classSpace/classIntroduction">班级简介</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
import utils from '../../common/js/utils'
export default {
  name: 'classSpaceSide',
  methods: {
    scrollContainer: function () {
      var containers = this.$el.lastElementChild
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
