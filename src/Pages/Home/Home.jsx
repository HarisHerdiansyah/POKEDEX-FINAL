import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import './home.css'
import section1 from '../../Assets/img/section1.png'
import section2 from '../../Assets/img/section2.webp'
import { WaterIcon, FireIcon, GrassIcon, GroundIcon, RockIcon, IceIcon, ElectricIcon, DragonIcon, GhostIcon, PsychicIcon, NormalIcon, FightingIcon, PoisonIcon, BugIcon, FlyingIcon, DarkIcon, FairyIcon, pichu, pikachu, raichu} from '../../Assets';
import ListEvo from './ComponentsHome/EvolusiPokemon';

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
  },[]);

  return (
    <Fragment>
      <main className="container">
      <div className='sections'>
      <div className="section1">
        <div><img src={section1} alt="" /></div>
        <div>
          <h2>Apa itu Pokémon?</h2>
          <p>Pokémon adalah makhluk misterius dengan banyak rahasia. Beberapa Pokémon tinggal bersama manusia dan beberapa tinggal di alam bebas di padang rumput, gua, atau laut, tapi banyak hal tentang ekologi mereka yang masih belum diketahui. Salah satu fitur utama mereka adalah bahwa mereka dapat ditangkap menggunakan Poké Ball, yang memungkinkan mereka dibawa-bawa.</p>
        </div>
      </div>
      <div className="section2">
          <div>
            <h2>Berapa banyak tipe Pokémon?</h2>
            <p>Pokémon dikelompokkan menjadi 18 tipe berdasarkan karakteristiknya. Sebagai contoh, Pikachu adalah tipe Pokémon Elektronik dan Magikarp adalah tipe Air. Ada beberapa Pokémon yang termasuk dalam dua tipe, seperti Jigglypuff, yang merupakan tipe Normal dan Peri. Setiap tipe memiliki afinitas khusus yang memiliki pengaruh besar dalam pertarungan. Jika Pokémon milik lawanmu memiliki jenis afinitas yang tepat, itu bisa menjadi keuntungan besar dalam pertarungan.</p>
          </div>
          <div><img src={section2} alt="" /></div>
      </div>
      </div>

      <div className="section2-type">
          <div className="types">
          {types?.map((type, idx)=>(
                <div key={idx}>
                    <div className='icon-types'>
                        <img src={type?.icon} alt="icon"/>
                        <h2>{type.label}</h2>
                    </div>
                </div>
              )
            )}
          </div>
      </div>

      <div className='section-3-type'>
      <div className="EvolusiPokemonContainer">
            <h1>Evolusi Pokemon</h1>
            <article className='wrapper-section-3'>
                <div className='imgContainerEvolusiPokemon'>
                    
                    {tipe.map((tipe, idx)=>(
                          
                              <div  key={idx} className='image-tipe'>
                                <div>
                                  <img src={tipe.image} alt="imagepng"/>
                                  <h2>{tipe.label}</h2>
                                </div>
                                  
                              </div>
                          
                        )
                      )}
                    
                </div>
                <p>Pokemon bisa berevolusi entah itu pokemon dalam serial game, komik, ataupun animasi kartun <em>Pokemon.</em>
                  </p>
                    <h4>Evolusi Pokemon di dalam serial game:</h4>
                       <ListEvo />
                      
                        
                        
                    <h4>Evolusi Pokemon Animasi Kartun:</h4>
                    <p>Evolusi Pokemon di dalam film animasi Pokemon tak jauh berbeda dengan di serial game bahkan didalam 
                        filmnya, Pokemon dapat berevolusi pada kondisi tertentu yang berbeda-beda.</p>
            </article>
        </div>
      </div>

      <div className='section-4-type'>
            <div className='waralabaPokemonContainer'>
                <h1>Waralaba Pokemon</h1>
                <div className='containerImg'>
                <img className="imagePokemonFloatLeft" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9rCF2iX3RSwXnRjvxCacGBWzgU-MBjS8A&usqp=CAU" alt="mangapokemon"></img>
                <img className="imagePokemonFloatRight" src="https://upload.wikimedia.org/wikipedia/id/6/65/Ash_Ketchum_seasons_1-5.png" alt="ashkarakter"></img>
                
                
                <p cite="https://id.wikipedia.org/wiki/Pok%C3%A9mon">
                
                <strong>Di Kutip dari Wikipedia :</strong><br />
                Pokémon (ポケモン Pokemon, pengucapan: /ˈpoʊkeɪmɒn/) adalah salah satu waralaba media yang dimiliki oleh perusahaan permainan video Nintendo dan diciptakan oleh Satoshi Tajiri pada 1995. 
                Pada mulanya, Pokémon adalah seri permainan video yang identik dengan konsol Game Boy. 
                Pokémon merupakan permainan video tersukses kedua di dunia setelah serial Mario yang juga diciptakan oleh Nintendo. 
                Sementara bila dibandingkan dengan yang lain, Pokémon merupakan serial waralaba terlaris ketiga di dunia setelah James Bond (karya Ian Fleming) dan Transformers (karya Hasbro), yang masih terus berjalan dan diperbaharui sesuai perjalanan zaman. 
                Waralaba Pokémon sendiri muncul dalam beragam bentuk, yaitu permainan video, anime, manga, trading cards, buku, mainan, dan masih banyak lagi. 
                Waralaba media ini merayakan ulang tahunnya yang ke sepuluh pada tanggal 27 Februari 2006. Dan pada 23 April 2008, 
                omzet penjualan permainan video Pokémon telah mencapai 180 juta kopi, melebihi penjualan permainan video Transformers. 
                </p>
                
                
                

                <p>
                Nama Pokémon merupakan nama romanisasi dari nama Jepang "Pocket Monsters" (ポケットモンスター Poketto Monsutā). 
                Kata "Pokémon", selain merujuk ke waralaba Pokémon itu sendiri, juga merujuk pada 809 spesies fiksi yang muncul dalam semua seri Pokémon. 
                Seperti kata deer dan sheep, penyebutan kata tunggal dan jamak Pokémon dalam bahasa Inggris tidak ada bedanya. 
                Kata Pokémon dalam bahasa Inggris bisa merujuk pada satu Pokémon saja atau lebih dari satu.
                </p>

                
                <img className='imagePokemonFloatLeft' src="https://www.picclickimg.com/d/l400/pict/392100351183_/Pokemon-Anime-TV-Series-Complete-Seasons-1-6-1.jpg" alt="animepokemon"></img>
                <p>
                Di bulan November 2005, 4Kids Entertainment, yang menjadi distributor Pokémon di luar Jepang mengumumkan bahwa mereka tidak akan memperpanjang kontrak mereka dengan The Pokémon Company Jepang. 
                Sadar bahwa The Pokémon Company Jepang tidak akan sukses bila tanpa bantuan rekan dari luar Jepang, The Pokémon Company Jepang kemudian menciptakan anak perusahaan yang berbasis di Amerika. 
                Perusahaan itu kemudian dikenal dengan nama The Pokémon Company International. 
                Tugasnya adalah menjadi distributor sekaligus pemegang nama lisensi Pokémon untuk kawasan di luar Asia termasuk di Afrika.
                </p>

                
                <img className="imagePokemonFloatRight" src='https://dl.memuplay.com/new_market/img/com.nianticlabs.pokemongo.sc0.2022-07-02-09-13-40.jpg' alt='pokemongame'></img>
                <p>
                Pada Juli 2016, permainan realitas tertambah dalam telepon pintar yang bernama Pokémon Go diluncurkan ke publik. 
                Generasi permainan video berikutnya yaitu Pokémon Sun and Moon akan diluncurkan pada November 2016.
                </p>
                </div>

            </div>
      </div>

      </main>
    </Fragment>


  )
}

export default Home