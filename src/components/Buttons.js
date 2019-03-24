import React from 'react';
import { ButtonToolbar, DropdownButton } from 'react-bootstrap';

import './App.css';

class Buttons extends React.Component {
  handleSelect = evt => {
    this.props.gridSize(evt);
  };

  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <button className="btn btn-default" onClick={this.props.playButton}>
            Play
          </button>
          <button className="btn btn-default" onClick={this.props.pauseButton}>
            Pause
          </button>
          <button className="btn btn-default" onClick={this.props.clear}>
            Clear
          </button>
          <button className="btn btn-default" onClick={this.props.slow}>
            Slow
          </button>
          <button className="btn btn-default" onClick={this.props.fast}>
            Fast
          </button>
          <button className="btn btn-default" onClick={this.props.seed}>
            Seed
          </button>

          <DropdownButton
            title="Grid Size"
            id="size-menu"
            onSelect={this.handleSelect}
          >
            <DropdownButton.Item eventKey="1">20X10</DropdownButton.Item>
            <DropdownButton.Item eventKey="2">50X30</DropdownButton.Item>
            <DropdownButton.Item eventKey="3">70X50</DropdownButton.Item>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons;
