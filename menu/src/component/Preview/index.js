import React, { Component } from 'react';
import './css/Preview.css'

class Preview extends Component {
    render() {
        let {PreviewData} =this.props;
        console.log(PreviewData)
        return (
            <div className='Preview'>
            {
                PreviewData == null 
                ?
                 <img className='Previewimg' src='https://fuss10.elemecdn.com/6/84/03fb23883b9a7388b62c70cf8d5c7png.png?imageMogr/format/webp/thumbnail/686x/' />
                :
                <div className='menuPreview'>
                    {/* <div className='PreviewImg'>
                    <img src={"https://fuss10.elemecdn.com/" + Object.values(PreviewData.image_path)[0] + '/' + Object.values(PreviewData.image_path)[1] + Object.values(PreviewData.image_path)[2] + '/' + PreviewData.image_path.slice(3) + "." + (PreviewData.image_path.substring(PreviewData.image_path.length - 3) == 'png' ? 'png' : 'jpeg') + "?imageMogr/format/webp/thumbnail/240x/"} />
                    </div> */}
                    <div className='previewMsg'>
                        <h2>{PreviewData.name}</h2>
                        <p className='preContent'>{PreviewData.description}</p>
                        <span>{PreviewData.tips}</span>
                    </div>
                </div>

            }
                
            </div>
        );
    }
}

export default Preview;