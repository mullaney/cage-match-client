import React, {Component} from 'react';
import {fetchCagematches} from '../store';
import {connect} from 'react-redux';

export class Cagematch extends Component {
  componentDidMount() {
    const {cagematches, loadCagematches} = this.props;
    if (cagematches.length === 0) {
      loadCagematches();
    }
  }

  render() {
    const {cagematches, match} = this.props;
    const cagematch = cagematches.find(cm => cm.slug === match.params.slug) || {};

    if (!cagematch) {
      return null;
    } else {
      return (
        <div>
          <img src={cagematch.logo_url} />
          <h1>{cagematch.title}</h1>
          <h2>{cagematch.tag_line}</h2>
          <p>{cagematch.show_description}</p>
          <p>
            {cagematch.time_slot}<br />
            at&nbsp;<a href={cagematch.theater_url} target="_blank">{cagematch.theater_name}</a><br />
            {cagematch.venue_address}<br />
            Get <a href={cagematch.box_office_url} target="_blank">tickets online</a>&nbsp;
            or call {cagematch.box_office_phone_number}
          </p>
          <img src={cagematch.show_picture_url} />
        </div>
      );
    }
  }
}

const mapState = state => {
  return {
    cagematches: state.cagematches.cagematches,
  };
};

const mapDispatch = dispatch => {
  return {
    loadCagematches() {
      dispatch(fetchCagematches());
    }
  };
};

export default connect(mapState, mapDispatch)(Cagematch);
