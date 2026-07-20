import React,{Component} from "react";

class CountPeople extends Component{

constructor(){

super();

this.state={

entrycount:0,

exitcount:0

};

}

updateEntry=()=>{

this.setState({

entrycount:this.state.entrycount+1

});

}

updateExit=()=>{

this.setState({

exitcount:this.state.exitcount+1

});

}

render(){

return(

<div>

<button onClick={this.updateEntry}>
Login
</button>

&nbsp;

{this.state.entrycount} People Entered!!

<br/><br/>

<button onClick={this.updateExit}>
Exit
</button>

&nbsp;

{this.state.exitcount} People Left!!

</div>

);

}

}

export default CountPeople;