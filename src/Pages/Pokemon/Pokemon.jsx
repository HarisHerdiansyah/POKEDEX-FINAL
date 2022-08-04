import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoad } from '../../Redux/Helper/action';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Thumb from "../../Components/Thumb/Thumb";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Section from "../../Components/Section/Section";
import Title from "../../Components/Title/Title";
import { FlexAroundWrap } from "../../Components/Flex/Flex";
import "./Pokemon.css";

function Pokemon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loadFetchingData, failFetch, pokemonSuccessResponse, pokemonErrorResponse } = useSelector(state => state);
  const [pokemonData, setPokemonData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  // * Paginate logic
  const [pageNumber, setPageNumber] = useState(0);
  const pokemonPerPage = 30;
  const pagesVisited = pageNumber * pokemonPerPage;

  const displayPokemon = pokemonData
    ?.slice(pagesVisited, pagesVisited + pokemonPerPage)
    ?.map((mons) => {
      return (
        <div>
          <div className="card" key={mons.uniqueID} onClick={() => navigate(`/pokemon/${mons.apiID}`)} >
            <Thumb src={mons.pictureFront} alt={mons.name} width="150" />
            <hr />
            <span className="monsName">
              <Paragraph>Nomor : {mons.uniqueID}</Paragraph>
              <h2>{mons.name}</h2>
            </span>
          </div>
        </div>
      )
    })

  const pageCount = Math.ceil(pokemonData?.length / pokemonPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  // * Search logic
  const handleSearch = (value) => {
    const result = pokemonData.filter(mons => {
      if (value !== '') {
        return mons.name.toLowerCase().includes(value.toLowerCase());
      }
    })
    setSearchResult(result);
  }

  const renderSearchResult = searchResult.map(mons => {
    return (
      <div className="card" key={mons.uniqueID} onClick={() => navigate(`/pokemon/${mons.apiID}`)} >
        <Thumb src={mons.pictureFront} alt={mons.name} width="150" />
        <hr />
        <span className="monsName">
          <Paragraph>Nomor : {mons.uniqueID}</Paragraph>
          <h2>{mons.name}</h2>
        </span>
      </div>
    )
  })

  useEffect(() => {
    dispatch(setLoad());
  }, [dispatch]);

  useEffect(() => {
    setPokemonData(pokemonSuccessResponse);
  }, [pokemonSuccessResponse]);

  return (
    <Fragment>
      <div className="container">
        <div className="highlight">
          <Title>Beberapa daftar Pokemon</Title>
          <Paragraph>Jumlah pokemon ada banyak sekali, namun jumlahnya tidak diketahui secara pasti, setiap pokemon memiliki karakteristik tertentu.</Paragraph>
        </div>

        <input type="text" placeholder="Cari Pokemonmu Disini" onChange={e => handleSearch(e.target.value)} />

        <Section>
          <FlexAroundWrap>
            {
              loadFetchingData ? <Title>Memuat Data ...</Title>
                : failFetch ? <Paragraph>{pokemonErrorResponse}</Paragraph>
                  : searchResult.length === 0 ? displayPokemon
                    : renderSearchResult
            }
          </FlexAroundWrap>
        </Section>

        <ReactPaginate
          previousLabel={"Kembali"}
          nextLabel={"Lanjut"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          activeLinkClassName={"activeBtn"}
        />
      </div>
    </Fragment>
  )
}

export default Pokemon