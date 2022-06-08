import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Codeforces from "@/views/codeforces/Codeforces";
import CodeChef from "@/views/codechef/CodeChef";
import AtCoder from "@/views/atcoder/AtCoder";
import CodeforcesProfile from "@/components/codeforces/CodeforcesProfile";
import CodeforcesCompareProfile from "@/components/codeforces/CodeforcesCompareProfile";
import CodeforcesCountryStanding from "@/components/codeforces/CodeforcesCountryStanding";
import CodeforcesOrganizationStanding from "@/components/codeforces/CodeforcesOrganizationStanding";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/codeforces',
    name: 'codeforces',
    component: Codeforces
  },
  {
    path: '/codeforces/profile',
    name: 'codeforces-profile',
    component: CodeforcesProfile
  },
  {
    path: '/codeforces/compare-profile',
    name: 'codeforces-compare-profile',
    component: CodeforcesCompareProfile
  },
  {
    path: '/codeforces/country-standing',
    name: 'codeforces-country-standing',
    component: CodeforcesCountryStanding
  },
  {
    path: '/codeforces/organization-standing',
    name: 'codeforces-organization-standing',
    component: CodeforcesOrganizationStanding
  },
  {
    path: '/codechef',
    name: 'codechef',
    component: CodeChef
  },
  {
    path: '/atcoder',
    name: 'atcoder',
    component: AtCoder
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
