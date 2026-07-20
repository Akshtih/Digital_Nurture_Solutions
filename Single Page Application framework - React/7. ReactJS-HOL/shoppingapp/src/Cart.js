import React,{Component} from "react";

class Cart extends Component{

render(){

return(

<table border="1">

<thead>

<tr>

<th>Name</th>

<th>Price</th>

</tr>

</thead>

<tbody>

{this.props.items.map(item=>(

<tr key={item.itemname}>

<td>{item.itemname}</td>

<td>{item.price}</td>

</tr>

))}

</tbody>

</table>

);

}

}

export default Cart;