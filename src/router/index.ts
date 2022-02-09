// createWebHashHistory 创建一个 HTML5 历史，即单页面应用程序中最常见的历史记录
// RouteRecordRaw 当用户通过 routes option 或者 router.addRoute() 来添加路由时，可以得到路由记录
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { PageEnum } from "../enums/pageEnum";

/**
 * import.meta.glob 动态导入 构建时会分离为独立的chunk
 * import.meta.globEager 直接引入
 * 引入所有的modules里面的路由
 */
const modules = import.meta.globEager('./modules/**/*.ts')
const routeModuleList: RouteRecordRaw[] = []
Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    routeModuleList.push(...modList)
})

export const RootRoute: RouteRecordRaw = {
    path: "/",
    name: "Root",
    redirect:PageEnum.BASE_HOME,
    meta: {
        title: "Root"
    }
}

export const LoginRoute: RouteRecordRaw = {
    path: "/login",
    name: 'Login',
    component: () => import('@/views/login/indx.vue'),
    meta: {
        title: '登录'
    }
}

// 需要验证的权限
export const asyncRoutes = [...routeModuleList]

// 普通路由 无需验证权限
export const constantRouter:any[] = [LoginRoute, RootRoute]

const router = createRouter({
    history: createWebHashHistory(''),
    routes: constantRouter,

})


export default router