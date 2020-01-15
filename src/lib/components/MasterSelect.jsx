import React, { Component } from 'react'
import SuperSelect from './SuperSelect'

 class MasterSelect extends Component {
     state={
         data:[
            {
                label: "Select All",
                value: "All",
                children: [
                  {
                    label: "product1",
                    value: 1
                  },
                  {
                    label: " product2",
                    value: 2
                  },
                  {
                    label: "product3",
                    value: 3
                  },
                  {
                    label: "product4",
                    value: 4
                  }
                ]
              }
         ]
     }

     getSelectedItems=(v)=>{
      console.log(v)
     }

    render() {
        return (
            <div>
                <SuperSelect
                  options={this.props.data}
                  getSelectedItems={this.getSelectedItems}
                />
            </div>
        )
    }
}

export default MasterSelect;
