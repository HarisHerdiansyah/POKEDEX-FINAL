import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import './home.css'
import section1 from '../../Assets/img/section1.png'
import section2 from '../../Assets/img/section2.webp'
import { WaterIcon, FireIcon, GrassIcon, GroundIcon, RockIcon, IceIcon, ElectricIcon, DragonIcon, GhostIcon, PsychicIcon, NormalIcon, FightingIcon, PoisonIcon, BugIcon, FlyingIcon, DarkIcon, FairyIcon} from '../../Assets';

function Home() {

  const [types, setTypes] = useState([]);

  useEffect(() => {
    setTypes([
      {
        icon: WaterIcon,
        label: 'Water'
      },
      {
        icon: FireIcon
        ,
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

  return (
    <Fragment>
      <main className="container">
      <div className="section1">
        <img src={section1} alt="" />
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
          <img src={section2} alt="" />
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
      </main>
    </Fragment>
  )
}

export default Home