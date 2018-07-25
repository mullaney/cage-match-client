import reducer, {
  fetchCagematches,
  gotCagematches,
  GOT_CAGEMATCHES
} from './cagematches';
import {apiDomain} from '../api';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe('cagematches store', () => {
  describe('action creators', () => {
    describe('gotCagematches()', () => {
      it('creates an action of type: GOT_CAGEMATCHES with an array of cagematches', () => {
        const cagematches = [{title: 'CageMatch NYC'}, {title: 'CageMatch LA'}];
        const action = gotCagematches(cagematches);
        expect(action.type).toBe(GOT_CAGEMATCHES);
        expect(action.cagematches).toEqual([{title: 'CageMatch NYC'}, {title: 'CageMatch LA'}]);
      });
    });
  });

  describe('thunk creators', () => {
    let store;
    let mockAxios;
    const initialState = {cagematches: []};

    beforeEach(() => {
      mockAxios = new MockAdapter(axios);
      store = mockStore(initialState);
    });
    describe('fetchCagematches', () => {
      it('dispatches the GOT_CAGEMATCHES action', async () => {
        const fakeCagematches = [{title: 'CageMatch London'}];
        mockAxios.onGet(`${apiDomain}/cagematches.json`).replyOnce(200, fakeCagematches);
        await store.dispatch(fetchCagematches());
        const actions = store.getActions();
        expect(actions[0].type).toBe(GOT_CAGEMATCHES);
        expect(actions[0].cagematches).toEqual(fakeCagematches);
      });
    });
  });

  describe('reducer', () => {
    it('changes the array of cagematches in the store', () => {
      const initialState = [];
      const cagematches = [{title: 'CageMatch SF'}, {title: 'CageMatch Orlando'}];
      const action = gotCagematches(cagematches);
      const newState = reducer(initialState, action);
      expect(newState).toEqual({cagematches: [{title: 'CageMatch SF'}, {title: 'CageMatch Orlando'}]});
    });
  });
});
