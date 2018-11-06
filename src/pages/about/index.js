import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import React from 'react';

class about extends React.Component {
  render() {
    return (
      <div>
        <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
      </div>
    )
  }
}

export default about;
