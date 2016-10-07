import React from 'react';
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2';


class BarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.labels = props.user.mid_term["artists"].slice(0, 10).map( artist => { return (artist.name)})
    this.art_pop = props.user.mid_term["artists"].slice(0, 10).map( artist => { return parseInt(artist.popularity)} )
    this.options = {maintainAspectRatio: false}
    this.data = this.data.bind(this)
  }

  data() {
    return ({
    labels: this.labels,
    datasets: [
      {
        label: 'Spotify Popularity ratings of your Top 10 Artists',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: this.art_pop,
      }
    ]
  })
  }


render() {
  return ( <div> <br/> <br/> <h2>Top 10 Artists</h2>
    <div>
      <Bar data={this.data()} width={100} height={600} options={this.options}/>
    </div>
  </div>)
}

}

export default BarComponent;
