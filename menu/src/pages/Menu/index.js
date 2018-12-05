import React, { Component } from 'react';
import './css/Menu.css';
import { Button } from 'antd-mobile';
// import { connect } from 'react-redux'
// import { menuDataAction } from '../../store/actions'


class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            h: 0,
            flog: 0,
            scrollTop: 10
        }
    }

    render() {
        let { h, flog } = this.state
        let { menu} = this.props;
        let menuLIst = []
        menu && menu.length > 0 && menu.map((v, i) => {
            // console.log(v)
            menuLIst.push({ tit: v.name, foods: v.foods })
        })
        // console.log(h)
        return (
            <div className='Menu' ref='MenuTop'>
                {/* 食物导航列表渲染 */}

                <div className='Menu_Nav' ref="widths"  >

                    {
                        menu && menu.length > 0 && menu.map((v, i) => {
                            return <span key={i} className={i == flog ? 'navList NavActive' : 'navList'} onClick={() => this.NavActive(i)}>{v.name}</span>
                        })
                    }
                </div>
                {/* 动态获取nav的高度 赋值给list    */}
                <div className='Menu_List' ref='listWidth' style={{ height: h + "px" }} onScroll={(e) => this.listScroll(e)}>
                    {
                        menuLIst && menuLIst.length > 0 && menuLIst.map((v, i) => {
                            return <div key={i} className='list_Item'>
                                <h2 className='list_Item_tit' ref={'listTit' + i}>{v.tit}</h2>
                                {/* 食物列表渲染 */}
                                {
                                    v.foods.map((val, key) => {
                                        return <div key={key} className='list_Item_detail' onClick={()=>this.preview(i,key)}>
                                            <div className='list_Item_img'>
                                                <img src={"https://fuss10.elemecdn.com/" + Object.values(val.image_path)[0] + '/' + Object.values(val.image_path)[1] + Object.values(val.image_path)[2] + '/' + val.image_path.slice(3) + "." + (val.image_path.substring(val.image_path.length - 3) == 'png' ? 'png' : 'jpeg') + "?imageMogr/format/webp/thumbnail/240x/"} />
                                            </div>
                                            <div className='list_Item_Msg'>
                                                <h3>{val.name}</h3>
                                                <span>{val.description}</span>
                                                <span>{val.tips}</span>
                                                <div className='list_Item_pic'>
                                                    <p>¥<i>{val.specfoods[0].price}</i></p>

                                                    {
                                                        val.is_featured == 0 ? <div className='rec_item_btns'><Button className='btn' onClick={() => this.Add(i,key,'add')}>+</Button></div> : <div className='rec_item_btns'>
                                                            <Button className='btn' onClick={() => this.Add(i,key,'minus')}>-</Button>
                                                            <p>{val.is_featured}</p>
                                                            <Button className='btn' onClick={() => this.Add(i,key,'add')}>+</Button>
                                                        </div>
                                                    }

                                                </div>

                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        })
                    }
                </div>

            </div>
        );
    }
    preview(i,key){
        let{mainPreview}=this.props;
        mainPreview(i,key)
        // console.log(1)
    }
    Add(i,key,count){
        let {IsMenu}=this.props;
        IsMenu(i,key,count)
    }  
    //选择nav
    NavActive(index) {
        this.setState({
            flog: index
        })
        let listTit = null;
        switch (index) {
            case 0:
                listTit = this.refs.listTit0;
                break;
            case 1:
                listTit = this.refs.listTit1;
                break;
            case 2:
                listTit = this.refs.listTit2;
                break;
            case 3:
                listTit = this.refs.listTit3;
                break;
            case 4:
                listTit = this.refs.listTit4;
                break;
            case 5:
                listTit = this.refs.listTit5;
                break;
            case 6:
                listTit = this.refs.listTit6;
                break;
            case 7:
                listTit = this.refs.listTit7;
                break;
            case 8:
                listTit = this.refs.listTit8;
                break;
            case 9:
                listTit = this.refs.listTit9;
                break;
            case 10:
                listTit = this.refs.listTit10;
                break;
            case 11:
                listTit = this.refs.listTit11;
                break;
            case 12:
                listTit = this.refs.listTit12;
                break;
            case 13:
                listTit = this.refs.listTit13;
                break;
            case 14:
                listTit = this.refs.listTit14;
                break;
            case 15:
                listTit = this.refs.listTit15;
                break;
            case 16:
                listTit = this.refs.listTit16;
                break;
            case 17:
                listTit = this.refs.listTit17;
                break;
            case 18:
                listTit = this.refs.listTit18;
                break;
            case 19:
                listTit = this.refs.listTit19;
                break;
            case 20:
                listTit = this.refs.listTit20;
                break;

        }
        //点击navList 使 menu移动
        this.refs.listWidth.scrollTop = listTit.offsetTop - this.refs.MenuTop.offsetTop


    }
    //滚动事件
    listScroll(e) {
        if (e.target.scrollTop > 0 && e.target.scrollTop < this.refs.listTit0.offsetTop) {
            this.setState({
                flog: 0
            })
        } else if (e.target.scrollTop > this.refs.listTit0.offsetTop && e.target.scrollTop < this.refs.listTit1.offsetTop) {
            this.setState({
                flog: 1
            })
        } else if (e.target.scrollTop > this.refs.listTit1.offsetTop && e.target.scrollTop < this.refs.listTit2.offsetTop) {
            this.setState({
                flog: 2
            })
        } else if (e.target.scrollTop > this.refs.listTit2.offsetTop && e.target.scrollTop < this.refs.listTit3.offsetTop) {
            this.setState({
                flog: 3
            })
        } else if (e.target.scrollTop > this.refs.listTit3.offsetTop && e.target.scrollTop < this.refs.listTit4.offsetTop) {
            this.setState({
                flog: 4
            })
        } else if (e.target.scrollTop > this.refs.listTit4.offsetTop && e.target.scrollTop < this.refs.listTit5.offsetTop) {
            this.setState({
                flog: 5
            })
        } else if (e.target.scrollTop > this.refs.listTit5.offsetTop && e.target.scrollTop < this.refs.listTit6.offsetTop) {
            this.setState({
                flog: 6
            })
        } else if (e.target.scrollTop > this.refs.listTit6.offsetTop && e.target.scrollTop < this.refs.listTit7.offsetTop) {
            this.setState({
                flog: 7
            })
        } else if (e.target.scrollTop > this.refs.listTit7.offsetTop && e.target.scrollTop < this.refs.listTit8.offsetTop) {
            this.setState({
                flog: 8
            })
        } else if (e.target.scrollTop > this.refs.listTit8.offsetTop && e.target.scrollTop < this.refs.listTit9.offsetTop) {
            this.setState({
                flog: 9
            })
        } else if (e.target.scrollTop > this.refs.listTit9.offsetTop && e.target.scrollTop < this.refs.listTit10.offsetTop) {
            this.setState({
                flog: 10
            })
        } else if (e.target.scrollTop > this.refs.listTit10.offsetTop && e.target.scrollTop < this.refs.listTit11.offsetTop) {
            this.setState({
                flog: 11
            })
        } else if (e.target.scrollTop > this.refs.listTit11.offsetTop && e.target.scrollTop < this.refs.listTit12.offsetTop) {
            this.setState({
                flog: 12
            })
        } else if (e.target.scrollTop > this.refs.listTit12.offsetTop && e.target.scrollTop < this.refs.listTit13.offsetTop) {
            this.setState({
                flog: 13
            })
        } else if (e.target.scrollTop > this.refs.listTit13.offsetTop && e.target.scrollTop < this.refs.listTit14.offsetTop) {
            this.setState({
                flog: 14
            })
        } else if (e.target.scrollTop > this.refs.listTit14.offsetTop && e.target.scrollTop < this.refs.listTit15.offsetTop) {
            this.setState({
                flog: 15
            })
        } else if (e.target.scrollTop > this.refs.listTit15.offsetTop && e.target.scrollTop < this.refs.listTit16.offsetTop) {
            this.setState({
                flog: 16
            })
        } else if (e.target.scrollTop > this.refs.listTit16.offsetTop && e.target.scrollTop < this.refs.listTit17.offsetTop) {
            this.setState({
                flog: 17
            })
        } else if (e.target.scrollTop > this.refs.listTit17.offsetTop && e.target.scrollTop < this.refs.listTit18.offsetTop) {
            this.setState({
                flog: 18
            })
        } else if (1 || e.target.scrollTop > this.refs.listTit18.offsetTop && e.target.scrollTop < this.refs.listTit19.offsetTop) {
            this.setState({
                flog: 19
            })
        } else if (e.target.scrollTop > this.refs.listTit19.offsetTop && e.target.scrollTop < this.refs.listTit20.offsetTop) {
            this.setState({
                flog: 20
            })
        } else if (e.target.scrollTop > this.refs.listTit20.offsetTop) {
            this.setState({
                flog: 1
            })
        }
        // console.log(e.target.scrollTop)
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                h: this.refs.widths.offsetHeight
            })

        }, 300)
    }
}
export default Menu
