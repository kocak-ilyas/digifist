import React, { useContext, useState } from "react";
import { products } from "./database/db";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import colImage from "./assets/colImage.png";
import "./App.css";
function App() {
  const [selectedColorId, setSelectedColorId] = useState(1);
  const [selected, setSelected] = useState([]);
  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => () => {
    const itemSelected = isItemSelected(id);
    setSelected((currentSelected) =>
      itemSelected ? currentSelected.filter((el) => el !== id) : currentSelected.concat(id)
    );
  };

  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
    return (
      !isFirstItemVisible && (
        <div className='arrowButton arrowBack' onClick={() => scrollPrev()}>
          <IoIosArrowBack size={26} style={{ margin: `4px 2px` }} />
        </div>
      )
    );
  };

  const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
    return (
      !isLastItemVisible && (
        <div className='arrowButton arrowForward' onClick={() => scrollNext()}>
          <IoIosArrowForward size={26} style={{ margin: `4px 6px` }} />
        </div>
      )
    );
  };

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
                <a href='/' className='headerLink'>
                  Shop all everyday items
                </a>
              </div>
            </div>
            <div className='row g-0 productsCardsContainer'>
              <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className='scrollMenu'>
                {products.map(({ id, productName, price, color, url }, index) => (
                  <div
                    className='col-md-4'
                    key={id}
                    style={{ width: `280px` }}
                    itemID={id}
                    title={id}
                    onClick={handleClick(id)}
                    selected={isItemSelected(id)}>
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
                              style={{ backgroundColor: selectedColorId === 1 ? "white" : "#99C3CC" }}>
                              {selectedColorId === 1 && (
                                <span
                                  className='dotSelectedInline'
                                  onClick={() => setSelectedColorId(1)}
                                  style={{ backgroundColor: "#99C3CC" }}></span>
                              )}
                            </span>
                            <span
                              className={selectedColorId === 2 ? "dotSelected" : "dot"}
                              onClick={() => setSelectedColorId(2)}
                              style={{ backgroundColor: selectedColorId === 2 ? "white" : "#CC9999" }}>
                              {selectedColorId === 2 && (
                                <span
                                  className='dotSelectedInline'
                                  onClick={() => setSelectedColorId(2)}
                                  style={{ backgroundColor: "#CC9999" }}></span>
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
                                  style={{ backgroundColor: "#CB99CC" }}></span>
                              )}
                            </span>
                            <span
                              className={selectedColorId === 4 ? "dotSelected" : "dot"}
                              onClick={() => setSelectedColorId(4)}
                              style={{ backgroundColor: selectedColorId === 4 ? "white" : "#A6CC99" }}>
                              {selectedColorId === 4 && (
                                <span
                                  className='dotSelectedInline'
                                  onClick={() => setSelectedColorId(4)}
                                  style={{ backgroundColor: "#A6CC99" }}></span>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
