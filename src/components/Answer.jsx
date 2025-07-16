import { useState } from "react";
function Answer ({reciveAntwort}){

    const [value, setValue] = useState('')

   function handleSubmit (event){
    event.preventDefault();
    if (value.trim( ) === '' )return;
    reciveAntwort(value);
    setValue("")

   }

    return <>
    <form onSubmit={handleSubmit}>
        <input type="number" onChange={(e) => setValue(e.target.value) } value={value}/>
        <input type="submit" value={'Проверить'} /></form></>
}

export default Answer;  