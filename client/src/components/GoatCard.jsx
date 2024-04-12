function GoatCard(goatName, paternal, maternal, paternalGrandparents, maternalGrandparents, kidsOn, kidsOff){
    return(
        <div>
            <h2>{goatName}</h2>
            <h3>{maternal}</h3>
            <h3>{paternal}</h3>
            <h4>{maternalGrandparents}</h4>
            <h4>{paternalGrandparents}</h4>
        </div>
    )


}