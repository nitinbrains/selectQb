
import React, { Component } from 'react'
import { TreeSelect } from "antd";
const { SHOW_PARENT } = TreeSelect;

class SuperSelect extends Component {
  state = {
    treeData: [],
    value:null
  };

  componentDidMount(){
     this.setState({treeData:this.props.options})
  }

  componentDidUpdate(prevProps){
    if(this.props.options!==prevProps.options){
      this.setState({treeData:this.props.options})
    }
  }

  onChange = value => {
      const{treeData}=this.state;
    if (value[0] && value[0].value === "All") {
        this.setState({value: treeData[0].children},()=>{
        this.props.getSelectedItems(this.state.value)
        })
    } else {
        this.setState({value},()=>{
        this.props.getSelectedItems(this.state.value)
        })
    }
   
  };

  render() {
    const tProps = {
      treeData: this.state.treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      treeDefaultExpandAll: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: "Please select",
      dropdownMatchSelectWidth: true,
      labelInValue: true,
      treeNodeLabelProp: "label",
      maxTagCount: 1,
      style: {
        width: "100%"
      }
    };
    return <TreeSelect {...tProps} />;
  }
}

export default SuperSelect;


