import trainers from "./TrainersMock";
import { Link } from "react-router-dom";

function TrainersList(){

return(

<div>

<h2>Trainer List</h2>

<ul>

{trainers.map(t=>(
<li key={t.id}>
<Link to={`/trainer/${t.id}`}>
{t.name}
</Link>
</li>
))}

</ul>

</div>

);

}

export default TrainersList;