import icons8 from "../images/icons8-plus-100.png";
import moins from "../images/icons8-moins-100.png";
const Button = ({ counter, setCounter }) => {
  return (
    <>
      <main>
          <div className="container">
        <div className="counter">
          <div className="negative">
           
              <button className={counter === 0 ? 'hidden' : 'visible'}
                onClick={() => {
                  setCounter(counter - 1);
                  
                }}disabled={counter === 0}
              >
                <img src={moins} alt="calculate icon" />
              </button>
           
          </div>

          <div className="number">
            <p>{counter}</p>
          </div>
          <div className="positive">
            
              <button  className={counter === 10 ? 'hidden' : 'visible'}
                onClick={() => {
                  setCounter(counter + 1);
                }}disabled={counter === 10}
              >
                          <img src={icons8} alt="calculate icon" />
              </button>
            
          </div>
        </div>

        <div className="reset">
          <button
            onClick={() => {
              setCounter((counter = 0));
            }}
          >
             Reset
          </button>
        </div>
    </div>
      </main>
    </>
  );
};

export default Button;
