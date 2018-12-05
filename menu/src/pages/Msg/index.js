import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './css/Msg.css'
import Header from '../../component/Header'
import { InputItem } from 'antd-mobile';
import 'antd-mobile/lib/date-picker/style/css';

class Msg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shopCar: null,
            district: [
                {
                    label: '请选择...',
                    value: 1
                }, {
                    label: '1号桌',
                    value: 1
                }, {
                    label: '2号桌',
                    value: 1
                }, {
                    label: '3号桌',
                    value: 1
                }, {
                    label: '4号桌',
                    value: 1
                }, {
                    label: '5号桌',
                    value: 1
                }, {
                    label: '6号桌',
                    value: 1
                }, {
                    label: '7号桌',
                    value: 1
                }, {
                    label: '8号桌',
                    value: 1
                }, {
                    label: '9号桌',
                    value: 1
                }, {
                    label: '10号桌',
                    value: 1
                }, {
                    label: '11号桌',
                    value: 1
                }, {
                    label: '12号桌',
                    value: 1
                }, {
                    label: '13号桌',
                    value: 1
                }, {
                    label: '14号桌',
                    value: 1
                }, {
                    label: '15号桌',
                    value: 1
                }],
            anchorEl: null,
            flog: 'block',
            value: '用餐人数',
            shopCarNum:0
        }
    }

    render() {
        let { shopCar, district, anchorEl, value,shopCarNum } = this.state;
        console.log(shopCar)
        return (
            <div className='Msg'>
                <Header />
                <div className='guestMsg'>
                    <div className='desk'>座位号：<select className='deskNUm' onChange={this.optionChang} defaultValue={'请选择...'}>
                        {
                            district.map((v, i) => {
                                return <option value={v.label} key={i} >{v.label}</option>
                            })
                        }
                    </select>

                    </div>
                    <div className='peopleNum'>
                        人数：<InputItem placeholder={value} maxLength={3} onBlur={(e) => this.Blur(e)} updatePlaceholder={true} type='number' />
                    </div>
                </div>
                <div className='isMenu'>
                    <h2>已选菜品清单</h2>
                    <ul className='isMenuTit'>
                        <li>菜品</li>
                        <li>价格</li>
                        <li>份数</li>
                    </ul>
                    <div className='MenuList'>
                        {
                            shopCar && shopCar.length > 0 && shopCar.map((v, i) => {
                                return <ul className='isMenuTit' key={i}>
                                    <li>{v.name}</li>
                                    <li>¥{v.specfoods[0].price}</li>
                                    <li>{v.is_featured}</li>
                                </ul>
                            })
                        }
                    </div>
                </div>
                <div className='addMenu' onClick={()=>this.addMenu()}>加菜<i className='iconfont canpan'></i></div>
                <div className='Footer'>
                    <div className='all'>
                        <p className='allnum'>共<span>{shopCarNum}</span>份</p>
                        <p className='allpic'>合计<span>¥1</span></p>
                    </div>
                    <a className='goPay'>去买单</a>
                </div>
            </div>
        );
    }
    optionChang = (e) => {
        console.log(e.target.value)
    };
    Blur(e) {
        console.log(e)
    }
    addMenu(){
        this.props.history.push('/')
    }
    componentDidMount() {
        let shopCar = JSON.parse(localStorage.getItem('shopcar'));
        if (shopCar == null) {
            this.props.history.push('/')
        }
        this.setState({
            shopCar,
            shopCarNum:shopCar.length
        })
    }
}

export default withRouter(Msg);


