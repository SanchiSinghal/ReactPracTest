import React from 'react';
import './index.css';

class Slots extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={()=>{
          this.props.btnPress(this.props.sp)
        }} style={{
          backgroundColor: typeof this.props.data[this.props.sp] == "undefined" ? 'white': 'red',
          borderRadius: 5,
          height: 30, width:100
        }}>
          {typeof this.props.data[this.props.sp] == "undefined" ? this.props.start  +" to " + this.props.end : "Sort Already Booked" }
        </button>
      </div>
    );
  }
}

export default Slots;
