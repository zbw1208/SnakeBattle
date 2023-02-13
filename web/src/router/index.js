import { createRouter, createWebHistory } from 'vue-router'
import SnakeBattle from "../views/game/SnakeBattle"
import RecordIndexView from "../views/record/RecordIndexView"
import RecordContentView from "../views/record/RecordContentView"
import RankIndex from "../views/rank/RankIndex"
import NotFound from "../views/error/NotFound"
import UserAccountLoginView from "../views/user/account/UserAccountLoginView"
import UserAccountRegisterView from "../views/user/account/UserAccountRegisterView"
import store from "../store/index"


const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/snakebattle/",
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/snakebattle/",
    name: "snakebattle_index",
    component: SnakeBattle,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/record/:recordId/",
    name: "record_content",
    component: RecordContentView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/rank/",
    name: "rank_index",
    component: RankIndex,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/404/",
    name: "notfound_index",
    component: NotFound,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: "/user/account/login/",
    name: "user_account_login",
    component: UserAccountLoginView,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: "/user/account/register/",
    name: "user_account_register",
    component: UserAccountRegisterView,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/",
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requestAuth && !store.state.user.is_login) {
    next({name: "user_account_login"});
  } else {
    next();
  }
})


export default router
