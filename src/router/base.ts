import { ErrorPage, RedirectName, Layout } from "./constant";


// 404
export const ErrorPageRoute = {
    /**
     * 常规参数只匹配url片段之间的字符，用/分隔，如果我们想匹配任意路径，
     * 我们可以使用自定义的路径参数 正则表达式，在路径参数后面的括号加入正则表达式
     * 将匹配所有内容并将其放在`$route.params.path` 下
     *  */  
    path: '/:path(.*)*', // 匹配在路由中没有定义的路由，把/后的数据加到params.path下
    name: 'ErrorPage',
    component: Layout,
    meta: {
        title: "ErrorPage",
        hideBreadcrumb: true,
    },
    children: [
        {
            path: "/:path(.*)*",
            name: "ErrorPageSon",
            component: ErrorPage,
            meta: {
                title: "ErrorPage",
                hideBreadcrumb: true,
            }
        }
    ]
}


export const RedirectRoute = {
    
}