import React, {useState, Fragment} from 'react'
import {Form, Input, Icon, Button, Card} from 'antd'
function Apart(props) {
    const {
        index,
        data,
        handleAdd,
        form,
        remove,
        add
    } = props
    const {getFieldDecorator} = form;
    const { children } = data;
    const formItems = children.map((v, i) => (
        <Fragment key={i}>
            <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
            required={false}
            key={i}
            >
            {getFieldDecorator(`names[${i}]`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [
                {
                    required: true,
                    whitespace: true,
                    message: "Please input",
                },
                ],
            })(<Input placeholder="passenger name" style={{ width: 'calc(100% - 14px)' }} />)}
            </Form.Item>
            <Form.Item
                style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                required={false}
                key={`${i}-last`}
            >
                {getFieldDecorator(`namesLast[${i}]`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [
                    {
                        required: true,
                        whitespace: true,
                        message: "Please input",
                    },
                ],
                })(<Input placeholder="passenger name" style={{ width: 'calc(100% - 14px)'}} />)}
                {children.length > 1 ? (
                <Icon
                    className="dynamic-delete-button"
                    type="minus-circle-o"
                    onClick={() => remove(i, index)}
                />
                ) : null}
            </Form.Item>    
        </Fragment>
    ))
    return (
        <Card title={index === 0 ? "0" : index}>
            <div>
                <Button onClick={handleAdd}>add</Button>
            </div>
            <Form>
                {formItems}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Button type="dashed" style={{ width: '60%' }} onClick={() => add(index)}>
                    <Icon type="plus" /> Add field
                </Button>
            </Form>
        </Card>
    )
}

function Page(props) {
    const { form } = props;
    const [options, setOption] = useState([{children: []}]);
    const handleAdd = () => {
        setOption([...options, ...[{children: []}]])
    }
    const remove = (currentIndex, subIndex) => {
        console.log('subIndex', subIndex);
        console.log('currentIndex', currentIndex);
        console.log(form.getFieldsValue());

        setOption(options.map((item, index) => {
            if (index === subIndex) {
                const temp = item['children'].filter((v, i) => i !== currentIndex)
                return { ...item, children: temp}
            } else {
                return item
            }
        }))
    }
    const add = (i) => {
        console.log("i", i);
        const temp = options.map((item, index) => {
            return i === index ? {...item, children: [...item['children'], {}]} : item
        } 
        )
        setOption(temp);
    }
    return (
        options.map((item, index) => 
            <Apart
                remove={remove}
                add={add}
                form={form}
                data={item}
                index={index}
                handleAdd={handleAdd}
            />
        )
    )
}
export default Form.create()(Page);