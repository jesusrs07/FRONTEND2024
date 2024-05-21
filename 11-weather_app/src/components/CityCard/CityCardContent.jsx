const CityCardContent = ({weather}) => {
    const dayStyle = 'lightblue'
    const nigthStyle = '#666'
    const style = weather.current.is_day ? dayStyle : nigthStyle


    return(
        <>
         <img 
            src={`http:${weather.current.condition.icon}`} 
            className="card-img-top mt-2" 
            alt="weather.current.condition.text"
            style={{backgroundColor: style}}/>

            <div className="card-body">
                <h5 className="card-title">{`${weather.location.name}, ${weather.location.region} - ${weather.location.country}`}</h5>
                <p className="card-text">{weather.current.condition.text}</p>
                <p className="card-text">
                   <i className="bi bi-thermometer-half text-danger"></i>&nbsp;{`${weather.current.temp_c}°C`}&nbsp;&nbsp;&nbsp;
                   <i className="bi bi-droplet-half text-primary"></i>&nbsp;{`${weather.current.humidity}%`}&nbsp;&nbsp;&nbsp;
                   <i className="bi bi-wind text-success"></i>&nbsp;{`${weather.current.wind_kph}kph`}
                   </p>
                </div> 
        </>
    )
}

export default CityCardContent