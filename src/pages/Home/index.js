import React, { Component } from "react";
import Select from "../../components/select";
import './index.css'

let id = 0;
class Home extends Component {
    state = {
        list: [
            {
                text: "jack",
                id: 1
            },
            {
                text: "LucyLucyLucyLucyLucyLucyLucyLucyLucyv",
                id: 2
            },
            {
                text: "yiminghe",
                id: 3
            },
            {
                text: "Hangzhou",
                id: 4
            }
        ]
    };
    render() {
        return (
            <div>
                <Select key="1" allowClear list={this.state.list} />
                <Select key="2" list={this.state.list} />
                <div className="box">
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                    <div className="item">5</div>
                    <div className="item">6</div>
                </div>
            </div>
        );
    }
}

export default Home;
