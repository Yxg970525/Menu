import React, { Component } from 'react';
import './css/Recommend.css'
import { Button } from 'antd-mobile';

class Recommend extends Component {
    render() {
        let { recommend } = this.props;
        // console.log(recommend)
        return (
            <div className='Recommend'>
                {
                    recommend && <h2 className='rec_tit'>{recommend[0].name}</h2>
                }
                <div className='rec_list'>
                    {
                        recommend && recommend.length > 0 && recommend[0].items.map((v, i) => {
                            return <span className='rec_item' key={i}>
                                <div className='rec_item_img'>
                                    <img src={"https://fuss10.elemecdn.com/" + Object.values(v.image_path)[0] + '/' + Object.values(v.image_path)[1] + Object.values(v.image_path)[2] + '/' + v.image_path.slice(3) + "." + (v.image_path.substring(v.image_path.length - 3) == 'png' ? 'png' : 'jpeg') + "?imageMogr/format/webp/thumbnail/240x/"} />
                                </div>
                                <h3 className='rec_item_tit'>{v.name}</h3>
                                <span className='rec_item_appraise'>{v.tips}</span>
                                <div className='pic'>
                                    <p className='rec_item_pic'>¥{v.specfoods[0].price}</p>
                                    {/* 计算数量 */}
                                    {
                                        v.is_featured == 0 ? <div className='rec_item_btns'><Button className='btn'>+</Button></div> : <div className='rec_item_btns'>
                                            <Button className='btn'>-</Button>
                                            <p>{v.is_featured}</p>
                                            <Button className='btn'>+</Button>
                                        </div>
                                    }

                                </div>
                            </span>
                        })
                    }
                </div>

            </div>
        );
    }
}

export default Recommend;