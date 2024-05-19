import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../utils/API/API'
import { useParams } from 'react-router-dom'
import './style.css'
import CircularIndeterminate from '../../components/Loading/loading'
import ErrorPage from '../ErrorPage/ErrorPage'

const DetailPage = () => {

  const {id} = useParams()

  console.log(id)
  const [isLoading, setIsLoading] = useState(false)
  const [character, setCharacter] = useState({})
  const [error, setError] = useState(false)
  console.log(character);

  const getCharacter = async () =>{
    setIsLoading(true)
    try {
    const response = await axiosInstance.get(`api/v2/Characters/${id}`)
    setCharacter(response.data)  
    if(character === undefined){
      setError(true)
    }
    } catch (error) {
      setError(true)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    getCharacter()
  },[])


  return (
      isLoading ? 
      <CircularIndeterminate/>
      :
      error? 
      <ErrorPage/>
      :
      <div className='container'>
      <h2 className='title'>Character Detail</h2>
      
      <div className='details'>
        <h2>{character.fullName}</h2>
        <div className='big-photo'>
          <img src={character.imageUrl} alt="" />
        </div>
        <div className="about">
        <div>ID: </div><div className='ch'>{character.id}</div>
        <div>First Name: </div>   <div className='ch'>{character.firstName}</div>
        <div>Last Name: </div>   <div className='ch'>{character.lastName}</div>
        <div>Full Name: </div>   <div className='ch'>{character.fullName}</div>
        <div>Title: </div>   <div className='ch'>{character.title}</div>
        <div>Family: </div>  <div className='ch'>{character.family}</div>
        <div>Image: </div>   <div className='ch'>{character.image}</div>
        <div>Image URL: {character.imageUrl}</div>
        </div>
      </div>
      

    </div>
  )
}

export default DetailPage