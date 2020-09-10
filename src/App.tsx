import React, { Component } from 'react';
import './App.css';
import { Board } from './board/Board';

export default class extends Component {

  private b: any;

  private drops: { row: number, col: number }[] = [];

  private nRows: number = 0;
  private nCols: number = 0;

  componentWillMount() {
    this.nRows = Math.floor(window.innerHeight / 30);
    this.nCols = Math.floor(window.innerWidth / 30);

    this.b = [];
    for (let row = 0; row < this.nRows; row++) {
      this.b[row] = [];
      for (let col = 0; col < this.nCols; col++) {
        this.b[row][col] = 0;
      }
    }

    let dCol = 0;
    for (let col = 0; col < this.nCols; col += 10) {
      this.drops.push({ row: 0, col: dCol });
      dCol += 10;
    }
  }

  private functick = () => {

    for (const drop of this.drops) {
      drop.row = (drop.row + Math.floor(Math.random() * 2)) % this.nRows;
      drop.col = (drop.col + Math.floor(Math.random() * 2)) % this.nCols;
      console.log(drop.row, drop.col);
      this.b[drop.row][drop.col] = (this.b[drop.row][drop.col] + 50) % 360;
    }

    return this.b;
  };

  render() {
    return (
      <Board tick={this.functick}></Board>
    );
  }
}
