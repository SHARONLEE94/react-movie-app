import axios from '../../api/axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const SerachPage = () => {

  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery();
  const searchTerm = query.get("q");

  useEffect((searchResults) => {
    if(searchTerm) {
      fetchSearchMovie(searchTerm)
    }
  }, [searchTerm])

  const fetchSearchMovie = async (searchTerm) => {
    try{
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`)
      setSearchResults(response.data.result)
      console.log(response)
    }catch(e) {
      console.log(e);
    }
  }

  return (
    <div>
      SerachPage
    </div>
  )
}

export default SerachPage
