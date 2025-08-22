export default function Blogs () {
const blogs = [
  { id: 1, titulo: "Aprendiendo React", autor: { nombre: "Ana", pais: "Colombia" }, categorias: ["JavaScript", "Frontend"], comentarios: [ { usuario: "Luis", texto: "Muy útil", respuestas: [ { usuario: "Marta", texto: "Totalmente de acuerdo", reacciones: [ { tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } }, { tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } } ] } ] } ] },
  { id: 2, titulo: "Next.js SSR", autor: { nombre: "Luis", pais: "México" }, categorias: ["JavaScript", "SSR"], comentarios: [ { usuario: "Marta", texto: "Interesante", respuestas: [ { usuario: "Ana", texto: "Lo probaré", reacciones: [ { tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } } ] } ] } ] },
  { id: 3, titulo: "Node.js API", autor: { nombre: "John", pais: "USA" }, categorias: ["Backend", "API"], comentarios: [ { usuario: "Pedro", texto: "Me sirvió mucho", respuestas: [ { usuario: "Luis", texto: "Gracias por compartir", reacciones: [ { tipo: "clap", usuario: { nombre: "Ana", rol: "Fullstack Dev" } } ] } ] } ] },
  { id: 4, titulo: "Django ORM", autor: { nombre: "Marta", pais: "España" }, categorias: ["Backend", "Python"], comentarios: [ { usuario: "Ana", texto: "Claro y conciso", respuestas: [ { usuario: "John", texto: "Lo usaré en mi proyecto", reacciones: [ { tipo: "like", usuario: { nombre: "Luis", rol: "Backend Dev" } } ] } ] } ] },
  { id: 5, titulo: "Flutter Widgets", autor: { nombre: "Pedro", pais: "Portugal" }, categorias: ["Mobile", "UI"], comentarios: [ { usuario: "Luis", texto: "Genial explicación", respuestas: [ { usuario: "Marta", texto: "Muy claro todo", reacciones: [ { tipo: "love", usuario: { nombre: "Ana", rol: "UI Designer" } } ] } ] } ] }
];

  return (
  <>
  <h2 className="mt-6 font-bold mb-4" >5. Lista de blogs con estructura de datos profundamente
anidada</h2>
    {blogs.map((blog) => (
      <li className="list-none bg-white p-4 rounded m-2 my-4 max-w-80 text-black" key={blog.id}>
        <p className="text-xl font-semibold text-black"> <strong>Titulo: </strong> {blog.titulo}</p>
        <p> <strong>Autor: </strong> {blog.autor.nombre}</p>

        {blog.categorias.map((categoria, index) => ( 
          <div key={index} className="bg-gray-200 px-2 m-2 rounded-full">
          <p> <strong>Categoría: </strong>{categoria}</p>
          </div>
        ))}
          {blog.comentarios.map((comentario, index) => (
            <div key={index} className="mt-3 bg-gray-100 p-2 rounded border-l-3 border-gray-800">
              <p className="font-bold mb-1">Comentarios: </p>
              <p> <strong>Usuario: </strong>{comentario.usuario}</p>
              <p> <strong>Texto: </strong>{comentario.texto}</p>

              {comentario.respuestas.map((respuesta, index) => (
                <div key={index} className="ml-0.5 mt-1.5 bg-white p-2 shadow-sm rounded border border-gray-300">
                  <p className="font-bold mb-1">Respuestas: </p>
                  <p> <strong>Usuario: </strong> {respuesta.usuario} </p>
                  <p> <strong>Texto: </strong> {respuesta.texto} </p>


              {respuesta.reacciones.map((reaccion, index) => (
                <div key={index} className="ml-0.5 mt-1.5 p-3 rounded bg-white border border-gray-300">
                  <p className="font-bold mb-1">Reacciones: </p>
                  <p><strong>Tipo: </strong>{reaccion.tipo} </p>
                  <p><strong>Usuario:</strong> {reaccion.usuario.nombre} </p>
                  <p><strong>Rol: </strong>{reaccion.usuario.rol}</p>
                </div>
              ))}
                </div>
              ))}
            </div>
          ))}

      </li>
    ))}
  </>
  )
}
