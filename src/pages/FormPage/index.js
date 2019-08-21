import React, {Fragment} from 'react';
import {Form, Input, Icon, Button} from 'antd'
let id = 1;

function Multiple (props) {
    const {
        names=[],
        namesLast=[],
        leg=[0],
        form,
        form: {
            setFieldsValue,
            getFieldValue,
            getFieldDecorator,
            validateFields
        }
    } = props;

    const add = () => {
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        setFieldsValue({
          keys: nextKeys,
        });
      };

    const remove = (k) => {
        const kyes = getFieldValue('keys');
        if (keys.length === 1) {
            return;
        }
        form.setFieldsValue({
            keys: keys.filter(key => key !== k)
        })
    } 

    const formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 24, offset: 4 },
        },
    };
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
          },
    };
    getFieldDecorator('keys', { initialValue: leg });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
        <Fragment key={k}>
            <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
            required={false}
            key={k}
            >
            {getFieldDecorator(`names[${k}]`, {
                validateTrigger: ['onChange', 'onBlur'],
                initialValue: names[k] || "",
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
                key={`${k}-last`}
            >
                {getFieldDecorator(`namesLast[${k}]`, {
                validateTrigger: ['onChange', 'onBlur'],
                initialValue: namesLast[k] || "",
                rules: [
                    {
                        required: true,
                        whitespace: true,
                        message: "Please input",
                    },
                ],
                })(<Input placeholder="passenger name" style={{ width: 'calc(100% - 14px)'}} />)}
                {keys.length > 1 ? (
                <Icon
                    className="dynamic-delete-button"
                    type="minus-circle-o"
                    onClick={() => remove(k)}
                />
                ) : null}
            </Form.Item>    
        </Fragment>
        
    ));
    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log(values);
                const { keys, names, namesLast } = values;
                const arr = []
                keys.forEach((v, i) => {
                    const obj = {}
                    obj.name = names[i]
                    obj.age = namesLast[i]
                    arr.push(obj)
                });
                console.log("handleData", arr);
                // console.log('Merged values:', keys.map(key => names[key]));
            }
        });
    }
    return (
        <Form onSubmit={handleSubmit} {...formItemLayout} style={{width: '700px'}}>
            {formItems}
            <Form.Item>
                <Button type="dashed" style={{ width: '60%' }} onClick={add}>
                    <Icon type="plus" /> Add field
                </Button>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Form.create()(Multiple)
;