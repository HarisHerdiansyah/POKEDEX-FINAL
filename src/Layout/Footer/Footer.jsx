import './Footer-style.css';

function Footer() {
  return (
    <footer>
      <aside className="left">
        <p><em>Inspired by:</em></p>
        <h3>Kawah Edukasi Scholarship</h3>
      </aside>

      <aside className="right">
        <p>Kunjungi : </p>
        <ul>
          <li>
            <a href="https://www.instagram.com/harisherdian_/" target={"_blank"} rel="noreferrer" >
            <i className="fab fa-instagram"></i>
              harisherdian_
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/herdiansyah.haris/" target={"_blank"} rel="noreferrer" >
            <i className="fab fa-facebook-square"></i>
              Haris Herdiansyah
            </a>
          </li>
        </ul>
      </aside>
    </footer>
  )
}

export default Footer;