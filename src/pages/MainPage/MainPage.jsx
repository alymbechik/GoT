import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../utils/API/API'
import './style.css'
import { useNavigate } from 'react-router-dom'
import CircularIndeterminate from '../../components/Loading/loading'
import img from '../../assets/free-icon-400-12269677.png'

const MainPage = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(false)
  const navigate = useNavigate()

    const getCharacters = async () =>{
      setIsLoading(true)
      try {
      const response = await axiosInstance.get('api/v2/Characters')
      setCharacters(response.data)
      } catch (e) {
        setError(true)
      }finally{
        setIsLoading(false)
      }
    }

    useEffect(()=>{
      getCharacters()
    },[])

  return (
    <div>
      {isLoading ? 
      <CircularIndeterminate/>
      :
      error?
      <div className='err'>
        <img src={img} alt="" />
        <h1>Ошибка Запроса</h1>
      </div>
      
      :
      <div className='character-list-wrap'>
        <h2>Character List</h2>
        <div className="row-group">
          <div className="classes">
          <div>Id</div>
          <div>Name</div>
          <div>Image</div>
        </div>
          {characters.map((item,idx,arr)=>{
          return (
            <div
            key={idx}
            className='character-list'
            onClick={()=> navigate(`/${item.id}`)}
            >
              <div>{item.id}</div>
              <div>{item.fullName}</div>
              <div className='photo'>
                <img src={item.imageUrl} alt="" />
              </div>
            </div>
          )
        })}
        </div>
        
      </div>
    }
    </div>
  )
}

export default MainPage