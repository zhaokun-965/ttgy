import Loadable from "react-loadable"
import Loading from "@common/loading"

const Home = Loadable({
    loader: () => import("./home"),
    loading: Loading
})
const Sort = Loadable({
    loader: () => import("./sort"),
    loading: Loading
})
const ShoppingCart = Loadable({
    loader: () => import("./shoppingCart"),
    loading: Loading
})
const Mine = Loadable({
    loader: () => import("./mine"),
    loading: Loading
})
const Login = Loadable({
    loader: () => import("./login"),
    loading: Loading
})

export {
    Home,
    Sort,
    ShoppingCart,
    Mine,
    Login
}