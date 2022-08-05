import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteFavouritePokemon } from '../../Redux/Helper/action';

import Thumb from "../../Components/Thumb/Thumb";
import Section from "../../Components/Section/Section";
import Title from "../../Components/Title/Title";
import Paragraph from "../../Components/Paragraph/Paragraph";
import { FlexAroundWrap } from "../../Components/Flex/Flex";
import defaultImg from "../../Assets/img/pokemon-default-image.png";
import "./Pokemon.css";

function PokemonFavourite() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { favouritePokemon } = useSelector(state => state);

  const deletePoke = uniqueID => {
    dispatch(deleteFavouritePokemon(uniqueID));
  }

  return (
    <Fragment>
      <Section>
        <div style={{ padding: "0 100px" }}>
          <Title>Pokemon Favorit</Title>
          <FlexAroundWrap>
            {
              favouritePokemon?.length === 0 ? <Paragraph>Tidak ada Pokemon</Paragraph>
                : favouritePokemon?.filter((value, index) => favouritePokemon.indexOf(value) === index)
                  ?.sort((a, b) => a.uniqueID - b.uniqueID)
                  ?.map(fav => {
                  return (
                    <div className="pokecard" key={fav.uniqueID}>
                      <Thumb src={fav.pictureFront} alt={fav.name} width="150"
                        onClick={() => navigate(`/pokemon/${fav.apiID}`)}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = defaultImg;
                        }} />
                      <hr />
                      <span className="monsName">
                        <Paragraph>Nomor : {fav.uniqueID}</Paragraph>
                        <h2>{fav.name}</h2>
                      </span>
                      <button onClick={() => deletePoke(fav.uniqueID)}>Hapus dari Favorit</button>
                    </div>
                  )
                })
            }
          </FlexAroundWrap>
        </div>
      </Section>
    </Fragment>
  )
}

export default PokemonFavourite