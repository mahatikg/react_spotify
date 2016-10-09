import React from 'react';
import {connect} from 'react-redux'
import {Pie} from 'react-chartjs-2';
import Timeline from 'react-image-timeline';
require('react-image-timeline/dist/timeline.css');

class SpotifyTimelineComponent extends React.Component {
  constructor(props) {
    super(props);

 this.events = [
    {
              "date": "Long Term",
              "text": "Your Top all time artist",
              "title": this.props.user.long_term.artists[0].name,
              "imageUrl": this.props.user.long_term.artists[0].image
    }, {
              "date": "Medium Term",
              "text": "Your Top Artist for the past 3 months",
              "title": this.props.user.mid_term.artists[0].name,
              "imageUrl": this.props.user.mid_term.artists[0].image
    }, {
            "date": "Short Term",
            "text": "Your Top Artist for the past month",
            "title": this.props.user.short_term.artists[0].name,
            "imageUrl": this.props.user.short_term.artists[0].image
  }
    ]

}

  render() {
    return ( <div> <br/><h2>TimeLine</h2>
      <div>
        <div>
          <Timeline events={this.events} />
        </div>
      </div>
    </div>)
  }

}

export default SpotifyTimelineComponent;
