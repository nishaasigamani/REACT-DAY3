import './Section1.js';

var total=0;

function Cart() {
    return(
        <div className="cart">
            <h6>cart items</h6>
            <button onClick={totalam}>order</button>
            <section id='cartsection'>
            </section>
        </div>
    )
}

function totalam () 
{
    const f = document.createElement("h4");
    const sec = document.getElementById('cartsection');
    f.append("Thank You :)!!   ");
    f.append("TODAY YOU JUST ORDERED RS.",total);
    sec.append(f);
    console.log(total);
}

var adder = (x,y) => () =>
{
    var v = document.getElementById(x).value;
    console.log(v);
    console.log(y);
    var sec = document.getElementById('cartsection');
    const p = document.createElement("p");
    p.append(y," ",v);
    sec.append(p);
    total = parseInt(total) + parseInt(v);
    console.log(total);
}

export {Cart,adder};