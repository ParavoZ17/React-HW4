

  function CityCard ({data}){
    console.log(data.facts)
        return <>
        <h2>{data.name}</h2>
        <img src={data.imageUrl} alt={data.cityName} />
        <p>{data.description}</p>
        <ul>{data.facts.map((fact, index)=>{return <li key={index}><p>{fact}</p></li>})}</ul>
    </>
    }

export default CityCard;