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
           "date": "Top Artist - 1 Month ",

           "title": this.props.user.short_term.artists[0].name,
           "imageUrl": this.props.user.short_term.artists[0].image,
           "buttonText": "Listen on Spotify",
           "onClick": () => { window.open("https://open.spotify.com/artist/" + this.props.user.short_term.artists[0]["spotify_artist_id"])}
 },
   {
             "date": "Top Artist - 4 Months ",

             "title": this.props.user.mid_term.artists[0].name,
             "imageUrl": this.props.user.mid_term.artists[0].image,
             "buttonText": "Listen on Spotify",
             "onClick": () => { window.open("https://open.spotify.com/artist/" + this.props.user.mid_term.artists[0]["spotify_artist_id"])}

   },
    {
              "date": "Top Artist - All Time",

              "title": this.props.user.long_term.artists[0].name,
              "imageUrl": this.props.user.long_term.artists[0].image,
              "buttonText": "Listen on Spotify",
              "onClick": () => { window.open("https://open.spotify.com/artist/" + this.props.user.long_term.artists[0]["spotify_artist_id"])}
    }
    ]

}

  render() {
    return ( <div> <br/><h2>TimeLine</h2>
      <div>
        <div>
          <Timeline events={this.events}/>
        </div>
      </div>
    </div>)
  }

}

export default SpotifyTimelineComponent;
