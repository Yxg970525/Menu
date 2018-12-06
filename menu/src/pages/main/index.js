import React, { Component } from 'react';
import './css/main.css'
import axios from 'axios'
import MainData from '../../mock/main/main.js'
import Recommend from '../../component/Recommend'
import Preview from '../../component/Preview'
import Menu from '../Menu'
import Footer from '../Footer'
import CarDetail from '../../component/CarDetail'
import { flush } from 'redux-saga/effects';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: null,//商家信息
            recommend: null,//商家推荐
            menu: null,//菜单
            PreviewData: null,//预览
            shopcar: [],
            show:false
        }
    }

    render() {
        let {
            msg,
            PreviewData,
            recommend,//商家推荐
            menu,//菜单
            shopcar,
            show
        } = this.state
        console.log('晓', menu)
        return (
            <div className='Main'>
                <div className='Main'>

                    <div className='banner'>
                        <img src='https://fuss10.elemecdn.com/3/63/14fa9882cb516bba55d1037368899png.png?imageMogr/format/webp/thumbnail/750x/' />
                    </div>
                    <div className='title'>
                        <img src='https://fuss10.elemecdn.com/5/f4/e0639725e12019a9cb6f455f65248png.png?imageMogr/format/webp/thumbnail/150x/' />
                    </div>
                    {
                        msg && <h2 className='tit_name'>{msg.name}</h2>
                    }
                    {
                        msg && <p className='promotion'>公告：{msg.promotion_info}</p>
                    }
                    <Preview PreviewData={PreviewData} />
                    {/* 主菜单 */}
                    {
                        menu && menu.length > 0 && <Menu menu={menu} IsMenu={this.IsMenu} mainPreview={this.mainPreview} />
                    }
                </div>
                <Footer shopcar={shopcar} ShowCar={this.ShowCar} />
                {
                    show ? <CarDetail site='bot' menu={menu} IsMenu={this.IsMenu}  ShowCar={this.ShowCar} clearCars={this.clearCars} /> : ''
                }
                
            </div>
        );
    }
    ShowCar =() =>{
        //修改Mark
        let {show} = this.state;
        this.setState({
            show:!show
        })
    }
    clearCars = () =>{
        //清空页面购物车
        this.setState({
            shopcar:[]
        })
        localStorage.clear('shopcar')
        //重新请求数据 清空购物车
        this.AxiosData()
    }
    //处理点击预览
    mainPreview = (oneKey, towKey)=>{
        let { menu} = this.state;
        this.setState({
            PreviewData:menu[oneKey].foods[towKey]
        })
    }
    //修改state中menu的数量
    IsMenu = (oneKey, towKey, count) => {
        let { menu, shopcar } = this.state;
        if (count == 'add') {//计算数量
            JSON.parse(JSON.stringify(menu[oneKey].foods[towKey].is_featured++));
            //存入购物车
            if (shopcar.indexOf(menu[oneKey].foods[towKey]) == -1) {
                shopcar.push(menu[oneKey].foods[towKey])
            }
        } else {
            JSON.parse(JSON.stringify(menu[oneKey].foods[towKey].is_featured -= 1));
            //从购物车删除
            if (menu[oneKey].foods[towKey].is_featured <= 0) {
                shopcar.splice(menu[oneKey].foods[towKey], 1)
            }
        }
        console.log(menu,'789')
        if(shopcar.length <1){
            this.setState({
                show:false
            })
        }
        localStorage.setItem('shopcar',JSON.stringify(shopcar))
        //覆盖旧值
        this.setState({
            menu
        })
    }
    AxiosData(){
        // 数据请求
        axios('/mainData').then(res => {
            var shop = JSON.parse(localStorage.getItem('shopcar'));
            //刷新页面取本机的值如果没有就不执行
            if (shop != null) {
                res.data.menu.map((v, i) => {
                    v.foods.map((val, idx) => {
                        shop.map((a, b) => {
                            if (v.foods[idx].item_id == a.item_id && v.foods[idx].category_id == a.category_id) {
                                 JSON.parse(JSON.stringify(res.data.menu[i].foods[idx] = a))//赋值新值
                            }
                        })
                    })
                })
                //本机赋值购物车
                this.setState({
                    shopcar:shop
                })
            }
            //存入state
            this.setState({
                msg: res.data.rst,
                recommend: res.data.recommend,
                menu: res.data.menu
            })

        })
    }
    componentDidMount() {
        this.AxiosData()
    }
}

export default Main;
