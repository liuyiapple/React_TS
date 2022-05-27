import React from "react";
import styles from "./App.module.css";
import {HomePage,SignIn,Register} from "./pages"
import { BrowserRouter,Route,Switch } from "react-router-dom"
function App() {
  return (
    <div className={styles.App}>


    {/* 
        完整页面会使用 <BrowserRouter/> + <Route /> + <Switch/>
    */}


      <BrowserRouter>
      {/* 使用switch 这个组件包裹路由组件的时候，当路由组件没有exact时，会优先选择渲染权重最高的路由页面 */}
        <Switch>

          {/* 这里当没有exact 这个 精确匹配的时候，页面就会被全部渲染到一个页面上去 */}
          <Route exact path="/" component={HomePage}/>

          {/* 这里尽管还没有 /signIn 这个对应路径的组件 可以使用render来渲染一个  */}
          {/* <Route path={"/signIn"} render={() => <h1>Login</h1>} /> */}
          
          {/* 登录 */}
          <Route path={"/signIn"} component={ SignIn }/>

          {/* 注册 */}
          <Route path={"/register"} component={Register}/>

          {/*  404 页面 ，不指定路由 */}
          <Route render={() => <h1>404页面 你找的网页我们正在努力开发中</h1>} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
