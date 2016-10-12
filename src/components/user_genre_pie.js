import React from 'react';
import {connect} from 'react-redux'
import {Pie} from 'react-chartjs-2';


class PieComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      term: "mid_term"
    }

    this.options = {maintainAspectRatio: false, animateRotate: true, animationEasing: "easeOutCirc", animationSteps: 150, onAnimationComplete : null }
    // this.pieOptions = {animation: true}
    // this.options = {maintainAspectRatio: false, segmentShowStroke: true, animation: true, animationSteps: 150, animationEasing: "easeOutCirc", animateRotate: true, onAnimationComplete : null}
    this.term= this.props.term
    this.displayPie= this.displayPie.bind(this)

  }

  displayPie(){
    if (this.state.term== "short_term"){

      this.labels = Object.keys( this.props.data.short_term.genres)
      this.dataset = this.labels.map((values)=>{return this.props.data.short_term.genres[values]})

      return(
        <div id="pie_size">
          <Pie data={this.data()} width={200} height={200} options={this.options} />
        </div>
      )
    } if (this.state.term =="mid_term"){
      this.labels = Object.keys( this.props.data.mid_term.genres)
      this.dataset = this.labels.map((values)=>{return this.props.data.mid_term.genres[values]})

      return(
        <div id="pie_size">
          <Pie data={this.data()} width={200} height={200} options={this.options} />
        </div>
      )

    } if (this.state.term =="long_term"){
      this.labels = Object.keys( this.props.data.long_term.genres)
      this.dataset = this.labels.map((values)=>{return this.props.data.long_term.genres[values]})

      return(
        <div id="pie_size">
          <Pie data={this.data()} width={200} height={200} options={this.options} />
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




  data() {
    return ({
            labels: this.labels,
            datasets: [
                      {
                        data: this.dataset,
                        backgroundColor: [

                                          "#FF4633",
                                          "#55FF33",
                                          "#33FFBB",
                                          "#C5CBC9",
                                          "#FF6384",
                                          "#36A2EB",
                                          "#FFCE56",
                                          "#FF9900",
                                          "#330033"
                                        ],
                        hoverBackgroundColor: [

                                                "#FF4633",
                                                "#55FF33",
                                                "#33FFBB",
                                                "#C5CBC9",
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
  return (
    <div>
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("long_term")}>As Long Ago As You Can Remember</button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("mid_term")}>Four Months Ago</button>
            <br/></div>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("short_term")}>Four Weeks Ago</button>
            <br/></div>
        </div>
    <br/><h2>{this.term} Breakdown of Genres</h2>
    <div>
      {this.displayPie()}
    </div>
  </div>)
}

}

export default PieComponent;
