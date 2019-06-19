import React from 'react'
import styled from 'styled-components'
import Task from '../tasks/task'
import AddTask from '../tasks/add-task'
import { getRandomInt } from '../../utils'
import '../../styles.css'

// node demo
const _demoItem = document.createElement('div')
_demoItem.classList.add('demo-task')
let _textDemo = ''
// index to insert
let _indexInsert = -1

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      boards: [
        { 
          id: 1,
          name: 'Board 1',
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
          name: 'Board 2',
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
          name: 'Board 3',
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
      ]
    }
  }
  
  onDragStart = (e) => {
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

  removeBorderBoard = () => {
    const boardHoverOld = document.getElementsByClassName('border-board')[0]
    if (boardHoverOld) {
      boardHoverOld.classList.remove('border-board')
    }
  }

  onDragOver = (e) => {
    // allow drop
    e.preventDefault()
    this.removeBorderBoard()
    const col = e.target.closest('.col')
    col.classList.add('border-board')
    

    const nearItem = e.target.closest('.task')
    if (nearItem) {
      const position = nearItem.getBoundingClientRect()
      if (e.clientY <= position.top + position.height / 2) {
        nearItem.parentNode.insertBefore(_demoItem, nearItem)
        _indexInsert = parseInt(nearItem.id)
        // inser text demo
        const insertDom = setInterval(() => {
          _demoItem.innerHTML = _textDemo
          clearInterval(insertDom)
        }, 10)
      } else if (e.clientY > position.bottom - position.height / 2) {
        nearItem.parentNode.insertBefore(_demoItem, nearItem.nextSibling)
        _indexInsert = parseInt(nearItem.id) + 1;
        const insertDom = setInterval(() => {
          _demoItem.innerHTML = _textDemo
          clearInterval(insertDom)
        }, 10)
      }
    }
  }

  onDrop = (e) => {
    e.preventDefault()
    this.removeBorderBoard()
    const indexListTarget = e.target.closest('.col').dataset.list
    _demoItem.parentNode.removeChild(_demoItem)
    const indexTask = e.dataTransfer.getData('indexTask')
    const indexList = e.dataTransfer.getData('indexList')

    const taskPicked = this.state.boards[indexList].tasks[indexTask]
    const boardsOld = this.state.boards
    
    boardsOld[indexListTarget].tasks.splice(_indexInsert, 0, taskPicked)
    boardsOld[indexList].tasks.splice(indexTask, 0)

    this.setState({
      boards: boardsOld
    })
  }

  renderListBoards = () => {
    return(
      this.state.boards.map((board, index) => (
        <WrapColumn
          bgImg={index}
          className="col"
          data-list={index}
          key={index}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e)}
        >
          <p className="title-board">{board.name}</p>
          {
            board.tasks.map((task, index) => (
              <Task
                task={task}
                key={index}
                index={index}
                onDragStart={this.onDragStart}
              />
            ))
          }
          <AddTask addTask={({ indexColumn, content }) => this.addTask({ indexColumn, content })}/>
        </WrapColumn>
      ))
    )
  }

  renderAddBoard = () => {
    return (
      <div className="add-board">
        Add board
      </div>
    )
  }

  addTask = ({ indexColumn, content }) => {
    this.state.boards[indexColumn].tasks.push({
      id: getRandomInt(1000),
      content: content
    })
  }

  render() {
    return (
      <WrapBoard>
        {this.renderListBoards()}
        {this.renderAddBoard()}
      </WrapBoard>
    )
  }
}

const WrapBoard = styled.div`
  margin: 0 4rem;
  display: flex;
  overflow-x: scroll;
`

const WrapColumn = styled.div`
  background: #dfe1e6;
  margin: 0.5rem 1rem;
  padding: 1rem;
  border-radius: 5px;
  width: 250px;
  background-image: ${props => `url(../../images/bg-${props.bgImg}.png)`};
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export default Board
