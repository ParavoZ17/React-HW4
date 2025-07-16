import { useState } from "react";
import Answer from "./Answer";

function MathQuiz (){
    
    const [point, setPoint] = useState(0);
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);


function reciveAntwort (value) {
    
     if (a + b === Number(value)) {
    setPoint((prev)=>prev + 1)
}    else {setPoint((prev)=>prev - 1)}

}

 return <><div>
<h1>Your Points: {point}</h1>
<p>{a} + {b} = ?</p>
           </div>
           <Answer reciveAntwort={reciveAntwort}/>
           </>
}

export default MathQuiz;