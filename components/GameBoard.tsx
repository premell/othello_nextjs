
interface GameSquareProps {
  index: int,
  size: int
}


const GameSquare: React.FC<GameSquareProps> = ({ index, size = 50}) => {
  return <div style={{width: size, height: size, backgroundColor: 'red' }}>1</div>
}

export const GameBoard = (props : {}) => {

  const boardSquares: int[] = Array.from(Array(64).keys())

  return (
    <div class="game_board">
      {boardSquares.map(number => <GameSquare index={number}/>)}
    </div>
  )
}
