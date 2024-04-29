function GoatCard(goatName, paternal, maternal, paternalGrandparents, maternalGrandparents, kidsOn, kidsOff, image, awards){
    return(
        <div>
            <h2>{goatName}</h2>
            <img src={image}></img>
            <h3>{awards}</h3>
            <h3><a href="">{maternal.name}</a></h3>
            <h3><a href="">{paternal.name}</a></h3>
            <h4><a href="">{maternalGrandparents.name}</a></h4>
            <h4><a href="">{paternalGrandparents.name}</a></h4>

            <div class="names">
            <h4>Kids on Farm</h4>
                {kidsOn.map((kid, index) => {
                    return (
                        <h5 key={index}>{kid.name}</h5>
                    )
                })}
            <h4>Kids off Farm</h4>
                {kidsOff.map((kid, index) =>{
                    return(
                        <h5 key={index}>{kid.name}</h5>
                    )
                })}
            </div>
        </div>
    )

}

export default GoatCard;