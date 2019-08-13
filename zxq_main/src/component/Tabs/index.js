import React, { Component } from 'react';

class Tabs extends Component{

    /* 
        Compatible props:
        > activeKey: string
        > animated: boolean
        > renderTabBar
        > defaultActiveKey
        > hideAdd
        > size: large | default | small
        > tabBarExtraContent
        > tabBarGutter
        > tabBarStyle
        > tabPosition
        > type: line | card | editable-card
        > onChange: function(activeKey)
        > onEdit: function(targetKey, action)
        > onNextClick: function()
        > onPrevClick: function()
        > onTabClick: function()
    */

    render(){
        const props = this.props;
        const{
            activeKey,
            animated,
            renderTabBar,
            defaultActiveKey,
            hideAdd,
            size,
            tabBarExtraContent,
            tabBarGutter,
            tabBarStyle,
            tabPosition,
            type,
            onChange,
            onEdit,
            onNextClick,
            onPrevClick,
            onTabClick
        }
    }
}

export default Tabs;