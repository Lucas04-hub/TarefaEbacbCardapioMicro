import React, { useEffect, useState } from "react";

const PedidoList = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    // Função para lidar com evento global disparado pelo Cardápio
    const handler = (event) => {
      setPedidos((prev) => [...prev, event.detail]);
    };

    window.addEventListener("adicionar-pedido", handler);

    // Limpando o listener ao desmontar
    return () => {
      window.removeEventListener("adicionar-pedido", handler);
    };
  }, []);

  return (
    <div>
      <h2>Itens do Pedido</h2>
      {pedidos.length === 0 ? (
        <p>Nenhum item adicionado ainda.</p>
      ) : (
        <ul>
          {pedidos.map((item, idx) => (
            <li key={idx}>
              <b>{item.nome}</b>: {item.descricao}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PedidoList;