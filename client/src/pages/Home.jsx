import { useEffect } from 'react'

function Home(){

    const getGoats = async () => {
        try {
          const response = await fetch('/api/goats');  // Ensuring this matches the backend API route
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Failed to fetch goats:', error);
        }
      };
    useEffect(() => {
        getGoats()
    }, [])

    return(
        <div className="homeBody">
            <div className="wordingHomeBody">
                <h2 className="welcome">Welcome to CU@LilRedBarnGoats</h2>
                <p className="thankYou">Thank you for your interest in our Nigerian Dwarf Dairy Goat Herd</p>
            </div>
        </div> 
    )
}

export default Home;