import React from 'react';
import {connect} from 'react-redux'
import {Pie} from 'react-chartjs-2';


class PieComponent extends React.Component {
  constructor(props) {
    super(props);
    this.labels = Object.keys( props.user.genre_count)
    this.dataset = this.labels.map(function(values){return props.user.genre_count[values]})
    this.options = {maintainAspectRatio: false}
    // this.options = {maintainAspectRatio: false, segmentShowStroke: true, animation: true, animationSteps: 150, animationEasing: "easeOutCirc", animateRotate: true, onAnimationComplete : null}

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
                                          "#FFCE56",
                                          "#FF9900",
                                          "#330033"

                                        ],
                        hoverBackgroundColor: [
                                                "#FF6384",
                                                "#36A2EB",
                                                "#FFCE56",
                                                "#FF9900",
                                                "#330033"



                                              ]
                      }
                      ]
            })
          }

render() {
  return ( <div> <br/> <br/> <h2>Breakdown of Genre Popularity</h2>
    <div>
      <div id="pie_size">
        <Pie data={this.data()} width={200} height={200} options={this.options}/>
      </div>
    </div>
  </div>)
}

}

export default PieComponent;
