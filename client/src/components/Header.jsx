

function Header() {
    return (
        <header className="header">
            <div className="upperHeader">
                <h1 className="h1">CU@LilRedBarn Goats</h1>
                <nav className="homePageLinks"> 
                    <h2><a className="goatLink" href="/">Home</a></h2>
                        <h2><a className="goatLink" href="/Contact">Contact Us</a></h2> 
                </nav>
            </div>
            <nav className="informationLinks">
                <h2><a className="goatLink" href="/Does">Does</a></h2>
                <h2><a className="goatLink" href="/Kids">Kids</a></h2>
                <h2><a className="goatLink" href="/Bucks">Bucks</a></h2>
                <h2><a className="goatLink" href="/ForSale">For Sale</a></h2>
                <h2><a className="goatLink" href="/Sold">Sold</a></h2>
                 <h2><a className="goatLink" href="/Awards">Awards</a></h2>
                <h2><a className="goatLink" href="/Contact">Contact Us</a></h2>
            </nav>


        </header>
    )
}

export default Header;