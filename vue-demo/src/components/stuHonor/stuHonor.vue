<template>
  <div class="box">
    <div class="box-header">
      <h4 class="box-title">我的荣誉</h4>
    </div>
    <div class="box-body">
      <div class="space-content">
        <div class="tab-content">
          <div id="aa" class="tab-pane active" role="tabpanel">
            <ul class="honor-list honor-list-v">
              <li class="honor-item">
                <div class="honor-photo-frame">
                  <div class="honor-photo-wrap"><img width="272" height="204" src="./img.png" alt=""></div>
                </div>
                <div class="honor-info">
                  <h4 class="honor-winner">小李子</h4>
                  <p class="honor-name">合唱节诗歌会荣获“团体一等奖”，合唱节诗歌会荣获“团体一等奖”</p>
                  <p class="honor-time">获得于2017-5-32</p>
                </div>
              </li>
              <li class="honor-item">
                <div class="honor-photo-frame">
                  <div class="honor-photo-wrap"><img width="272" height="204" src="./img.png" alt=""></div>
                </div>
                <div class="honor-info">
                  <h4 class="honor-winner">小李子</h4>
                  <p class="honor-name">合唱节诗歌会荣获“团体二等奖”，合唱节诗歌会荣获“团体一等奖”</p>
                  <p class="honor-time">获得于2017-5-32</p>
                </div>
              </li>
              <li class="honor-item">
                <div class="honor-photo-frame">
                  <div class="honor-photo-wrap"><img width="272" height="204" src="./img.png" alt=""></div>
                </div>
                <div class="honor-info">
                  <h4 class="honor-winner">小李子</h4>
                  <p class="honor-name">合唱节诗歌会荣获“团体二等奖”，合唱节诗歌会荣获“团体一等奖”</p>
                  <p class="honor-time">获得于2017-5-32</p>
                </div>
              </li>
              <li class="honor-item">
                <div class="honor-photo-frame">
                  <div class="honor-photo-wrap"><img width="272" height="204" src="./img.png" alt=""></div>
                </div>
                <div class="honor-info">
                  <h4 class="honor-winner">小李子</h4>
                  <p class="honor-name">合唱节诗歌会荣获“团体二等奖”，合唱节诗歌会荣获“团体一等奖”</p>
                  <p class="honor-time">获得于2017-5-32</p>
                </div>
              </li>
              <li class="honor-item">
                <div class="honor-photo-frame">
                  <div class="honor-photo-wrap"><img width="272" height="204" src="./img.png" alt=""></div>
                </div>
                <div class="honor-info">
                  <h4 class="honor-winner">小李子</h4>
                  <p class="honor-name">合唱节诗歌会荣获“团体二等奖”，合唱节诗歌会荣获“团体一等奖”</p>
                  <p class="honor-time">获得于2017-5-32</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '../../common/js/utils'
export default {
  name: 'stuHonor',
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
