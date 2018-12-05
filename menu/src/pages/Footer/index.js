import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom';
import './css/footer.css';
import { Badge } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class Footer extends Component {
    render() {
        let { shopcar }=this.props;
        console.log(shopcar)
        return (
            <div className='footer'>
                <div className='footGouwu'>
                <Badge text={shopcar.length} className='FoootBadge' />
                {
                    shopcar.length > 0 ? <i className='iconfont gouwuche1'></i> : <i className='iconfont gouwuche'></i>
                }
                    
                </div>
                {/* {
                    shopcar.length > 0 ? <Link to={{pathname:'/msg',query:{shopcar:shopcar}}} className='btnOk unDisbale'>确认下单</Link> : <div className='btnOk'>确认下单</div> 
                } */}
                <div className={shopcar.length > 0 ?'btnOk unDisbale' :'btnOk '} onClick={shopcar.length > 0 ?()=>this.goOk() :null}>确认下单</div>
            </div>
        );
    }
    goOk(){
        let { shopcar }=this.props;
        localStorage.setItem('shopcar',JSON.stringify(shopcar))
        console.log(this.props.history.push('/msg'))
    } 
}

export default withRouter(Footer);