import calculatrice from "../images/calculatrice.png"
const Header =({title =""}) => {
    return (
      <header>
     <div className="header__logo">
        
          <img src={calculatrice} alt="calculate icon" />
        <h1>{title}</h1>
      
        </div>
      </header>
    );
  };
  
  export default Header;
  