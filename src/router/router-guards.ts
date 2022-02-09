import type { RouteRecordRaw } from "vue-router";
/**
 * isNavigationFailure 检测导航故障
 * isNavigationFailure(failure)，那么就只会检查这个 failure 是不是一个 Navigation Failure。
 */
import { isNavigationFailure, Router } from "vue-router";

import { ACCESS_TOKEN } from "../store/mutation-types";
import { storage } from "../utils/Storage";
import { PageEnum } from "../enums/pageEnum";
import { ErrorPageRoute } from "./base";

const LOGIN_PATH = PageEnum.BASE_LOGIN
const whitePathList = [LOGIN_PATH]

export function createRouterGuards(router: Router) {


    router.beforeEach(async (to, from, next) => {
        // const Loading = window[]


        if (whitePathList.includes(to.path as PageEnum)) {
            next();
            return;
        }
    })
}



