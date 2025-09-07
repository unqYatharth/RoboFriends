import React, { useEffect, useState } from "react";
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
  }, []);

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
    !robots.length ?
      <h1>Loading...</h1> :
      (
        <div>
          <h1>ROBOFRIENDS</h1>
          <SearchBox searchField={searchField} setSearchField={setSearchField} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )
  )
}

export default App;