import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = [0], action) => {
  switch (action.type) {
    case INCREMENT:
      return count.map(count =>  count += action.payload)
    case DECREMENT:
      return count.map(count =>  count += action.payload)
    // Fill in the body of this case
    default:
      return count;
  }
};
