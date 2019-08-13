import React, { Component } from 'react';
import './inde.css';

function TodoItem(props) {
    return (
        <li className="item">
            <span className={`${props.item.checked ? 'done': ''}`}>
                <input style={{marginRight: '20px'}} type="checkbox" onChange={() => props.handlerCheck(props.item.title)} checked={props.item.checked}/>{props.item.title}</span>
            <span onClick={() => props.handleDelete(props.item.title)}>x</span>
        </li>
    )
}

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: [
                {
                    title: '睡觉'
                },
                {
                    title: '吃饭'
                },
                {
                    title: '打豆豆'
                }
            ]
        }
    }
    handlerChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleDelete = (text) => {
        const arr = this.state.list;
        const titles = arr.map(i => i.title);
        const index = titles.indexOf(text);
        if (index > -1) arr.splice(index,1);
        this.setState({
            list: arr
        })
    }
    handlerClick = (e) => {
        const arr = this.state.list;
        const titles = arr.map(i => i.title);
        if(titles.includes(this.state.value)) return;
        arr.push({
            title: this.state.value
        });
        this.setState({
            list: arr
        })
        this.setState({
            value: ''
        })
    }
    handlerCheck = (text) => {
        const arr = this.state.list;
        const titles = arr.map(i => i.title);
        const index = titles.indexOf(text);
        arr.forEach((item, i) => {
            if (i === index) {
                item.checked = !item.checked
            }
        })

        this.setState({
            list: arr
        })
    }

    render() {
        return (
            <div>
                <div style={{
                    marginTop: '20px',
                    width: '100%'
                }}>
                    <h1 className="logo">todolist</h1>
                    <div style={{
                        margin: '0 auto',
                        width: '500px',
                        textAlign: 'center'
                    }}>
                        
                        <div style={{margin: '10px 0'}}>
                            <span>正在进行</span>
                            <span>{this.state.list.filter(item => !item.checked).length}</span>
                        </div>
                        <div className='wrapper'>
                            <input className='ipt' type="text" value={this.state.value} onChange={this.handlerChange}/>
                            <span></span>
                        </div>
                        <button className="btn" onClick={this.handlerClick}>确定</button>
                        <ul>
                            {this.state.list.map(item => 
                            <TodoItem 
                                key={item.title} 
                                item={item} 
                                handlerCheck={this.handlerCheck} 
                                handleDelete={this.handleDelete}>
                            </TodoItem>)}
                        </ul>
                    </div>
                </div>    
            </div>
        );
    }
}

export default TodoList;