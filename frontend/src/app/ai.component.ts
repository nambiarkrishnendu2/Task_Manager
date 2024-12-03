import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AIComponent implements OnInit {
  player = {
    name: 'Chad Thaddeus Bradley',
    rating: 575,
    description: 'Chad Thaddeus Bradley is king of the frats and king of the chessboard. Can you bro out and beat Big Bad Chad Thad Brad?'
  };

  opponents = [
    { name: 'Chad Thaddeus Bradley', rating: 575, image: 'https://i.pinimg.com/originals/0d/91/fc/0d91fc167ad90f24c2afc93f23df5257.jpg' },
    { name: 'Opponent 2', rating: 600, image: 'https://th.bing.com/th/id/OIP.VAYYysxfF6CBpXHRRLG3vAHaHa?rs=1&pid=ImgDetMain' },
    { name: 'Opponent 3', rating: 620, image: 'https://th.bing.com/th/id/OIP.FIO8BAMBTwKSSIRh0mpwaQHaHa?rs=1&pid=ImgDetMain' }
  ];

  selectedOpponent: any;
  board: string[][] = [];
  selectedPiece: { row: number, col: number } | null = null;

  ngOnInit() {
    this.initializeBoard();
  }

  initializeBoard() {
    this.board = [
      ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
      ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
      ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    ];
  }

  selectOpponent(opponent: any) {
    this.selectedOpponent = opponent;
  }

  startGame() {
    if (this.selectedOpponent) {
      console.log('Starting game against:', this.selectedOpponent.name);
    } else {
      alert('Please select an opponent');
    }
  }

  movePiece(row: number, col: number) {
    if (this.selectedPiece) {
      this.board[row][col] = this.board[this.selectedPiece.row][this.selectedPiece.col];
      this.board[this.selectedPiece.row][this.selectedPiece.col] = '';
      this.selectedPiece = null;
    } else if (this.board[row][col] !== '') {
      this.selectedPiece = { row, col };
    }
  }
}
