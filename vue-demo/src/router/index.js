import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import signIn from '@/components/signIn/signIn'
import classSpace from '@/components/classSpace/classSpace'
import stuList from '@/components/stuList/stuList'
import classAlbum from '@/components/classAlbum/classAlbum'
import honor from '@/components/honor/honor'
import classIntroduction from '@/components/classIntroduction/classIntroduction'
import stuSpace from '@/components/stuSpace/stuSpace'
import stuCourseTable from '@/components/stuCourseTable/stuCourseTable'
import note from '@/components/note/note'
import leavePaper from '@/components/leavePaper/leavePaper'
import health from '@/components/health/health'
import stuHonor from '@/components/stuHonor/stuHonor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/classSpace',
      name: 'classSpace',
      component: classSpace,
      children: [
        {
          path: 'stuList',
          component: stuList
        },
        {
          path: 'classAlbum',
          component: classAlbum
        },
        {
          path: 'honor',
          component: honor
        },
        {
          path: 'classIntroduction',
          component: classIntroduction
        }
      ]
    },
    {
      path: '/stuSpace',
      name: 'stuSpace',
      component: stuSpace,
      children: [
        {
          path: 'stuCourseTable',
          component: stuCourseTable
        },
        {
          path: 'note',
          component: note
        },
        {
          path: 'leavePaper',
          component: leavePaper
        },
        {
          path: 'health',
          component: health
        },
        {
          path: 'stuHonor',
          component: stuHonor
        }
      ]
    }
  ]
})
