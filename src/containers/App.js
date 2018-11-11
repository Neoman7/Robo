import React, {Component} from 'react';
import Cardlist from '../components/Cardlist'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'


class App extends Component{
  constructor () {
    super()
    this.state = {
      robots: [],
      searcfield: ''
    }
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users=> {this.setState({robots: users})});
}

onSeachChange = (event) => {
  this.setState({searcfield: event.target.value})
}

  render() {
  const filteredRobots = this.state.robots.filter(robot =>{
    return robot.name.toLowerCase().includes(this.state.searcfield.toLowerCase());
  })
 return (
        <div className= 'tc'>
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange={this.onSeachChange}/>
          <Scroll>
          <Cardlist robots={filteredRobots}/>
          </Scroll>
        </div>
    );

  }
}


export default App;