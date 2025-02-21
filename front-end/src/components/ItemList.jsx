import React, { useState, useEffect, useRef } from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath, search, setSearch, pageType }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const containerRef = useRef(null);
  const [itemsPerRow, setItemsPerRow] = useState(0);
  const [visibleRows, setVisibleRows] = useState(1);

  useEffect(() => {
    if (pageType === "SearchResults") {
      const calculateItemsPerRow = () => {
        if (containerRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const itemWidth = 172; // Largura do item
          const gap = 16; // Espaço entre os itens (definido no CSS)
          const containerPadding = 40; // Padding total do container (20px de cada lado)
          
          const availableWidth = containerWidth - containerPadding;
          const calculatedItemsPerRow = Math.floor((availableWidth + gap) / (itemWidth + gap));
          setItemsPerRow(calculatedItemsPerRow);
        }
      };

      calculateItemsPerRow();
      window.addEventListener('resize', calculateItemsPerRow);

      return () => window.removeEventListener('resize', calculateItemsPerRow);
    }
  }, [pageType]);

  const totalRows = pageType === "SearchResults" ? Math.ceil(itemsArray.length / itemsPerRow) : 1;
  const visibleItems = pageType === "SearchResults" ? itemsPerRow * visibleRows : items;
  const canShowMore = pageType === "SearchResults" && visibleRows < totalRows;

  const handleShowMore = () => {
    setVisibleRows(prev => Math.min(prev + 1, totalRows));
  };

  const handleShowLess = () => {
    setVisibleRows(1);
  };

  return (
    <div className="item-list">
      <div className="item-list__title">
        {pageType === "Main" ? (<h2>{title} populares</h2>) : (<h2>{title}</h2>)}
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : pageType === "SearchResults" ? (
          canShowMore ? (
            <button onClick={handleShowMore} className="item-list__show-more">Ver mais</button>
          ) : visibleRows > 1 ? (
            <button onClick={handleShowLess} className="item-list__show-less">Ver menos</button>
          ) : null
        ) : null}
      </div>

      <div className="item-list__subtitle">
        {(pageType === "SearchResults") && (itemsArray.length === 0) ? (<h4>Não foi encontrado nenhum artista</h4>) : (<></>)}
        {(pageType === "SearchResults") && (itemsArray.length === 1) ? (<h4>1 artista foi encontrado</h4>) : (<></>)}
        {(pageType === "SearchResults") && (itemsArray.length > 1) ? (<h4>{`${itemsArray.length} artistas foram encontrados`}</h4>) : (<></>)}
      </div>

      <div className="item-list__container" ref={containerRef}>
        {itemsArray
          .slice(0, visibleItems)
          .map((currObj, index) => (
            <SingleItem
              {...currObj}
              idPath={idPath}
              key={`${title}-${index}`}
              setSearch={setSearch}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;