import React, { Component } from 'react';
import hotels from '../data/hotels.js'
import Hotel from './Hotel';
// import Modal from './Modal';



/*=============================================
=            Hotel List            =
=============================================*/
class HotelList extends Component {
  constructor(props){
    super(props);
    this.state = {
      hotels: hotels,
    }
  }
  render(){
    const hotels = this.state.hotels.map((hotel, index) =>
      <Hotel key={index}
      id={hotel.id}
      title={hotel.name}
      rating={hotel.rating}
      price={hotel.price}
      image={hotel.image_url}
      url={hotel.url}
      display_phone={hotel.display_phone}
      />);

    console.log(hotels);

    return(
      <div className="container-fluid">
        <h1>Hotels</h1>
        <div className="row">
          {hotels}
        </div>
      </div>
    );
  }
}

/*----------  Subsection comment block  ----------*/

// const username = (username) => `https://api.github.com/users/${username}`;

// class Github extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       requestFailed: false
//     };
//   }
//   componentDidMount(){
//     fetch(username(this.props.username))
//       .then(data => data.json())
//       .then(data => {
//         this.setState({
//           githubData: data
//         });
//       });
//   }

//   render(){
//     if(this.state.requestFailed) return  <p>Failed!</p>
//     if(!this.state.githubData) return <p> Loading</p>
//     console.log(this.state.githubData)
//     return (
//       <div className='wrapper'>
//         <div className='heading'>
//           <img src={this.state.githubData.avatar_url} className='avatar' />
//           <h2 className='name'>{this.state.githubData.name}</h2>
//           <a className='btn' target='_blank' href={this.state.githubData.html_url}>+</a>
//           <p>{this.state.githubData.location}</p>
//         </div>
//         <div className='about'>
//           <p>
//             <span>{this.state.githubData.followers}</span>
//             <label>Followers</label>
//           </p>
//           <p>
//             <span>{this.state.githubData.following}</span>
//             <label>Following</label>
//           </p>
//           <p>
//             <span>
//               <a href={this.state.githubData.repos_url}>
//                 {this.state.githubData.public_repos}
//               </a>
//             </span>
//              <label>Repos</label>
//           </p>
//         </div>
//       </div>
//     )
//   }
// }

// const App = () => {
//   return (
//     <div className='container'>
//       <Github username='yoloOnTheBattlefield'/>
//     </div>
//   )
// }


export default HotelList;



