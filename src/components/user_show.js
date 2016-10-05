import React from 'react'
import {connect} from 'react-redux'
import ArtistShow from './artist_show'
import {Bar} from 'react-chartjs-2';
import BarComponent1 from './artist_top10_chart'

function UserShow(props) {

var labels = props.user.mid_term["artists"].slice(0, 10).map( artist => { return (artist.name)})

var art_pop = props.user.mid_term["artists"].slice(0, 10).map( artist => { return parseInt(artist.popularity)} )

  const data = {
  labels: labels,
  datasets: [
    {
      label: 'Top 10 Artists Popularity',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: art_pop,
    }
  ]
};

var options = {maintainAspectRatio: false}

  var BarComponent = React.createClass({
  displayName: 'BarExample',

  render() {
    return (
      <div> <br/> <br/> <h2>Top 10 Artists</h2>
        <div>
          <Bar data={data} width={100} height={600} options={options}/>
        </div>
      </div>
    );
  }
});








function createArtists(props) {
  return props.user.mid_term["artists"].map( artist => {
    return (<ArtistShow name={artist.name} rank={artist.rank} image={artist.image}/>)
  })
}

  return(
    <div>
      <h1>{props.user.username}</h1>
      {createArtists(props)}
      <BarComponent1 user={props.user}/>

    </div>

  )

}

function mapStateToProps(state, ownProps) {
const user = state.users.find((user) => {return user.id == ownProps.params.id})
return {user: user}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
