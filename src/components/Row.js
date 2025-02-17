import React, { useState, useEffect, useCallback } from 'react'
import axios from '../api/axios'
import './Row.css'
import MovieModal from './MoviModal';
import styled from 'styled-components';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Row({title, id, fetchUrl }) {

  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({})

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]
)
  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData])

  const handleClick = (movie)=>{
    setModalOpen(true)
    setMovieSelected(movie)
    console.log(movie)
  }

  
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{clickable:true}}
      >
        <Content id={id}>
          {movies.map(movie => (
            <SwiperSlide>
              <Wrap>
                <img 
                  key={movie.id}
                  className='row__poster'
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              </Wrap>
            </SwiperSlide>
            ))}
          </Content>
      </Swiper>

        {modalOpen &&
          <MovieModal
            {...movieSelected}
            setModalOpen = {setModalOpen}
          />
        }
    </Container>
  )
}

export default Row

const Container = styled.div`
  padding: 0 0 26px;
`
const Content = styled.div`

`
const Wrap = styled.div``