import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { screen, getByText } from '@testing-library/dom'
import App from './components/App.jsx';
import "regenerator-runtime/runtime.js";


describe('Detects a click', () => {
  test('Detects a click on column 0', async (done) => {
    const { getByText } = render(<App />);
    var redMessage, blueMessage, blueWinMessage, redWinMessage;
    const rowHeads = screen.getAllByText('O');

    redMessage = screen.queryAllByText('It\'s red\'s turn.');
    expect(redMessage.length).toBe(1);

    fireEvent.click(rowHeads[0]);
    redMessage = screen.queryAllByText('It\'s red\'s turn.');
    blueMessage = screen.queryAllByText('It\'s blue\'s turn.');
    expect(redMessage.length).toBe(0);
    expect(blueMessage.length).toBe(1);
    done();
  });
})

describe('Detects red wins', () => {

  test('Detects a red horizontal win', (done) => {
    const { getByText } = render(<App />);
    var redWinMessage;
    const rowHeads = screen.getAllByText('O');

    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[2]);
    fireEvent.click(rowHeads[2]);
    fireEvent.click(rowHeads[3]);

    redWinMessage = screen.queryAllByText('red is the winner!');
    expect(redWinMessage.length).toBe(1);
    done();
  });

  test('Detects a red vertical win', (done) => {
    const { getByText } = render(<App />);
    var redWinMessage;
    const rowHeads = screen.getAllByText('O');

    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[0]);

    redWinMessage = screen.queryAllByText('red is the winner!');
    expect(redWinMessage.length).toBe(1);
    done();
  });

  test('Detects a red major diagonal win', (done) => {
    const { getByText } = render(<App />);
    var redWinMessage;
    const rowHeads = screen.getAllByText('O');

    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[2]);
    fireEvent.click(rowHeads[2]);
    fireEvent.click(rowHeads[2]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);

    redWinMessage = screen.queryAllByText('red is the winner!');
    expect(redWinMessage.length).toBe(1);
    done();
  });

  test('Detects a red minor diagonal win', (done) => {
    const { getByText } = render(<App />);
    var redWinMessage;
    const rowHeads = screen.getAllByText('O');

    fireEvent.click(rowHeads[6]);
    fireEvent.click(rowHeads[5]);
    fireEvent.click(rowHeads[5]);
    fireEvent.click(rowHeads[6]);
    fireEvent.click(rowHeads[4]);
    fireEvent.click(rowHeads[4]);
    fireEvent.click(rowHeads[4]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);

    redWinMessage = screen.queryAllByText('red is the winner!');
    expect(redWinMessage.length).toBe(1);
    done();
  });
})

describe('Detects blue wins', () => {

  test('Detects a blue horizontal win', (done) => {
    const { getByText } = render(<App />);
    var blueWinMessage;
    const rowHeads = screen.getAllByText('O');

    fireEvent.click(rowHeads[6])
    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[2]);
    fireEvent.click(rowHeads[2]);
    fireEvent.click(rowHeads[3]);

    blueWinMessage = screen.queryAllByText('blue is the winner!');
    expect(blueWinMessage.length).toBe(1);
    done();
  });

  test('Detects a blue vertical win', (done) => {
    const { getByText } = render(<App />);
    var blueWinMessage;
    const rowHeads = screen.getAllByText('O');

    fireEvent.click(rowHeads[6]);
    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[0]);

    blueWinMessage = screen.queryAllByText('blue is the winner!');
    expect(blueWinMessage.length).toBe(1);
    done();
  });

  test('Detects a blue major diagonal win', (done) => {
    const { getByText } = render(<App />);
    var blueWinMessage;
    const rowHeads = screen.getAllByText('O');

    fireEvent.click(rowHeads[6]);
    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[1]);
    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[2]);
    fireEvent.click(rowHeads[2]);
    fireEvent.click(rowHeads[2]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);

    blueWinMessage = screen.queryAllByText('blue is the winner!');
    expect(blueWinMessage.length).toBe(1);
    done();
  });

  test('Detects a blue minor diagonal win', (done) => {
    const { getByText } = render(<App />);
    var blueWinMessage;
    const rowHeads = screen.getAllByText('O');

    fireEvent.click(rowHeads[0]);
    fireEvent.click(rowHeads[6]);
    fireEvent.click(rowHeads[5]);
    fireEvent.click(rowHeads[5]);
    fireEvent.click(rowHeads[6]);
    fireEvent.click(rowHeads[4]);
    fireEvent.click(rowHeads[4]);
    fireEvent.click(rowHeads[4]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);
    fireEvent.click(rowHeads[3]);

    blueWinMessage = screen.queryAllByText('blue is the winner!');
    expect(blueWinMessage.length).toBe(1);
    done();
  });
});

describe('Detects a tie', () => {

  test('Detects a tie', (done) => {
    const { getByText } = render(<App />);
    var blueWinMessage, redWinMessage, tieMessage;
    const rowHeads = screen.getAllByText('O');
    var moves = [0,0,1,1,2,2,4,4,5,5,6,6,0,0,1,1,2,2,4,4,5,5,6,6,0,0,1,1,2,2,4,4,5,5,6,3,3,3,3,3,3,6];
    moves.forEach((move) => {
      fireEvent.click(rowHeads[move]);
    })

    tieMessage = screen.queryAllByText("It's a tie!");
    expect(tieMessage.length).toBe(1);

    done();
  });

})