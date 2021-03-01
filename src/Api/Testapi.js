import React, { Component } from 'react'

class Testapi extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      items:[],
      isLoaded:false
    }
  }
  componentDidMount(){
   // fetch('https://jsonplaceholder.typicode.com/users')
   fetch('https://api.mocki.io/v1/b043df5a') 
   .then(res =>res.json())
    .then(json =>{
      this.setState({
        isLoaded:true,
        items:json

    })
  })}


  render() {
    let{ isLoaded, items}=this.state;
    if(!isLoaded)
    {
      return <div> Loading</div>
    }else{
      return (
        <div>
          <ul>
              {items.map(item =>(

                <li key={item.uid}>
                 {item.city} | {item.name} 
                </li>

              ))}


          </ul>




        </div>
      )
    }
    return (
      <div>
        
      </div>
    )
  }
}
export default Testapi