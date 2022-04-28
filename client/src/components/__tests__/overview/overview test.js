import React from 'react';
import Overview from '../../Overview/Overview.jsx';
import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react';
import {jsdom} from '@testing-library/jest-dom';
import { sampleOverview } from '../../fixtures/overview';

describe('Overview', () => {
  test('Show cart elements', () => {
    const {getByText} = render(<Overview data={sampleOverview} currentStyle={0}/>);
    expect(screen.getByRole('option', {name: "Select a size"})).toBeInTheDocument;
    expect(screen.getByRole('option', {name: "—"})).toBeInTheDocument;
    expect(screen.getAllByRole('combobox')).toHaveLength(2);
    expect(screen.getByRole('button', {name: "ADD TO BAG"})).toBeInTheDocument;
  });
});