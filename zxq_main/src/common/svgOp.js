import React from 'react';
import { $ } from "./utils";

export function drawSvg(tag, members){
    var element = document.createElementNS("http://www.w3.org/2000/svg", tag);

    for (let i in members){
        let val = members[i];
        if (i==='childOf'){
            if(React.isValidElement(val)){
                val.appendChild(element);
            }else{
                $(val).appendChild(element);
            }
            
        }else if (i==='around'){
            let ref = $(val);
            ref.parentNode.insertBefore(element, ref);
            element.appendChild(ref);
        }else if (i==='style'){
            if (typeof val == 'object'){
                Object.keys(val).map(prop => {
                    element.style[prop] = val[prop];
                });
            }
        }else {
            if (i==='className')
                i='class';
            if (i==='innerHTML'){
                element['textContent'] = val;
            }else{
                element.setAttribute(i, val);
            }
        }
    }
    return element;
}

export function makeSvgContainer(parent, className, height, width){
    return drawSvg('svg',{
        childOf: parent,
        className: className,
        height: height, 
        width: width
    });
}

export function makeSvgGroup(parent, className){
    return drawSvg('g', {
        className: className,
        childOf: parent
    });
}

export function makeSvgDef(parent){
    return drawSvg('defs', {
        childOf:parent
    });
}

export function createMarker(def, key){
    let m_def = drawSvg('marker', {
        childOf: def, 
        id: 'markerArrow'+key, 
        markerWidth: '4', 
        markerHeight: '4', 
        refX: '3', 
        refY: '2', 
        orient:'auto'
    });
    return drawSvg('path', {
        childOf:m_def, 
        d:'M0,0 L0,4 L3,2 L0,0',
        style: {
            fill: "#ffffff"
        }
    });
}

export function makeLine(parent, options){
    return drawSvg('line', {
        className: options.className,
        x1: options.x1, 
        y1: options.y1, 
        x2: options.x2, 
        y2: options.y2, 
        display: options.display || true,
        'stroke-width': 2,
        'stroke-dasharray': options.stroke_dasharray?'2,2':'',
        childOf: parent,
        'marker-end':options.is_arrow
                        ?'url(#markerArrow'+options.activekey+')'
                        :'', 
        style: {
            stroke: options.stroke, 
        }
    })
}

export function makeRect(parent, options){
    return drawSvg('rect',{
        childOf:parent,
        x:options.x,
        y:options.y,
        width:options.width, 
        height:options.height,
        style:{
            fill:options.fill,
            stroke:options.stroke,
            'stroke-width': options.stroke_width,
            'fill-opacity': options.fill_opacity,
            'stroke-opacity': options.stroke_opacity
        }
    })
}

export function makePath(parent, options){
    return drawSvg('path', {
        childOf:parent, 
        d: options.d,
        'marker-end':options.marker_end,
        'stroke-dasharray':options.dash, 
        fill: 'transparent',
        display: options.display,
        style: {
            stroke: options.stroke
        }
    })
}

