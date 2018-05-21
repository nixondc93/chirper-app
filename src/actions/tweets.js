import authedUser from '../reducers/authedUser';
import { saveLikeToggle, saveTweet} from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export const ADD_TWEET = 'ADD_TWEET'; 

function addTweet(tweet) {
  console.log('addtweet action')
  return {
    type: ADD_TWEET,
    tweet,
  };
}

export function handleAddTweet(text, replyingTo) {
  console.log('handling tweet action')
  return (dispatch, getState) => {
    dispatch(addTweet);
    const { authedUser } = getState();
    dispatch(showLoading)
    return saveTweet({
      text, 
      replyingTo, 
      author: authedUser, 
      })
      .then((tweet) => dispatch(addTweet))
      .then(hideLoading()); 
  };
}

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

function toggleTweet({id, authedUser, hasLiked}) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  }
}

export function handleToggleTweet(info) {

  return (dispatch) => {
    dispatch(toggleTweet(info));
    return saveLikeToggle(info)
      .catch(e => {
        console.error('Error while likeing tweet', e);
        dispatch(toggleTweet);
      }); 
  }
}