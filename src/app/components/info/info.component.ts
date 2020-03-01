import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tipes = [
    {
      name: "Data",
      desc: "Este tipo de sistemas de soporte de decisiones se caracteriza por estar basado en datos recolectados, datos que el usuario le debe de proveer al sistema; entre más datos tenga disponibles el sistema mejor será su desempeño"
    },
    {
      name: "Documents",
      desc: "Este tipo de sistemas de soporte de decisiones se basa en documentos, es decir, toma sus decisiones en base a documentos que le son entregados por el usuario, lo que le permite tener una comunicación más natural con el cliente"
    },
    {
      name: "Knowledge",
      desc: "Este tipo de sistemas de soporte de decisiones se basa en conocimientos, lo que los hace decidir en base a sus capacidades de resolución de problemas, estos se podrían considerar un tipo de sistema experto"
    },
    {
      name: "Models",
      desc: "Este tipo de sistemas de soporte de decisiones se basa en el uso de modelos, modelos que fueron diseñados para la optimización de detrminadas series de procesos; por lo tanto, este subtipo depende totalmente de la fiabilidad del modelo"
    }
  ];

  founders = [
    {
      name: "Michael Scott Morton",
      desc: "Elaboró un estudio que consistió en construir, implementar y probar un sistema de soporte de decisiones de gestión, estando basado en modelos. En 1966 estudió como las computadoras y los modelos analíticos podrían ayudar a los gerentes a tomar decisiones y realizó un experimento en el que utilizaron un sistema de decisión de gestión (MDS)"
    },
    {
      name: "George Dantzig",
      desc: "Inicio con la implementación de la porgramación lineal, lo que fue de suma importancia para el posterior desarrollo de los sistemasde soporte de decisiones"
    },
    {
      name: "Douglas Engelbart",
      desc: "Él y sus colegas desarrollaron el sistema NLS, dicho sistema facilitó la creación de bibliotecas digitales así como el almacenamiento y recuperación de documentos electrónicos  mediante hipertexto. Fue un precurso de los sistemas de soporte de decisiones grupales"
    },
    {
      name: "Jay Forrester",
      desc: "Participó en la construcción del sistema de defensa áerea SAGE (Semi-Automatic Ground Environmnet) para Norteamérica, SAGE es probablemente el primer DSS basado en datos"
    }
  ];

  items = [
    "Recopila y analiza datos para realizar un informe completo",
    "Se puede automatizar a fin de reducir el trabajo del usuario",
    "Se puede adaptar a las distintas situaciones, todo en base al usuario y sus requerimientos"
  ];

  history = [
    "Surgió aproximadamente a mediados de 1960",
    "Desarrollo teórico en 1970",
    "Implementación en 1980",
    "Evolución en 1990",
    "Base en conocimiento previo a finales de 1990",
    "Mejora en eficacia y uso de tecnología"
  ];

  ventajas = [
    "Mejora la eficiencia personal",
    "Acelera el proceso de la toma de decisiones",
    "Revela nuevos enfoques para pensar en el espacio del problema",
    "Ayuda a automatizar los procesos de gestión",
    "Reducción de costos en labores que requieren decisiones"
  ];

  beneficios = [
    "Es más fácil medir la mejora en el proceso que en la decisión",
    "Mejora la confianza de las decisiones",
    "Ayuda a predecir los posibles riesgos y ganancias",
    "Ayuda al encargado a tomar decisiones acordes a la situación",
    "Puede ver patrones que una persona no",
    "Cumple con el propósito principal de la tecnología, facilitar la vida humana"
  ];
}