function Navitem({children, onClick}) {
  return (
    <li className="nav-item" onClick={onClick}>{children}</li>
  )
}

export default Navitem;