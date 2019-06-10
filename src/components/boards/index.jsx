import React, { useState } from 'react'
import styled from 'styled-components'
import Task from './task'

const WrapBoard = styled.div`
  margin: 0 4rem;
  display: flex;
  overflow-x: scroll;
  .col {
    background: #dfe1e6;
    margin: 0 1rem;
    padding: 1rem;
    border-radius: 5px;
    width: 250px;
  }
`

function Board () {
  const [boards, updateBoards] = useState([
    {
      id: 1,
      name: 'board 1',
      tasks: [
        {
          id: 1,
          content: 'cong hoa xa hoi chu nghia viet nam'
        },
        {
          id: 2,
          content: 'doc lap tu do hanh phuc'
        },
        {
          id: 3,
          content: 'tha mat nuoc chu khong chiu mat dat'
        }
      ]
    },
    {
      id: 2,
      name: 'board 2',
      tasks: [
        {
          id: 1,
          content: 'toi noi dong bao co nghe ro khong'
        },
        {
          id: 2,
          content: 'trung voi dan hieu voi nuoc'
        },
        {
          id: 3,
          content: 'hoc tap tot, lao dong tot, doan ket tot, ky luat tot, giu gin ve sinh that tot'
        }
      ]
    },
    {
      id: 3,
      name: 'board 3',
      tasks: [
        {
          id: 1,
          content: 'cong hoa xa hoi chu nghia viet nam doc lap tu do hanh phuc'
        },
        {
          id: 2,
          content: 'yeu to quoc yeu dong dong bao khiem ton that tha dung cam'
        },
        {
          id: 3,
          content: 'khong co gi quy hon doc lap tu do'
        }
      ]
    }
  ])
  return (
    <WrapBoard>
      {
        boards.map((board, index) => (
          <div className="col" key={index}>
            {board.name}
            {
              board.tasks.map((task, index) => (
                <Task task={task} />
              ))
            }
          </div>
        ))
      }
    </WrapBoard>
  )
}

export default Board
