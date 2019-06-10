import React, { useState } from 'react'
import styled from 'styled-components'
import Task from './task'
import '../../styles.css'

const WrapBoard = styled.div`
  margin: 0 4rem;
  display: flex;
  overflow-x: scroll;
  .col {
    background: #dfe1e6;
    margin: 0.5rem 1rem;
    padding: 1rem;
    border-radius: 5px;
    width: 250px;
  }
`

const onDragEnter = (e) => {
  const col = e.target.closest('.col')
  col.classList.add('drag-enter')
}


const onDragStart = (e) => {
  e.target.classList.add('drag-start');
  e.persist()
  setTimeout(() => {
    e.target.classList.add('hidden-item')
  }, 10)
}

const onDragLeave = (e) => {
  if (e.target.classList.contains('col')) {
    e.target.classList.remove("hover-border");
  }
}

const onDrag = (e) => {
}

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
          id: 4,
          content: 'toi noi dong bao co nghe ro khong'
        },
        {
          id: 5,
          content: 'trung voi dan hieu voi nuoc'
        },
        {
          id: 6,
          content: 'hoc tap tot, lao dong tot, doan ket tot, ky luat tot, giu gin ve sinh that tot'
        }
      ]
    },
    {
      id: 3,
      name: 'board 3',
      tasks: [
        {
          id: 7,
          content: 'cong hoa xa hoi chu nghia viet nam doc lap tu do hanh phuc'
        },
        {
          id: 8,
          content: 'yeu to quoc yeu dong dong bao khiem ton that tha dung cam'
        },
        {
          id: 9,
          content: 'khong co gi quy hon doc lap tu do'
        }
      ]
    }
  ])
  return (
    <WrapBoard>
      {
        boards.map((board, index) => (
          <div
            className="col"
            key={index}
            onDragLeave={(e) => onDragLeave(e)}
            onDragEnter={(e) => onDragEnter(e)}
            onDrag={(e) => onDrag(e)}
          >
            {board.name}
            {
              board.tasks.map((task, index) => (
                <Task task={task} key={index} onDragStart={onDragStart}/>
              ))
            }
          </div>
        ))
      }
    </WrapBoard>
  )
}

export default Board
