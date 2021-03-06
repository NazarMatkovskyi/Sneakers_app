import { Link } from "react-router-dom"


function Header (props) {
   return(
      <header className="d-flex justify-between align-center p-40">
        <a href ="/">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/Logo.png" alt="Logo"/>
        <div>
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>   
      </div>
      </a>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/carz.svg" alt="Carz"/>
          <span>1250 uan.</span>
        </li>
        <li className="mr-20 cu-p">
         <Link to="/favorites">
         <img width={20} height={20} src="/img/heart.svg" alt="Heart"/>
         </Link>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="User"/>
        </li>
      </ul>
    </header>
   )
}

export default Header;