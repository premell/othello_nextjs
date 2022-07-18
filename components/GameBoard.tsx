import styled from 'styled-components'
import Disk from '../public/classes/Disk'
import Point from '../public/classes/Point'
import { PlayerColor } from '../public/enums.ts'


// interface GameSquareProps {
//   width: string,
//   height: string,
//   index: number
// }

  //background-color: ${(p: GameSquareProps) => p.index % 2 === 0 ? 'black' : 'white'};

const GameBoardContainer= styled.div`
  margin:20px;
  border: solid #B58863 1px;
  background-color: #F0D9B5;
  width: 500px;
  height:500px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  `

const GameSquare = styled.div`
  border: solid #B58863 2px;
`

interface StyledDiskProps {
  player: number
}
const StyledDisk = styled.div<StyledDiskProps>`
  margin:10%;
  width:80%;
  height:80%;
  background-color: ${p =>  PlayerColor.get(p.player)};
  border-radius: 100%;
`

const boardSquares: Point[] = [];
for (let x = 0; x <= 7; x++) {
  for (let y = 0; y <= 7; y++) {
    boardSquares.push({xPos: x, yPos: y})
  }
}

interface GameBoardProps {
  disks: Disk[]
}

export const GameBoard = ({disks}: GameBoardProps) => {
  return (
    <GameBoardContainer>
      {boardSquares.map((square, index) => 
        <GameSquare key={index}>
          {disks.filter(disk => disk.xPos === square.xPos && disk.yPos === square.yPos).map(disk => 
            <StyledDisk player={disk.player}/> )
            //<StyledDisk color='white'/> )
        }
        </GameSquare>
      )
    }
      {/* {boardSquares.map((index) => ( */}
      {/*   <GameSquare key={index} width="50px" height="50px" index={index}> */}
      {/*      */}
      {/*   </GameSquare> */}
      {/* ))} */}
    </GameBoardContainer>
  )
}
