import dynamic from "next/dynamic";

const CardapioList = dynamic(
 () => import("cardapio/CardapioList"),
 { ssr: false }
);

const PedidoList = dynamic(
 () => import("pedido/PedidoList"),
 { ssr: false }
);

export default function Home() {
 return (
  <div>
   <h1>Container App</h1>
   <CardapioList />
   <PedidoList />
  </div>
 );
}
