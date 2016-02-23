import makeStore from '../src/store'

describe('store', () => {
  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    let action = {type: 'SET_ENTRIES', entries: ['Trainspotting', '28 Days Later']};
    store.dispatch(action);
    expect(store.getState()).to.equal(fromJS({
      entries: ['Trainspotting', '28 Days Later']
    }));
  });
});
