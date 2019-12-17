import React from 'react';
import { List } from 'immutable';
import { Button, Col, Form, Input, InputNumber, Row, Select, Table } from 'antd';

import { BaseComponent } from '../../components/HOComponent/shouldComponentUpdate';
import { defaultRequest } from '../../services/requestService';
import { natures } from '../../configs/naturesConfig';

import styles from './Countdown.module.scss';

class Countdown extends BaseComponent {
  columns = [
    {
      title: '帧位',
      dataIndex: 'index',
    },
    {
      title: 'Seed',
      dataIndex: 'seed',
    },
    {
      title: '加密常数',
      dataIndex: 'ec',
    },
    {
      title: 'PID',
      dataIndex: 'pid',
    },
    {
      title: '闪光',
      dataIndex: 'shinyType',
    },
    {
      title: '特性',
      dataIndex: 'ability',
    },
    {
      title: '性别',
      dataIndex: 'gender',
    },
    {
      title: '性格',
      dataIndex: 'nature',
      render: (nature) => natures[nature].name,
    },
    {
      title: '个体',
      dataIndex: 'IVs',
      render: (IVs) => JSON.stringify(IVs),
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      list: List([]),
    };
  }

  getFilterList = (body) => {
    // const defaultBody = {
    //   pid: 0x8F18CFBE,
    //   ec: 0xAEB98D74,
    //   IVs: [16, 31, 31, 31, 31, 6],
    //   usefilters: 1,
    //   maxResults: 5000,
    //   flawlessiv: 4,
    //   ha: 1,
    //   randomGender: 1,
    // };
    defaultRequest.post('http://localhost:3000/api/filter-list', body).then(res => {
      const { form } = this.props;
      const proportion = form.getFieldValue('proportion');
      this.setState({
        list: this.getAllGender(res.get('data'), proportion),
      });
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const body = {};
        Object.keys(values).forEach((key) => {
          if (typeof values[key] === 'string') {
            body[key] = parseInt(values[key], 10);
          } else {
            body[key] = values[key];
          }
        });

        this.getFilterList(body);
      }
    });
  };

  getAllGender = (data, proportion) => {
    return data.map((item) => {
      const gender = this.getGender(item.get('gender'), proportion);
      return item.set('gender', gender ? '公' : '母');
    });
  };

  getGender = (gender, proportion) => {
    const num = 254;
    switch (proportion) {
    case 0:
      const gender17 = Math.ceil(gender / (num / 8));
      return gender17 > 1;
    case 1:
      const gender13 = Math.ceil(gender / (num / 4));
      return gender13 > 1;
    case 3:
      const gender31 = Math.ceil(gender / (num / 4));
      return gender31 > 3;
    case 4:
      const gender71 = Math.ceil(gender / (num / 4));
      return gender71 > 7;
    case 2:
    default:
      const gender11 = Math.ceil(gender / (num / 2));
      return gender11 > 1;
    }
  };

  changeGender = (value) => {
    this.setState({
      list: this.getAllGender(this.state.list, value),
    });
  };

  render() {
    const { list } = this.state;
    const { form } = this.props;
    return (
      <div className={styles.container}>
        <Form className='ant-advanced-search-form' onSubmit={this.handleSubmit}>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item key='pid' label='PID'>
                {form.getFieldDecorator('pid', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: '0x',
                })(<Input/>)}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='ec' label='加密常数'>
                {form.getFieldDecorator('ec', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: '0x',
                })(<Input/>)}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='usefilters' label='是否使用过滤'>
                {form.getFieldDecorator('usefilters', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 1,
                })(
                  <Select>
                    <Select.Option value={1}>是</Select.Option>
                    <Select.Option value={0}>否</Select.Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='maxResults' label='最大检索范围'>
                {form.getFieldDecorator('maxResults', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 1500,
                })(<InputNumber className={styles.numberWrap} min={1}/>)}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='flawlessiv' label='目标保底个体V数'>
                {form.getFieldDecorator('flawlessiv', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 4,
                })(
                  <Select>
                    <Select.Option value={2}>保底2V（三星洞）</Select.Option>
                    <Select.Option value={3}>保底3V（四星洞或活动超级巨三星洞）</Select.Option>
                    <Select.Option value={4}>保底4V（五星洞或活动超级巨四星洞）</Select.Option>
                    <Select.Option value={5}>保底5V（活动超级巨五星洞）</Select.Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='ha' label='检索梦特'>
                {form.getFieldDecorator('ha', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 1,
                })(
                  <Select>
                    <Select.Option value={1}>是</Select.Option>
                    <Select.Option value={0}>否</Select.Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='randomGender' label='性别是否随机'>
                {form.getFieldDecorator('randomGender', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 1,
                })(
                  <Select>
                    <Select.Option value={1}>是</Select.Option>
                    <Select.Option value={0}>否</Select.Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='isShinyType' label='只看闪光'>
                {form.getFieldDecorator('isShinyType', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 1,
                })(
                  <Select>
                    <Select.Option value={1}>是</Select.Option>
                    <Select.Option value={0}>否</Select.Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='proportion' label='目标性别比例'>
                {form.getFieldDecorator('proportion', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 2,
                })(
                  <Select onSelect={this.changeGender}>
                    <Select.Option value={0}>1(公):7(母)</Select.Option>
                    <Select.Option value={1}>1(公):3(母)</Select.Option>
                    <Select.Option value={2}>1(公):1(母)</Select.Option>
                    <Select.Option value={3}>3(公):1(母)</Select.Option>
                    <Select.Option value={4}>1(公):7(母)</Select.Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='hp' label='HP'>
                {form.getFieldDecorator('IVs[0]', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 31,
                })(<InputNumber className={styles.numberWrap} min={0} max={31}/>)}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='atk' label='ATK'>
                {form.getFieldDecorator('IVs[1]', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 31,
                })(<InputNumber className={styles.numberWrap} min={0} max={31}/>)}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='def' label='DEF'>
                {form.getFieldDecorator('IVs[2]', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 31,
                })(<InputNumber className={styles.numberWrap} min={0} max={31}/>)}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='spa' label='SPA'>
                {form.getFieldDecorator('IVs[3]', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 31,
                })(<InputNumber className={styles.numberWrap} min={0} max={31}/>)}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='spd' label='SPD'>
                {form.getFieldDecorator('IVs[4]', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 31,
                })(<InputNumber className={styles.numberWrap} min={0} max={31}/>)}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item key='spe' label='SPE'>
                {form.getFieldDecorator('IVs[5]', {
                  rules: [{ required: true, message: '必填' }],
                  initialValue: 31,
                })(<InputNumber className={styles.numberWrap} min={0} max={31}/>)}
              </Form.Item>
            </Col>

            <Col span={24} className={styles.submitBtn}>
              <Button htmlType='submit'>开始检索</Button>
            </Col>
          </Row>
        </Form>

        {this.renderIndividualValue(list)}
      </div>
    );
  }

  renderIndividualValue = (list) => {
    return (
      <Table
        className={styles.tableWrap}
        rowKey='seed'
        dataSource={list.toJS()}
        columns={this.columns}
      />
    );
  };
}

export default Form.create()(Countdown);
