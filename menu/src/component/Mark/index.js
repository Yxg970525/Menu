import React, { Component } from 'react';
import './css/Mark.css';

function Mark(Child){    
   return class extends Component {
        render() {
            let {site,clearCars,ShowCar,menu,IsMenu}=this.props;
            console.log(this.props,'777')
            return (
                <div className='Mark' onClick={()=>this.isShow()}>
                    <div className={this.props.site ? `site ${this.props.site}` : 'site'}>
                        <Child clearCars={clearCars} IsMenu={IsMenu} ShowCar={ShowCar} menu={menu} />
                    </div>
                </div>
            );
        }
        isShow(){
            let {ShowCar}=this.props;
            ShowCar()
        }
    }
}
export default Mark;