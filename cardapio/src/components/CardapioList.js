import React from "react";

const pratos = [
  { id: 1, nome: "Lasanha", descricao: "Lasanha de carne com queijo" },
  { id: 2, nome: "Feijoada", descricao: "Feijoada tradicional brasileira" },
  { id: 3, nome: "Salada", descricao: "Salada verde com molho especial" }
];

const adicionarAoPedido = (prato) => {
  window.dispatchEvent(new CustomEvent("adicionar-pedido", { detail: prato }));
  alert(`Prato "${prato.nome}" adicionado ao pedido!`); // só para ver funcionando
};

const CardapioList = () => (
  <div>
    <h2>Cardápio</h2>
    <ul>
      {pratos.map((prato) => (
        <li key={prato.id} style={{ marginBottom: 16 }}>
          <strong>{prato.nome}</strong>: {prato.descricao} <br />
          <button onClick={() => adicionarAoPedido(prato)}>Adicionar ao pedido</button>
        </li>
      ))}
    </ul>
  </div>
);

export default CardapioList;