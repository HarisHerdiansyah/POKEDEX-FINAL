// * library / module
import React from 'react';
import { useEffect, useState } from 'react';

// * assets / components
import Section from "../../Components/Section/Section";
import { FbIcon, IgIcon, GithubIcon, GitlabIcon, NursiPic, HarisPic, BangkitPic } from '../../Assets';
import './about.css';

function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    setAbout([
      {
        pic: BangkitPic,
        name: "Bangkit Setio",
        desc: "Saya lulusan SMKN 5 Bandung jurusan Teknik Komputer dan Jaringan, dengan mengikuti beasiswa ini semoga saja ilmu yang saya dapatkan di di Kawah Edukasi bisa memberikan pekerjaan yang saya idamkan sebagai Web Developer",
        fbLink: "https://web.facebook.com/bangkit.raharjo.56",
        igLink: "https://www.instagram.com/thebadpeoplee/",
        hubLink: "https://github.com/bangkitsetior",
        labLink: "https://gitlab.com/Rises21"
      },
      {
        pic: HarisPic,
        name: "Haris Herdiansyah",
        desc: "Lulus pada tahun 2022 di SMKN 1 Bojongpicung jurusan Teknik Komputer dan Jaringan. Pengalaman saya di dunia IT yaitu Praktik Kerja Lapangan sebagai IT Support di Mandala Komputer",
        fbLink: "https://www.facebook.com/herdiansyah.haris/",
        igLink: "https://www.instagram.com/harisherdian_/",
        hubLink: "https://github.com/HarisHerdiansyah/",
        labLink: "https://gitlab.com/HarisHerdiansyah"
      },
      {
        pic: NursiPic,
        name: "Muhamad Nursi",
        desc: "Nama lengkap saya Muhamad Nursi Ramdan. Saya lulus SMK jurusan Rekayasa Perangkat Lunak pada tahun 2019. Dan pengalaman saya yaitu Praktik Kerja Lapangan sebagai Desainer Grafis di suatu Toko percetakan",
        fbLink: "https://web.whatsapp.com/",
        igLink: "https://web.whatsapp.com/",
        hubLink: "https://web.whatsapp.com/",
        labLink: "https://web.whatsapp.com/"
      }
    ])
  }, [])

  return (
    <Section>
      <div className='tentang'>
        <div className="tentang-header">
          <h1>Tentang Kita!</h1>
          <h3>Team Project Pokedex Kawah Edukasi</h3>
        </div>
        <div className="card-container">
          {about?.map((about, idx) => (
            <div key={idx} className="team-card">
              <div><img className='placeholder-pic' src={about.pic} alt="" /></div>
              <div>
                <h2>{about.name}</h2>
              </div>
              <div>
                <h4>{about.desc}</h4>
              </div>
              <div className='social-media'>
                <a href={about.fbLink} target="_blank" rel="noreferrer"><img src={FbIcon} alt="" /></a>
                <a href={about.igLink} target="_blank" rel="noreferrer"><img src={IgIcon} alt="" /></a>
                <a href={about.hubLink} target="_blank" rel="noreferrer"><img src={GithubIcon} alt="" /></a>
                <a href={about.labLink} target="_blank" rel="noreferrer"><img src={GitlabIcon} alt="" /></a>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </Section>
  )
}

export default About