export default function Pedidos () {
const pedidos = [
  { id: 1, cliente: "Ana", productos: [{ nombre: "Camiseta", cantidad: 2 }, { nombre: "Gorra", cantidad: 1 }] },
  { id: 2, cliente: "Luis", productos: [{ nombre: "Zapatos", cantidad: 1 }, { nombre: "Bolso", cantidad: 2 }] },
  { id: 3, cliente: "Marta", productos: [{ nombre: "Pantalón", cantidad: 3 }] },
  { id: 4, cliente: "John", productos: [{ nombre: "Sudadera", cantidad: 1 }, { nombre: "Gorra", cantidad: 2 }] },
  { id: 5, cliente: "Pedro", productos: [{ nombre: "Camiseta", cantidad: 5 }] },
];
  return (
    <>
    <h2 className="mt-6 font-bold mb-4">4. Lista de pedidos con productos
</h2>
      {pedidos.map((pedido) => (
      <li className="list-none bg-white text-black w-45 m-2 p-2 rounded" key={pedido.id}>
        <p> <strong>Cliente:</strong> {pedido.cliente}</p>
        {pedido.productos.map((producto, index) => (
          <div key={index}>
          <p><strong>Producto:</strong> {producto.nombre}</p>
          <p><strong>Cantidad:</strong> {producto.cantidad}</p>
          </div>
        ))}
      </li>
    ))}  
    </>
  )
} 