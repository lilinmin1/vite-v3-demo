// 枚举 类型用于取值被限定在一定范围内的场景
export enum PageEnum {
    // 登录
    BASE_LOGIN = '/login',
    BASE_LOGIN_NAME = 'Login',

    // 重定向
    REDIRECT = '/redirect',
    REDIRECT_NAME = 'Redirect',

    // 首页
    BASE_HOME = '/dashboard',
    // 首页跳转默认路由
    BASE_HOME_REDIRECT = '/dashboard/console',
    // 错误
    ERROR_PAGE_NAME = 'ErrorPage',
}