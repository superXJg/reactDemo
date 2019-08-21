import React, { useState } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";

import TodoList from "./components/todolist";
import Todoredux from "./components/todoredux/App";
import Tool from "./components/tooltip";
import Home from "./pages/Home";
import Page from "./pages/NextForm";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
const { SubMenu } = Menu;
function App(props) {
    console.log("props", props);
    const [current, setCurrent] = useState("");
    const handleClick = e => {
        console.log("click ", e);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            {/* <Router>
                <div className="nav">
                    <Link to="/">home</Link>
                    <Link to="/todolist">todolis</Link>
                    <Link to="/redux">todolis + redux</Link>
                    <Link to="/async">async</Link>
                    <Link to="/tooltip">Tool</Link>
                </div>
                <Route exact path="/" component={Home} />
                <Route path="/todolist" component={TodoList} />
                <Route path="/redux" component={Todoredux} />
                <Route path="/tooltip" component={Tool} />
            </Router> */}
            <Menu theme="dark" mode="horizontal" onClick={handleClick}>
                <Menu.Item key="home">
                    <Icon type="mail" />
                    <Link style={{ display: "inline-block" }} to="/">
                        home
                    </Link>
                </Menu.Item>
                <Menu.Item key="todolist">
                    <Icon type="desktop" />
                    <Link style={{ display: "inline-block" }} to="/todolist">
                        todolis
                    </Link>
                </Menu.Item>
                <Menu.Item key="redux">
                    <Icon type="inbox" />
                    <Link style={{ display: "inline-block" }} to="/redux">
                        redux
                    </Link>
                </Menu.Item>
                <Menu.Item key="tooltip">
                    <Icon type="setting" />
                    <Link style={{ display: "inline-block" }} to="/tooltip">
                        tooltip
                    </Link>
                </Menu.Item>
                <Menu.Item key="form">
                    <Icon type="setting" />
                    <Link style={{ display: "inline-block" }} to="/form">
                        form
                    </Link>
                </Menu.Item>
            </Menu>

            <Route exact path="/" component={Home} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/redux" component={Todoredux} />
            <Route path="/tooltip" component={Tool} />
            <Route path="/form" component={Page} />
        </div>
    );
}

export default withRouter(App);
