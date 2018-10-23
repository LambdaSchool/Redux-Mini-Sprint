export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = (count) => {
  // Fill in this function
  return {
    type: INCREMENT,
    // it can work this way too, but since the reducer already has state.count we don't need a dynamic payload
// payload:count+1
  }
};

export const decrement = (count) => {
  // Fill in this function
return {
  type: DECREMENT,
  //same as for increment
  // payload: count-1
}
};
