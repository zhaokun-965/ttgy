import {
    Home,
    Sort,
    ShoppingCart,
    Mine,
    Login
} from "@pages"

export const layoutRoutes = [
    {
        key: "/home",
        path: "/home",
        name: "首页",
        icon: "\ue60b",
        component: Home,
        exact: true,
        meta: {
            requireAuth: false,
            flag: true
        }
    },
    {
        key: "/sort",
        path: "/sort",
        name: "分类",
        icon: "\ue67b",
        component: Sort,
        exact: true,
        meta: {
            requireAuth: false,
            flag: true
        }
    },
    {
        key: "/shoppingCart",
        path: "/shoppingCart",
        name: "购物车",
        icon: "\ue602",
        component: ShoppingCart,
        exact: true,
        meta: {
            requireAuth: true,
            flag: true
        }
    },
    {
        key: "/mine",
        path: "/mine",
        name: "我的",
        icon: "\ue60d",
        component: Mine,
        exact: true,
        meta: {
            requireAuth: true,
            flag: true
        }
    },

]

export const noLayoutRoutes = [
    {
        key: "/login",
        path: "/login",
        name: "登陆",
        icon: "",
        component: Login,
        exact: true,
        meta: {
            requireAuth: false
        }
    }
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes);