import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { makeSvgContainer, drawSvg } from '../../common/svgOp';
import { svgImg } from '../../common/config';

class Background extends Component{
    constructor(props){
        super(props);
        this.svg={logo:null, bg:null};
    }

    componentDidMount(){
        this.parent=this.refs.bg;
    }

    render(){
        const bg_item=<svg className='svg' width='100%' height='calc(100vh - 10px)'>
                            {svgImg.bg_def1}
                            <svg x='150px' y='20px' width='110px' height='110px'>
                                <g>
                                    {svgImg.bg_heart}
                                </g>
                            </svg>
                            <svg x='73%' y='12%' width='110px' height='110px'>
                                <g>
                                    {svgImg.bg_single_heart_r30}
                                </g>
                            </svg>
                            <svg x='40%' y='30%' width='110px' height='110px'>
                                <g>
                                    {svgImg.bg_single_heart_rn30}
                                </g>
                            </svg>
                            <svg x='60%' y='60%' width='110px' height='110px'>
                                <g>
                                    {svgImg.bg_heart}
                                </g>
                            </svg>
                            <svg x='20%' y='50%' width='110px' height='110px'>
                                <g>
                                    {svgImg.bg_single_heart_r30}
                                </g>
                            </svg>
                            <svg x='10%' y='60%' width='110px' height='110px'>
                                <g>
                                    {svgImg.bg_heart}
                                </g>
                            </svg>
                            <svg x='40%' y='4%' width='110px' height='110px'>
                                <g>
                                    {svgImg.bg_heart}
                                </g>
                            </svg>
                            <svg x='80%' y='24%' width='110px' height='110px'>
                                <g>
                                    {svgImg.bg_heart}
                                </g>
                            </svg>
                            <svg x='80%' y='60%' width='110px' height='110px'>
                                <g>
                                    {svgImg.bg_single_heart_r30}
                                </g>
                            </svg>
                        </svg>
        return <div className='App-header' ref='bg'>
            <svg className='leftuppercorner' width='200px' height='50px' viewBox='0 0 405 100'>
                {svgImg.logo}
                <text x='0' y='90px'>meant to create love</text>
            </svg>
            {bg_item}
            {this.props.children}
        </div>
    }
}

export default Background;