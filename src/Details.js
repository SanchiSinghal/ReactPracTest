import React from 'react';

class Details extends React.Component {
  state = {
    name: "",
    lastname: "",
  }
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  componentDidMount(){
    if(typeof this.props.data != "undefined" && typeof this.props.sp != "undefined"){
      if(typeof this.props.data[this.props.sp] != "undefined"){
        this.setState({
          name: this.props.data[this.props.sp].name,
          lastname: this.props.data[this.props.sp].lastname,
          phoneno: this.props.data[this.props.sp].phoneno,
        })
      }
    }
  }
  render() {
    return (
      <form onSubmit={()=>{
        this.props.onSubmit(this.props.sp, this.state.name, this.state.lastname, this.state.phoneno);
      }}>
        <table>
            <tr>
                <td> <label> Name: </label> </td>
                <td> <input
                        ref={(input) => {
                          this.name = input;
                        }}
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                      />
                </td>
            </tr>
            <tr>
                <td> <label> Lastame: </label> </td>
                <td> <input
                        ref={(input) => {
                          this.lastname = input;
                        }}
                        type="text"
                        name="lastname"
                        placeholder="last name"
                        onChange={this.handleChange}
                        value={this.state.lastname}
                      />
                </td>
            </tr>
            <tr>
                <td> <label> Phone No: </label> </td>
                <td> <input
                        ref={(input) => {
                          this.phoneno = input;
                        }}
                        type="text"
                        name="phoneno"
                        placeholder="phone number"
                        onChange={this.handleChange}
                        value={this.state.phoneno}
                      />
                </td>
            </tr>
            <tr>
                <td> <button onClick={()=>{this.props.canBtnPress()}}> Cancel </button> </td>
                <td> <input type="submit" value="Submit" /> </td>
            </tr> 
        </table>
      </form>
    );
  }
}

export default Details;
