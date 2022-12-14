// * library / module
import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';

// * assets / components
import './home.css';
import section1 from '../../Assets/img/section1.png';
import section2 from '../../Assets/img/section2.webp';
import { WaterIcon, FireIcon, GrassIcon, GroundIcon, RockIcon, IceIcon, ElectricIcon, DragonIcon, GhostIcon, PsychicIcon, NormalIcon, FightingIcon, PoisonIcon, BugIcon, FlyingIcon, DarkIcon, FairyIcon, pichu, pikachu, raichu } from '../../Assets';
import ListEvo from './ComponentsHome/EvolusiPokemon';
import Section from "../../Components/Section/Section";
import Title from '../../Components/Title/Title';
import Paragraph from '../../Components/Paragraph/Paragraph';
import { FlexAroundWrap } from "../../Components/Flex/Flex";

function Home() {

  const [types, setTypes] = useState([]);

  useEffect(() => {
    setTypes([
      {
        icon: WaterIcon,
        label: 'Water'
      },
      {
        icon: FireIcon,
        label: 'Fire'
      },
      {
        icon: GrassIcon,
        label: 'Grass'
      },
      {
        icon: GroundIcon,
        label: 'Ground'
      },
      {
        icon: RockIcon,
        label: 'Rock'
      },
      {
        icon: IceIcon,
        label: 'Ice'
      },
      {
        icon: ElectricIcon,
        label: 'Electric'
      },
      {
        icon: DragonIcon,
        label: 'Dragon'
      },
      {
        icon: GhostIcon,
        label: 'Ghost'
      },
      {
        icon: PsychicIcon,
        label: 'Psychic'
      },
      {
        icon: NormalIcon,
        label: 'Normal'
      },
      {
        icon: FightingIcon,
        label: 'Fighting'
      },
      {
        icon: PoisonIcon,
        label: 'Poison'
      },
      {
        icon: BugIcon,
        label: 'Bug'
      },
      {
        icon: FlyingIcon,
        label: 'Flying'
      },
      {
        icon: DarkIcon,
        label: 'Dark'
      },
      {
        icon: FairyIcon,
        label: 'Fairy'
      }
    ])
  }, [])


  const [tipe, setTipe] = useState([]);

  useEffect(() => {
    setTipe([
      {
        image: pichu,
        label: 'Evolusi Pertama'
      },
      {
        image: pikachu,
        label: 'Evolusi Kedua'
      },
      {
        image: raichu,
        label: 'Evolusi Ketiga'
      },
    ])
  }, []);

  return (
    <Fragment>
      <Section>
        <div className="section1">
          <div><img src={section1} alt="pokemon logo" /></div>
          <div>
            <Title>Apa itu Pok??mon?</Title>
            <Paragraph>Pok??mon adalah makhluk misterius dengan banyak rahasia. Beberapa Pok??mon tinggal bersama manusia dan beberapa tinggal di alam bebas di padang rumput, gua, atau laut, tapi banyak hal tentang ekologi mereka yang masih belum diketahui. Salah satu fitur utama mereka adalah bahwa mereka dapat ditangkap menggunakan Pok?? Ball, yang memungkinkan mereka dibawa-bawa.</Paragraph>
          </div>
        </div>
      </Section>

      <Section>
        <div className="section2">
          <div>
            <Title>Berapa banyak tipe Pok??mon?</Title>
            <Paragraph>Pok??mon dikelompokkan menjadi 18 tipe berdasarkan karakteristiknya. Sebagai contoh, Pikachu adalah tipe Pok??mon Elektronik dan Magikarp adalah tipe Air. Ada beberapa Pok??mon yang termasuk dalam dua tipe, seperti Jigglypuff, yang merupakan tipe Normal dan Peri. Setiap tipe memiliki afinitas khusus yang memiliki pengaruh besar dalam pertarungan. Jika Pok??mon milik lawanmu memiliki jenis afinitas yang tepat, itu bisa menjadi keuntungan besar dalam pertarungan.</Paragraph>
          </div>
          <div><img src={section2} alt="" /></div>
        </div>
      </Section>

      <Section>
        <FlexAroundWrap>
          {types?.map((type, idx) => (
            <div key={idx}>
              <div className='icon-types'>
                <img src={type?.icon} alt="icon" />
                <Paragraph>{type.label}</Paragraph>
              </div>
            </div>
          )
          )}
        </FlexAroundWrap>
      </Section>

      <Section>
        <div className='section-3-type'>
          <div className="EvolusiPokemonContainer">
            <Title>Evolusi Pokemon</Title>
            <article className='wrapper-section-3'>
              <div className='imgContainerEvolusiPokemon'>
                {tipe.map((tipe, idx) => (
                  <div key={idx} className='image-tipe'>
                    <div>
                      <img src={tipe.image} alt="imagepng" />
                      <Paragraph>{tipe.label}</Paragraph>
                    </div>
                  </div>
                )
                )}
              </div>
              <Paragraph>
                Pokemon bisa berevolusi entah itu pokemon dalam serial game, komik, ataupun animasi kartun <em>Pokemon.</em>
              </Paragraph>

              <Paragraph><strong>Evolusi Pokemon di dalam serial game:</strong></Paragraph>
              <ListEvo />

              <Paragraph><strong>Evolusi Pokemon Animasi Kartun:</strong></Paragraph>
              <Paragraph>Evolusi Pokemon di dalam film animasi Pokemon tak jauh berbeda dengan di serial game bahkan didalam
                filmnya, Pokemon dapat berevolusi pada kondisi tertentu yang berbeda-beda.</Paragraph>
            </article>
          </div>
        </div>
      </Section>

      <Section>
        <div className='section-4-type'>
          <div className='waralabaPokemonContainer'>
            <h1>Waralaba Pokemon</h1>
            <div className='containerImg'>
              <img className="imagePokemonFloatLeft" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9rCF2iX3RSwXnRjvxCacGBWzgU-MBjS8A&usqp=CAU" alt="mangapokemon"></img>
              <img className="imagePokemonFloatRight" src="https://upload.wikimedia.org/wikipedia/id/6/65/Ash_Ketchum_seasons_1-5.png" alt="ashkarakter"></img>

              <Paragraph>
                <strong>Di Kutip dari Wikipedia :</strong><br />
                Pok??mon (???????????? Pokemon, pengucapan: /??po??ke??m??n/) adalah salah satu waralaba media yang dimiliki oleh perusahaan permainan video Nintendo dan diciptakan oleh Satoshi Tajiri pada 1995.
                Pada mulanya, Pok??mon adalah seri permainan video yang identik dengan konsol Game Boy.
                Pok??mon merupakan permainan video tersukses kedua di dunia setelah serial Mario yang juga diciptakan oleh Nintendo.
                Sementara bila dibandingkan dengan yang lain, Pok??mon merupakan serial waralaba terlaris ketiga di dunia setelah James Bond (karya Ian Fleming) dan Transformers (karya Hasbro), yang masih terus berjalan dan diperbaharui sesuai perjalanan zaman.
                Waralaba Pok??mon sendiri muncul dalam beragam bentuk, yaitu permainan video, anime, manga, trading cards, buku, mainan, dan masih banyak lagi.
                Waralaba media ini merayakan ulang tahunnya yang ke sepuluh pada tanggal 27 Februari 2006. Dan pada 23 April 2008,
                omzet penjualan permainan video Pok??mon telah mencapai 180 juta kopi, melebihi penjualan permainan video Transformers.
              </Paragraph>

              <Paragraph>
                Nama Pok??mon merupakan nama romanisasi dari nama Jepang "Pocket Monsters" (??????????????????????????? Poketto Monsut??).
                Kata "Pok??mon", selain merujuk ke waralaba Pok??mon itu sendiri, juga merujuk pada 809 spesies fiksi yang muncul dalam semua seri Pok??mon.
                Seperti kata deer dan sheep, penyebutan kata tunggal dan jamak Pok??mon dalam bahasa Inggris tidak ada bedanya.
                Kata Pok??mon dalam bahasa Inggris bisa merujuk pada satu Pok??mon saja atau lebih dari satu.
              </Paragraph>


              <img className='imagePokemonFloatLeft' src="https://www.picclickimg.com/d/l400/pict/392100351183_/Pokemon-Anime-TV-Series-Complete-Seasons-1-6-1.jpg" alt="animepokemon"></img>
              <Paragraph>
                Di bulan November 2005, 4Kids Entertainment, yang menjadi distributor Pok??mon di luar Jepang mengumumkan bahwa mereka tidak akan memperpanjang kontrak mereka dengan The Pok??mon Company Jepang.
                Sadar bahwa The Pok??mon Company Jepang tidak akan sukses bila tanpa bantuan rekan dari luar Jepang, The Pok??mon Company Jepang kemudian menciptakan anak perusahaan yang berbasis di Amerika.
                Perusahaan itu kemudian dikenal dengan nama The Pok??mon Company International.
                Tugasnya adalah menjadi distributor sekaligus pemegang nama lisensi Pok??mon untuk kawasan di luar Asia termasuk di Afrika.
              </Paragraph>


              <img className="imagePokemonFloatRight" src='https://dl.memuplay.com/new_market/img/com.nianticlabs.pokemongo.sc0.2022-07-02-09-13-40.jpg' alt='pokemongame' style={{marginBottom: "180px"}}></img>
              <Paragraph>
                Pada Juli 2016, permainan realitas tertambah dalam telepon pintar yang bernama Pok??mon Go diluncurkan ke publik.
                Generasi permainan video berikutnya yaitu Pok??mon Sun and Moon akan diluncurkan pada November 2016.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>
    </Fragment>
  )
}

export default Home