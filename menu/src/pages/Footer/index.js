import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom';
import './css/footer.css';
import { Badge } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class Footer extends Component {
    render() {
        let { shopcar }=this.props;
        // console.log(shopcar,'000')
        return (
            <div className='footer'>
                <div className='footGouwu'>
                <Badge text={this.props.shopcar != null ?  this.props.shopcar.length : [] } className='FoootBadge' />
                {
                   this.props.shopcar != null ? shopcar.length > 0 ? <i className='iconfont gouwuche1' onClick={()=>this.isShow()}></i> : <i className='iconfont gouwuche'></i>:<i className='iconfont gouwuche'></i>
                }
                    
                </div>
                {/* {
                    shopcar.length > 0 ? <Link to={{pathname:'/msg',query:{shopcar:shopcar}}} className='btnOk unDisbale'>确认下单</Link> : <div className='btnOk'>确认下单</div> 
                } */}
                <div className={  this.props.shopcar != null ? shopcar.length > 0 ?'btnOk unDisbale' :'btnOk ' :'btnOk'} onClick={this.props.shopcar != null ? shopcar.length > 0 ?()=>this.goOk() :null:null}>确认下单</div>
            </div>
        );
    }
    isShow(){
        let {ShowCar} =this.props;
        ShowCar()
    }
    goOk(){
        let { shopcar }=this.props;
        localStorage.setItem('shopcar',JSON.stringify(shopcar))
        this.props.history.push('/msg')
        // console.log(this.props.history.push('/msg'))
    } 
}

export default withRouter(Footer);