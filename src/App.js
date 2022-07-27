import { products } from "./database/db";
import colImage from "./assets/colImage.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedColorId, setSelectedColorId] = useState(1);
  return (
    <div className='appContainer'>
      <div className='card mb-3'>
        <div className='row g-0'>
          <div className='col-md-6 relativeCol'>
            <img src={colImage} className='img-fluid colImage' alt='colImage' />
          </div>
          <div className='col-md-6 relativeCol'>
            <div className=''>
              <div className='m-5'>
                <h4 className='headerTitle'>Everyday items, we have something to suit every occasion.</h4>
              </div>
              <div className='m-5'>
                <span className='headerDescription' href='/'>
                  At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo
                  gravida cursus.
                </span>
              </div>
              <div className='m-5'>
                <a href="/" className='headerLink'>Shop all everyday items</a>
              </div>
            </div>
            {/* <hr /> */}
            <div className='row g-0 productsCardsContainer'>
              {products.map(({ id, productName, price, color, url }, index) => (
                <div className='col-md-4' key={id}>
                  <div className='card' style={{ width: "225px" }}>
                    <img src={require(`${url}`)} className='card-img-top productsImage' alt={productName} />
                    <div className='card-body'>
                      <h5 className='productName'>{productName}</h5>
                      <div className='row g-0 productsCards'>
                        <div className='col-md-5 price'>€{price}</div>
                        <div className='col-md-7 colorDots'>
                          <span
                            className={selectedColorId === 1 ? "dotSelected" : "dot"}
                            onClick={() => setSelectedColorId(1)}
                            style={{ backgroundColor: selectedColorId === 1 ? "white" : "green" }}>
                            {selectedColorId === 1 && (
                              <span
                                className='dotSelectedInline'
                                onClick={() => setSelectedColorId(1)}
                                style={{ backgroundColor: "green" }}></span>
                            )}
                          </span>
                          <span
                            className={selectedColorId === 2 ? "dotSelected" : "dot"}
                            onClick={() => setSelectedColorId(2)}
                            style={{ backgroundColor: selectedColorId === 2 ? "white" : "blue" }}>
                            {selectedColorId === 2 && (
                              <span
                                className='dotSelectedInline'
                                onClick={() => setSelectedColorId(2)}
                                style={{ backgroundColor: "blue" }}></span>
                            )}
                          </span>
                          <span
                            className={selectedColorId === 3 ? "dotSelected" : "dot"}
                            onClick={() => setSelectedColorId(3)}
                            style={{ backgroundColor: selectedColorId === 3 ? "white" : "red" }}>
                            {selectedColorId === 3 && (
                              <span
                                className='dotSelectedInline'
                                onClick={() => setSelectedColorId(3)}
                                style={{ backgroundColor: "red" }}></span>
                            )}
                          </span>
                          <span
                            className={selectedColorId === 4 ? "dotSelected" : "dot"}
                            onClick={() => setSelectedColorId(4)}
                            style={{ backgroundColor: selectedColorId === 4 ? "white" : "gray" }}>
                            {selectedColorId === 4 && (
                              <span
                                className='dotSelectedInline'
                                onClick={() => setSelectedColorId(4)}
                                style={{ backgroundColor: "gray" }}></span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
