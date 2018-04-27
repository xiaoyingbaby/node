<template>
  <div class="index">
    <header class="header">
      <div class="logo"><span>高一（1）班</span></div>
      <div class="date">
        <span class="time"></span>
        <div class="right">
          <span class="day"></span>
          <span class="week"></span>
        </div>
      </div>
      <div class="notice">
        <span class="icon icon-voice"></span>
        <div class="notice-list-wrapper">
          <ul class="notice-list wordsLoop">
            <li>1、显示通知公告，不需要展示标题，只展示内容，进行横向滚动展示。</li>
            <li>2、显示通知公告，不需要展示标题，只展示内容，进行横向滚动展示。</li>
            <li>3、显示通知公告，不需要展示标题，只展示内容，进行横向滚动展示。</li>
          </ul>
        </div>
      </div>
    </header>
    <div class="main-container"><router-view></router-view></div>
    <footer class="footer">
      <ul class="menu-list">
        <li>
          <router-link to="/">
            <span class="icon icon-home"></span>
            <h5 class="menu-name">首页</h5>
          </router-link>
        </li>
        <li>
          <router-link to="/signIn">
            <span class="icon icon-sign"></span>
            <h5 class="menu-name">上课签到</h5>
          </router-link>
        </li>
        <li>
          <router-link to="/classSpace/stuList">
            <span class="icon icon-classSpace"></span>
            <h5 class="menu-name">班级空间</h5>
          </router-link>
        </li>
        <li>
          <router-link to="/stuSpace/stuCourseTable">
            <span class="icon icon-stuSpace"></span>
            <h5 class="menu-name">学生空间</h5>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .index{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
