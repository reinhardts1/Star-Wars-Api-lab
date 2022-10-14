import { useState, useEffect } from "react"
import { getStarshipList } from "../../services/api-calls"
import { Link } from "react-router-dom"
import "./StarshipList.css"

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starships = await getStarshipList()
      setStarships(starships.results)


    }
    fetchStarshipData()
  }, [])
  return (
    <>
      <h1> Starships</h1>
      <div className="ships">
        {starships.map(starship =>
          <Link key={starship.name} to='/starship' state={{ starship }}>
            <h3 id="ship-id">{starship.name} </h3>
          </Link>
        )}
      </div>

    </>
  )
}

export default StarshipList