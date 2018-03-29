import React, { Component } from 'react';

import Slots from './Slots'
import Details from './Details';
class App extends Component {
  state = {
    showDetails: false,
    data: []
  }
  render() {
    var rows =[];
    for(var i=9; i<=17; i++){
			rows.push(<Slots 
									start={i}
									end={i+1}
									key={i}
                  sp={i}
                  data={this.state.data}
                  btnPress={(key)=>{
                    console.log(key);
                    this.setState({
                      showDetails: true,
                      currentSp: key,
                    })
                  }}
								/>
							);
		}
    return (
      <div>
        {!this.state.showDetails && (
          <div>
          <h1> Slots </h1>
				  {rows}
          </div>
        )}
        {this.state.showDetails && (
          <div>
            <Details 
            data={this.state.data}
            sp={this.state.currentSp}
            onSubmit={(sp, name, lname, pno)=>{
              console.log("sp",sp);
              this.setState({
                showDetails: false,
                data:{
                  ...this.state.data,
                  [sp]: {
                    name: name,
                    lastname: lname,
                    phoneno: pno,
                  }
                }
              })
            }}
            canBtnPress={()=>{
              this.setState({
                showDetails: false
              })
            }}/>
          </div>
        )}
        
      </div>
    );
  }
}

export default App;
