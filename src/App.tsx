
import "./App.css";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Router } from "./router";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><NavLink to="/">首页</NavLink></li>
          <li><NavLink to="/about/2023?type=123">关于我们</NavLink></li>
          <li>
            <NavLink to="/account">客户管理</NavLink>
            <div style={{ paddingLeft: "12px" }}>
              <NavLink to="/account/list">客户列表</NavLink><br />
              <NavLink to="/account/form">客户表单</NavLink>
            </div>
          </li>
          <li><NavLink to="/login">登录</NavLink></li>
        </ul>
        <div>
          <Router></Router>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
