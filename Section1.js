import { adder } from "./Cart";

function Section1() {
    return(
        <div className="secdisplay">
            <ul>
                <h4>COFF</h4>
                <li>
                    Hot Coffee 
                    <button id="addb1" value={50} onClick={adder("addb1","Hot Coffee")}>Add</button>
                </li>
                <li>
                    Cold Coffee 
                    <button id="addb2" value={40} onClick={adder("addb2","Cold Coffee")}>Add</button> 
                </li>
                <li>
                    Capuccino 
                    <button id="addb3" value={70} onClick={adder("addb3","Capuccino")}>Add</button> 
                </li>
            </ul>
            <ul>
                <h4>MILKSHAKES</h4>
                <li>
                    oreo Milkshake
                    <button id="addb4" value={60} onClick={adder("addb4"," oreo Milkshake")}>Add</button> 
                </li>
                <li>
                    dairymilk Milkshake
                    <button id="addb5" value={70} onClick={adder("addb5","dairymilk Milkshake")}>Add</button> 
                </li>
                <li>
                    Ferro rocher Milkshake 
                    <button id="addb6" value={80} onClick={adder("addb6"," Ferro rocher Milkshake ")}>Add</button> 
                </li>
            </ul>
            <ul>
                <h4>PASTRY ITEMS</h4>
                <li>
                    chiffon Cake 
                    <button id="addb7" value={100} onClick={adder("addb7","chiffon Cake ")}>Add</button> 
                </li>
                <li>
                    pound cake 
                    <button id="addb8" value={80} onClick={adder("addb8","pound cake")}>Add</button> 
                </li>
                <li>
                     Rainbow cookiee
                    <button id="addb9" value={60} onClick={adder("addb9","Rainbow cookiee")}>Add</button> 
                </li>
            </ul>
        </div>
    )
}


export default Section1;