import React from 'react';
import {connect} from 'react-redux'
import {Pie} from 'react-chartjs-2';
import Timeline from 'react-image-timeline';
require('react-image-timeline/dist/timeline.css');

class SpotifyTimelineComponent extends React.Component {
  constructor(props) {
    super(props);
    this.events = props.user.events


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
