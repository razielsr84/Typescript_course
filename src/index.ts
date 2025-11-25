interface Alumno {
  nombre: string;
  nota: number;
}

interface Profesor {
  nombre: string;
  titulo: string;
}

type Persona = Alumno | Profesor;

const persona: Persona = {
  nombre: "Juan",
  nota: 12,
};
