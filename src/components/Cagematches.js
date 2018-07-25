import React, {Component} from 'react';
import {fetchCagematches} from '../store';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class Cagematches extends Component {
  componentDidMount() {
    const {cagematches, loadCagematches} = this.props;
    if (cagematches.length === 0) {
      loadCagematches();
    }
  }

  render() {
    const {cagematches} = this.props;
    return (
      <div>
        <h1>Select a cagematch</h1>
        <ul>
          {cagematches.map(cagematch => (
            <li key={cagematch.id} ><Link to={`/${cagematch.slug}`} >{cagematch.title}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    cagematches: state.cagematches.cagematches
  };
};

const mapDispatch = dispatch => {
  return {
    loadCagematches() {
      dispatch(fetchCagematches());
    }
  };
};

export default connect(mapState, mapDispatch)(Cagematches);
