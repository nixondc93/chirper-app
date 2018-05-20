import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweets';

class Dashboard extends Component {
  render() {
    console.log('Dashboard Props: ', this.props);
    return (
      <div>
        <h3 className="center" >Your Timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetIds.map((id) => (
              <li className="" key={id} >
                <Tweet id={id} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  console.log('tweets', tweets);
  return {
    tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp),
  };
}
export default connect(mapStateToProps)(Dashboard);
