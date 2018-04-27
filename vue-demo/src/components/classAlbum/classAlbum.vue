<template>
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">班级相册</h3>
    </div>
    <div class="box-body">
      <div class="space-content">
        <div class="tab-content">
          <div class="tab-pane active">
            <div class="album-wrapper">
              <div class="album-list-wrapper"></div>
              <div class="album-nav-wrapper">
                <ul class="album-nav"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '../../common/js/utils'
import IScroll from 'iscroll'
import blueimp from 'blueimp-gallery'
var STEP = 15 /* 每次加载15张图片 */
var counter = [] /* 各个相册已加载图片数量 */
var current = {} /* 当前显示相册对象 */
export default {
  name: 'album',
  data: function () {
    return {
      items: [
        {
          id: 'album01',
          name: '校音乐节校音乐节校音乐节',
          num: 32,
          photos: [
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/honor-cup.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            }
          ]
        },
        {
          id: 'album02',
          name: '2017年全校运动会',
          num: 32,
          photos: [
            {
              title: '校音艺术节合唱比赛',
              src: 'images/honor-medal.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/honor-medal.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/honor-medal.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            }
          ]
        },
        {
          id: 'album03',
          name: '马拉松合集',
          num: 32,
          photos: [
            {
              title: '校音艺术节合唱比赛',
              src: 'images/honor-cup.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            },
            {
              title: '校音艺术节合唱比赛',
              src: 'images/img.png'
            }
          ]
        },
        {
          id: 'album04',
          name: '马拉松合集',
          num: 32,
          photos: [
            {
              title: '校音艺术节合唱比赛04',
              src: 'images/honor-cup.png'
            }
          ]
        },
        {
          id: 'album05',
          name: '马拉松合集',
          num: 32,
          photos: [
            {
              title: '校音艺术节合唱比赛05',
              src: 'images/honor-cup.png'
            }
          ]
        },
        {
          id: 'album06',
          name: '马拉松合集',
          num: 32,
          photos: [
            {
              title: '校音艺术节合唱比赛06',
              src: 'images/honor-cup.png'
            }
          ]
        },
        {
          id: 'album07',
          name: '马拉松合集',
          num: 32,
          photos: [
            {
              title: '校音艺术节合唱比赛07',
              src: 'images/honor-cup.png'
            }
          ]
        },
        {
          id: 'album08',
          name: '马拉松合集',
          num: 32,
          photos: [
            {
              title: '校音艺术节合唱比赛08',
              src: 'images/honor-cup.png'
            }
          ]
        }
      ]
    }
  },
  mounted: function () {
    this.scrollContainer()
    this.initLoading()
  },
  methods: {
    scrollContainer: function () {
      var containers = this.$el.lastElementChild
      utils.calcScroll(containers, 0)
    },
    // 加载图片
    loadingPhotos: function (option) {
      var photos = document.createDocumentFragment()
      for (var i = option.start; i < option.end; i++) {
        var photoItem = document.createElement('div')
        photoItem.innerHTML = '<li><a href="' + option.photos[i].src + '"><div class="img-wrap img-wrap-16by9"><img src="' + option.photos[i].src + '" alt=""></div><h4>' + option.photos[i].title + '</h4></a></li>'
        photos.appendChild(photoItem.childNodes[0])
      }
      document.getElementById('#' + option.id).getElementsByTagName('ul')[0].appendChild(photos)
      this.browseAlbum(option.id)
    },
    // 设置当前相册滚动高度
    setHeight: function (album) {
      var a = document.getElementById('#' + album)
      a.style.height = window.innerHeight - a.getBoundingClientRect().top - 220 + 'px'
    },
    // 相册导航横向滚动
    scrollAlbumNav: function () {
      var nav = document.querySelector('.album-nav')
      var navWidth = 0
      nav.childNodes.forEach(function (el) {
        navWidth = navWidth + parseFloat(el.clientWidth)
      })
      nav.style.width = navWidth + 'px'
      var myScroll = new IScroll('.album-nav-wrapper', { scrollX: true, scrollY: false, mouseWheel: true })
      console.log(myScroll)
    },
    // 初始化加载
    initLoading: function () {
      console.log(this.items[0].id)
      var container = document.querySelector('.album-list-wrapper')
      var nav = document.querySelector('.album-nav')
      var navs = document.createDocumentFragment()
      var albums = document.createDocumentFragment()
      for (var i = 0; i < this.items.length; i++) {
        var navItem = document.createElement('div')
        var album = document.createElement('div')
        navItem.innerHTML = '<li class="' + (i === 0 ? 'active' : '') + '"><a href="#' + this.items[i].id + '">' + this.items[i].name + '<span>（' + this.items[i].num + '）</span></a></li>'
        album.innerHTML = '<div id="' + this.items[i].id + '" class="class-photos ' + (i === 0 ? 'active' : '') + '"><ul id="gallery" class="photo-list"></ul></div>'
        navs.appendChild(navItem.childNodes[0])
        albums.appendChild(album.childNodes[0])
      }
      container.appendChild(albums)
      nav.appendChild(navs)
      this.scrollAlbumNav()
      this.setHeight(this.items[0].id)
      current.id = this.items[0].id
      current.photos = this.items[0].photos
      current.start = 0
      current.end = STEP

      if (current.end > current.photos.length) {
        current.end = current.photos.length
      }
      this.loadingPhotos(current)
      // 获取每个相册初始加载图片的数量，非当前相册全部设置为0
      counter[0] = current.end
      counter.length = this.items.length
      counter.fill(0, 1)
      this.browseAlbum(current.id)
      this.scrollLoading(current.id, 0)
    },
    // 获取当前相册的序号
    getCurrentAlbumIndex: function (id) {
      var index
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id === id) {
          index = i
        }
      }
      return index
    },
    // 滚动加载
    scrollLoading: function (album, index) {
      var container = document.getElementById('#' + album)
      container.removeEventListener('scroll')
      container.addEventListener('scroll', function () {
        if (container.scrollTop > container.clientHeight - container.getElementsByTagName('ul')[0].clientHeight) {
          if (counter[index] === current.photos.length) return
          current.end = current.end + STEP
          if (current.end > current.photos.length) {
            current.end = current.photos.length
          }
          counter[index] = current.end
          this.loadingPhotos(current)
        }
      }, false)
    },
    // 浏览相册
    browseAlbum: function (album) {
      var photos = document.getElementById('#' + album).getElementById('#gallery').childNodes
      photos.addEventListener('click', function (event) {
        event = event || window.event
        var link = photos.index(this)
        var options = {
          index: link,
          event: event
        }
        var links = this.parentNode.childNodes
        blueimp.Gallery(links, options)
      }, false)
    },
    // 相册导航
    switchNav: function (e) {
      var nav = document.querySelector('.album-nav')
      var that = this
      nav.childNodes.addEventListener('click', function (e) {
        e.preventDefault()
        var id = this.href.split('#')[1]
        var index
        // $(this).parent().addClass('active').siblings().removeClass('active')
        // $('#'+id).addClass('active').siblings().removeClass('active')
        that.setHeight(id)
        index = that.getCurrentAlbumIndex(id)
        // 每次切换滚动到顶部
        document.getElementById('#' + id).scrollTop = 0
        // 获取当前相册的信息
        current.id = that.items[index].id
        current.photos = that.items[index].photos
        current.start = counter[index]
        current.end = counter[index] + STEP
        // 判断是否加载到最后一张
        if (current.end > current.photos.length) {
          current.end = current.photos.length
        }
        counter[index] = current.end
        // 如果当前相册没有图片时，切换到当前相册时就开始加载图片
        if (current.start === 0) {
          that.loadingPhotos(current)
        }
        that.browseAlbum(current.id)
        that.scrollLoading(current.id, index)
      }, false)
    }
  }
}
</script>
<style>

</style>
