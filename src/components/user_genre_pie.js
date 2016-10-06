import React from 'react';
import {connect} from 'react-redux'
import {Pie} from 'react-chartjs-2';


class PieComponent extends React.Component {
  constructor(props) {
    super(props);
    this.labels = Object.keys( props.user.genre_count)
    this.dataset = this.labels.map(function(values){return props.user.genre_count[values]})
    debugger
  }



  data() {
    return ({
            labels: this.labels,
            datasets: [
                      {
                        data: this.dataset,
                        backgroundColor: [
                                          "#FF6384",
                                          "#36A2EB",
                                          "#FFCE56"

                                        ],
                        hoverBackgroundColor: [
                                                "#FF6384",
                                                "#36A2EB",
                                                "#FFCE56",
                                                "cc65fe",

                
                                              ]
                      }
                      ]
            })
          }

render() {
  return ( <div> <br/> <br/> <h2>Breakdown of Genre Popularity</h2>
    <div>
      <Pie data={this.data()} width={10} height={10} options={this.options}/>
    </div>
  </div>)
}

}

export default PieComponent;
