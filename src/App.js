import { products } from "./database/db";
import colImage from "./assets/colImage.png";
import "./App.css";

function App() {
  return (
    <div className='container m-5'>
      <div className='card mb-3' style={{ maxWidth: "1540px" }}>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={colImage} className='img-fluid rounded-start colImage' alt='colImage' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>Everyday items, we have something to suit every occasion.</h5>
              <p className='card-text'>Everyday items, we have something to suit every occasion.</p>
              <p className='card-text'>
                <small className='text-muted'>Shop all everyday items</small>
              </p>
            </div>
            <hr />
            <div className='row g-0'>
              {products.map(({ id, productName, price, color, url }, index) => (
                <div className='col-md-4' key={id}>
                  <div className='card' style={{ width: "18rem" }}>
                    <img src={require(`${url}`)} className='card-img-top' alt={productName} />
                    <div className='card-body'>
                      <h5 className='card-title'>{productName}</h5>
                      <p className='card-text'>€{price}</p>
                      <span className='btn btn-primary'>1 colors</span>
                      <span className='btn btn-primary'>2 colors</span>
                      <span className='btn btn-primary'>3 colors</span>
                      <span className='btn btn-primary'>4 colors</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className='card text-bg-dark'>
        <img src='...' className='card-img' alt='...' />
        <div className='card-img-overlay'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </p>
          <p className='card-text'>Last updated 3 mins ago</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
