import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteFavouritePokemon } from '../../Redux/Helper/action';
import Swal from 'sweetalert2';

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
                  ?.map(mons => {
                    return (
                      <div className="pokecard" key={mons.uniqueID}>
                        <Thumb src={mons.pictureBack} alt={mons.name} width="150"
                          onClick={() => navigate(`/pokemon/${mons.apiID}`)}
                          onMouseOver={(e) => e.target.src = mons.pictureFront}
                          onMouseLeave={(e) => e.target.src = mons.pictureBack}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultImg;
                          }} />
                        <hr />
                        <span className="monsName">
                          <Paragraph>Nomor : {mons.uniqueID}</Paragraph>
                          <h2>{mons.name}</h2>
                        </span>
                        <button onClick={() => {
                          deletePoke(mons.uniqueID);
                          Swal.fire("Pokemon telah dihapus!", `${mons.name} telah dihapus dari favorit.`, "info");
                        }}>Hapus dari Favorit</button>
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