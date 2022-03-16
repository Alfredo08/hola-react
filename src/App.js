import Estudiante from "./componentes/Estudiante/Estudiante";

const App = () => {

  const titulo = "Bienvenidos a la aplicación de estudiantes.";
  const numeros = [1,2,3,4,5];

  return (
    <div className="App">
      <h1>
        {titulo}
      </h1>
      {
        numeros.map( num => {
          return (  
            <p> 
              Numero: {num} 
            </p>
          );
        })
      }

      <Estudiante nombre="Alexander" apellido="Martinez" curso="Desarrollo Web" />
      <Estudiante nombre="Martha" apellido="Garcia" curso="Estructura de Datos"/>
      <Estudiante nombre="Julieta" apellido="Gomez" curso="Bases de Datos"/>
      <Estudiante nombre="Alan" apellido="Morales" curso="Aplicaciones mobiles"/>
    </div>
  );
}

export default App;
