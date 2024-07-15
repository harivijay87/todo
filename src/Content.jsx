import React from 'react'

const Content = ({list, setList, textValue, setTextValue, dateValue, setDateValue, addTodo, removeTodo}) => {

  return (
    <main>

      <div className='input-slot'>
        <input className='add-text'
          type="text"
          placeholder='Add todo'
          value={textValue}
          onChange = { e => setTextValue(e.target.value)}
        />
        <input 
          type="date" 
          value={dateValue}
          onChange = { e => setDateValue(e.target.value)}
        />
        <button onClick={addTodo}>ADD</button>
      </div>
      <div className='out-container'>
        {list.map((items) => (
          <div className='output-slot' key={items.id}>
            <div className='output'>
            {(items.name) ? items.name : 'Not Specified'}
            </div>
            <div className='output'>
              {(items.date) ? items.date : 'Not Specified'}
            </div>
            <button onClick={() => removeTodo(items.id)}>DELETE</button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Content
