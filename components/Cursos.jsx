export default function Cursos () {
const cursos = [
  { id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] },
  { id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] },
  { id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }] },
  { id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] },
  { id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "State Management" }] },
];
return (
  <>
  <h2 className="mt-6 font-bold mb-4">3. Lista de cursos con módulos.</h2>
  {cursos.map((curso) => (
      <li className="list-none bg-white w-55 text-black p-2 m-2 rounded" key={curso.id}>
        <p> <strong>Nombre:</strong> {curso.nombre}</p>
        {curso.modulos.map((modulo, index) => ( 
          <p key={index}><strong>Modulo: </strong> {modulo.nombre}</p>
        ))}
      </li>
    ))}  
  </>
)
}