
 function CitySelector ({data,handleSelect}){

    return <>
    
    <form><label>
        Выберите город:
        <select onChange={()=>{handleSelect(event.target.value)}}>
          <option value={'Выберите город'} >{"Выберите город"}</option>
          {data.map((city, index)=>{return <option value={city.name} key={index}>{city.name}</option>})}
        </select>
      </label></form></>
}

export default CitySelector;