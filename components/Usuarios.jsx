export default function Usuarios () {
const usuarios = [
  { id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia" } },
  { id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México", pais: "México" } },
  { id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España" } },
  { id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" } },
  { id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais: "Portugal" } },
];
return (
  <>
  <h2 className="mt-6 font-bold mb-4">2. Lista de usuarios con direcciones</h2>
  {usuarios.map((usuario) => (
      <li key={usuario.id} className="list-none bg-white w-55 text-black m-2 rounded p-2">
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p> <strong>Dirección: </strong></p>
        <p> <strong>Calle: </strong> {usuario.direccion.calle}</p>
        <p> <strong>Ciudad: </strong>{usuario.direccion.ciudad}</p>
        <p> <strong>País: </strong> {usuario.direccion.pais}</p>
      </li>
    ))}
  </>
)
}