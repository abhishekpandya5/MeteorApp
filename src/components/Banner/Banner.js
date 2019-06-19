import React, { Component } from 'react'
import { banner } from '../Data';

export class Banner extends Component {
    render() {
        return (
            <div className="banner_container">
                {
                    banner.map(e => (
                        <div key={e.alt} style={{background: e.style}} className="banner_image">
                            {/* <div className="img_gradient">
                                <img src={e.image} alt={e.alt} className="banner_image" />
                            </div> */}
                            <div className="banner_img_desp">
                                <span className="banner-title" id={e.titleStyle}>{e.title}</span>
                                <span className="banner_views"><i class="fas fa-eye"></i>&nbsp;{e.views}</span>
                                <p className="banner_caption">{e.caption}</p>
                                <span>{e.userName}</span> | <span>{e.userTime}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Banner;
