export default function Productos () {
const productos = [
  { id: 1, nombre: "Camiseta", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
  { id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" } },
  { id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
  { id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
  { id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },
];

return (
  <>
    <h2 className="mt-6 font-bold mb-4">1. Lista de productos con categorías
</h2>
    {productos.map((producto) => (
      <li className="list-none bg-white text-black w-58 m-2 rounded p-2" key={producto.id}>
        <p><strong>Nombre: </strong>{producto.nombre}</p>
        <p> <strong>Precio: </strong> {producto.precio}</p>
        <p> <strong>Categoría: </strong>{producto.categoria.nombre}</p>
      </li>
    ))}
  </>
)}