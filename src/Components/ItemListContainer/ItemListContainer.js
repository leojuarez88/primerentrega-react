import ItemCount from "../ItemCount/ItemCount";
import React from "react";
import Titulo from "../Titulo/Titulo";

export const ItemListContainer = ({ texto }) => {
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };

  return (
    <>
      <Titulo greeting={texto} />

      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
