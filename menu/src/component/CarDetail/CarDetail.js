import React, { Component } from 'react';
import Mark from '../Mark'
import './css/CarDetail.css'
import { Button } from 'antd-mobile';


class CarDetail extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     shopCar: null
        // }
    }

    render() {
        // let { shopCar } = this.state;
        let { menu } = this.props;
        // console.log(menu, '123')
        return (
            <div className='CarDetail'>
                <div className='Car-header'>
                    <p className='CarTit'>已选商品</p>
                    <p onClick={(e) => this.clearCar(e)}><i className='iconfont lajitong'></i>清空</p>
                </div>
                <ul className='menuCarList'>
                    {
                        menu && menu.length > 0 && menu.map((v, i) => {
                           return v.foods.map((val, key) => {
                                // console.log(val.is_featured > 0 ? (val,v) : 'aaa')
                                return val.is_featured > 0 ?
                                <li key={key}>
                                    <span>{val.name}</span>
                                    <span>¥{val.specfoods[0].price}</span>
                                    <span>
                                        <Button className='btn' onClick={(e) => this.Add(e,i,key, 'minus')}>-</Button>
                                        <p>{val.is_featured}</p>
                                        <Button className='btn' onClick={(e) => this.Add(e,i,key, 'add')}>+</Button>
                                    </span>
                                </li>
                                :''
                            })
                        })
                    }
                </ul>
            </div>
        );
    }
    Add(e,i,key,count) {
        e.stopPropagation()
        // console.log(e.stopPropagation(),'aa')
        let {IsMenu}=this.props;
        IsMenu(i,key,count)
    }
    //清空购物车
    clearCar = (e) => {
        let { clearCars, ShowCar } = this.props;
        ShowCar()
        clearCars()
    }

}

export default Mark(CarDetail);