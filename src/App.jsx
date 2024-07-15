import React, { useEffect, useState } from 'react'
import Content from './Content'
import apiRequest from './apiRequest';


function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);
  const [textValue, setTextValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [search, setSearch] = useState('');
  /* const API_URL = 'http://localhost:3500/list' */

  /* useEffect(() => {
    const importData = async() => {
      const response = await fetch(API_URL);
      const result = await response.json();
      setList(result)
    }
    importData();
  }, []) */


  const addTodo = async () => {
    const id = list.length ? list[list.length - 1].id + 1: 1;
    const item = {
      id,
      name:textValue,
      date:dateValue
    };
    const newItems = [...list,item]
    setList(newItems);
    setTextValue('');
    setDateValue('');
    saveToStorage(newItems);

    /* const postObject = {
      method : "POST",
      header: {
        "Content-Type" : "application-json"
      },
      body: JSON.stringify(item)
    }
    const response = apiRequest(API_URL, postObject); */

  }

  async function removeTodo (id){
    const newItems = list.filter((item) => item.id !== id)
    setList(newItems)
    saveToStorage(newItems); 
    /* const reqUrl = `${API_URL}/${id}`;

    
    const deleteObject = {
      method : "DELETE"
    }
    const response = await apiRequest(reqUrl, deleteObject) */
  }

   function saveToStorage(list){
    localStorage.setItem('list', JSON.stringify(list));
  } 

  return (
    <div>
      <header>
        <div className='title'>TODO APP</div>
        <div className='search-box'>
          <input 
            type="text"
            placeholder='search todo'
            value={search}
            onChange={e => setSearch(e.target.value)} 
          />
        </div>
      </header>
      
      <Content
        list = {list.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))}
        setList = {setList}
        textValue = {textValue}
        setTextValue = {setTextValue}
        dateValue = {dateValue}
        setDateValue = {setDateValue}
        addTodo = {addTodo}
        removeTodo = {removeTodo}
      />
    </div>
  )
}

export default App
