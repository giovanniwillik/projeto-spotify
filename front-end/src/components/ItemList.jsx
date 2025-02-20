import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath, search, setSearch, pageType}) => {
  // console.log(items);
  // console.log(useLocation());
  const { pathname } = useLocation();
  // console.log(pathname);
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__title">
        {pageType === "Main" ? (<h2>{title} populares</h2>) : (<h2>{title}</h2>)}
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__subtitle">
        {(pageType === "SearchResults") && (itemsArray.length === 0) ? (<h4>Não foi encontrado nenhum artista</h4>) : (<></>)}
        {(pageType === "SearchResults") && (itemsArray.length === 1) ? (<h4>1 artista foi encontrado</h4>) : (<></>)}
        {(pageType === "SearchResults") && (itemsArray.length > 1) ? (<h4>{`${itemsArray.length} artistas foram encontrados`}</h4>) : (<></>)}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              // id={currObj.id}
              // name={currObj.name}
              // image={currObj.image}
              // banner={currObj.banner}
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
