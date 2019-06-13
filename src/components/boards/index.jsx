import React, { useState } from 'react'
import styled from 'styled-components'
import Task from './task'
import Demo from './demo'
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
  
  // node demo
  const _demoItem = document.createElement('div')
  _demoItem.classList.add('demo-task')
  let _textDemo = ''
  let _columnCurrent = -1
  
  const onDragStart = (e) => {
    _textDemo = e.target.innerHTML
    e.target.classList.add('drag-start')

    const indexTask = e.target.id
    const indexList = e.target.parentNode.dataset.list
    e.dataTransfer.setData('indexTask', indexTask)
    e.dataTransfer.setData('indexList', indexList)

    e.persist()
    setTimeout(() => {
      e.target.classList.add('hidden-item')
    }, 10)
  }

  const onDragEnter = (e) => {
    const col = e.target.closest('.col')
    col.classList.add('drag-enter')
    _columnCurrent = col.id
  }
  
  const onDragLeave = (e) => {
    const col = e.target.closest('.col')
    if (col.id !== _columnCurrent) {
      col.classList.remove('drag-enter')
      _columnCurrent = -1
    }
  }

  const onDragOver = (e) => {
    // allow drop
    e.preventDefault()
    const nearItem = e.target.closest('.task')
    if (nearItem) {
      const position = nearItem.getBoundingClientRect()
      if (e.clientY <= position.top + position.height / 2) {
        nearItem.parentNode.insertBefore(_demoItem, nearItem)
        // inser text demo
        setInterval(() => {
          _demoItem.innerHTML = _textDemo
        }, 10)
      } else if (e.clientY > position.bottom - position.height / 2) {
        nearItem.parentNode.insertBefore(_demoItem, nearItem.nextSibling)
        setInterval(() => {
          _demoItem.innerHTML = _textDemo
        }, 10)
      }
    }
  }

  const onDrop = (e) => {
    e.preventDefault()
    const indexListTarget = e.target.closest('.col').dataset.list
    _demoItem.classList.remove('demo-task')
    _demoItem.classList.add('task')
    const indexTask = e.dataTransfer.getData('indexTask')
    const indexList = e.dataTransfer.getData('indexList')

    const listTaskOld = boards.slice(indexList, indexList + 1)[0]

    const itemChoose = listTaskOld.tasks.filter((task, index) => {
      return index === parseInt(indexTask)
    })
    const updateListTaskOld = listTaskOld.tasks.filter((task, index) => {
      return index !== parseInt(indexTask)
    })

    const updateListBoardOld = {
      id: listTaskOld.id,
      name: listTaskOld.name,
      tasks: updateListTaskOld
    }

    boards[indexList] = updateListBoardOld
    boards[indexListTarget].tasks.push(itemChoose[0])

    updateBoards(boards)
  }

  return (
    <WrapBoard>
      <Demo board={boards} />
      {
        boards.map((board, index) => (
          <div
            className="col"
            data-list={index}
            key={index}
            onDragLeave={(e) => onDragLeave(e)}
            onDragEnter={(e) => onDragEnter(e)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e)}
          >
            {board.name}
            {
              board.tasks.map((task, index) => (
                <Task
                  task={task}
                  key={index}
                  index={index}
                  onDragStart={onDragStart} 
                />
              ))
            }
          </div>
        ))
      }
    </WrapBoard>
  )
}

export default Board
