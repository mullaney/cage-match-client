import {Cagematch} from './Cagematch';
import TestRenderer from 'react-test-renderer';
import React from 'react';

describe('Cagematch', () => {
  it('should render a single Cagematch', () => {
    const cagematches = [
      {title: 'cage match 1', slug: 'cm1', id: 7}
    ];
    const fakeMatch = {
      params: {
        slug: 'cm1'
      }
    };
    const selectedCagematch = 7;
    const testCagematch = TestRenderer.create(
      <Cagematch cagematches={cagematches} match={fakeMatch} />
    );
    expect(testCagematch.root.findAllByType('h1').length).toBe(1);
    expect(testCagematch.root.findAllByType('h1')[0].children[0]).toBe('cage match 1');
  });
});
