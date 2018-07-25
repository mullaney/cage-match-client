import {Cagematches} from './Cagematches';
import TestRenderer from 'react-test-renderer';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

describe('Cagematches', () => {
  it('should render a list of cagematches', () => {
    const cagematches = [
      {title: 'cage match 1', slug: 'cm1', id: 7}
    ];
    const testCagematches = TestRenderer.create(
      <BrowserRouter><Cagematches cagematches={cagematches} /></BrowserRouter>
    );
    expect(testCagematches.root.findAllByType('li').length).toBe(1);
    expect(testCagematches.root.findAllByType('a')[0].children[0]).toBe('cage match 1');
  });
});
