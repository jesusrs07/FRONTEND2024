const CityCard  = ({weather}) => {
    return(
        <div className="card" style={{width: '18rem'}}>
            <img 
            src={`http:${weather.current.condition.icon}`} 
            className="card-img-top" 
            alt="weather.current.condition.text"/>

            <div className="card-body">
                <h5 className="card-title">{weather.location.name}</h5>
                <p className="card-text">{weather.current.condition.text}</p>
                </div>  
        </div>
    )
}
export default CityCard