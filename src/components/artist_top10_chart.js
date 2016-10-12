import React from 'react';
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2';


class BarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      term: "mid_term"
    }

    this.options = {maintainAspectRatio: false}
    this.data = this.data.bind(this)
    this.displayBar= this.displayBar.bind(this)
    this.term = props.term
  }

  data() {
    return ({
    labels: this.labels,
    datasets: [
      {
        label: 'Spotify Popularity Rating',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: this.dataset,
      }
    ]
  })
  }


  displayBar(){
    if (this.state.term== "short_term"){

      this.labels = this.props.data.short_term.artists.slice(0, 10).map( artist => { return (artist.name)})
      this.dataset = this.props.data.short_term.artists.slice(0, 10).map( artist => { return parseInt(artist.popularity)})

      return(
        <div id="bar_size">
          <Bar data={this.data()} width={100} height={600} options={this.options}/>
        </div>
      )
    } if (this.state.term =="mid_term"){
      this.labels = this.props.data.mid_term.artists.slice(0, 10).map( artist => { return (artist.name)})
      this.dataset = this.props.data.mid_term.artists.slice(0, 10).map( artist => { return parseInt(artist.popularity)})

      return(
        <div id="bar_size">
          <Bar data={this.data()} width={100} height={600} options={this.options}/>
        </div>
      )

    } if (this.state.term =="long_term"){
      this.labels = this.props.data.long_term.artists.slice(0, 10).map( artist => { return (artist.name)})
      this.dataset = this.props.data.long_term.artists.slice(0, 10).map( artist => { return parseInt(artist.popularity)})


      return(
        <div id="bar_size">
          <Bar data={this.data()} width={100} height={600} options={this.options}/>
        </div>
      )

    }
  }

  clickHandler(term){
    console.log(term)
    this.setState({
      term: term
    })
  }
render() {
  return (
    <div>
      <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("long_term")}>All Time</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("mid_term")}>Past Four Months</button>
          <br/></div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("short_term")}>Past Month</button>
          <br/></div>
      </div>

  <br></br> <h2>Top Artist Spotify Popularity</h2>
    {this.displayBar()}
  </div>)
}

}

export default BarComponent;
