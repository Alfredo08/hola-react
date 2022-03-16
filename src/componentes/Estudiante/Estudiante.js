import './Estudiante.css';

const Estudiante = ( props ) => {
    const { nombre, apellido, curso } = props;
    return (
        <div>
            <h2 className="nombreEstudiante">
                {nombre} {apellido}
            </h2>
            <h3>
                Estudiante de {curso}
            </h3>
        </div>
    );
}
/*
props = {
    nombre : valor,
    apellido : valor,
    curso : valor
}

const {nombre, apellido, curso} = props;

*/
export default Estudiante;