export default {
  global: {
    componenteFormativo: 'Diagramación de piezas gráficas',
    descripcionCurso:
      'La maquetación de cualquier pieza gráfica es un proceso que siempre debe tener en cuenta los conceptos de comunicación digital, teoría y psicología del color, donde el <i>software</i> usado para el diseño gráfico, la entrega del arte final a la imprenta y las estrategias que una marca debe crear para lograr su posicionamiento en el mercado. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Comunicación digital',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Teoría del color',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Círculo cromático',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Modelo RGB',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Modelo CMYK',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Psicología del color',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas de diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '<i>Software</i> especializado en diseño	10',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Plantillas de diseño',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas de diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Técnicas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Uso de retículas',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Identidad corporativa',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Imagen visual',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Diagramación y composición',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'La ilustración',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'El arte final',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Estrategia de marca',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Identidad de marca',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Posicionamiento de marca',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Beneficios',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Teoría del color',
      referencia:
        'Netdisseny. (s.f.). Nociones básicas de diseño. Teoría del color. ',
      tipo: 'PDF',
      descarga: '/downloads/color.pdf',
    },
    {
      tema: 'Arte final',
      referencia:
        'Sergio Fácil. (2021). GUARDAR, EMPAQUETAR Y EXPORTAR en Adobe Illustrator / ¿Cuándo utilizarlas?[Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4Smi2qX1L_c',
    },
    {
      tema: 'Arte final',
      referencia:
        'Iconestudio. (2019). Illustrator tutorial preparación de documento para imprenta [Video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kzqjHcHJvkE',
    },
    {
      tema: 'Estrategia de marca',
      referencia: 'Barham, J. (2021). ¿Qué es la estrategia de marca? Magenta.',
      tipo: 'Artículo web',
      link: 'https://magentaig.com/que-es-la-estrategia-de-marca/',
    },
  ],
  glosario: [
    {
      termino: '<em>Branding</em>',
      significado:
        'Es la arquitectura de marca y hace referencia a todas esas acciones planeadas con el fin de influir en la percepción que el público tiene de ella para que la tengan en cuenta a la hora de hacer una compra.',
    },
    {
      termino: '<em>Buyer </em>persona',
      significado:
        'Hace referencia al público objetivo a través de un perfil simulado que se basa en información real de clientes; la idea es personificar al cliente ideal para la empresa.',
    },
    {
      termino: 'Comunidad virtual',
      significado:
        'Conjunto de personas que tienen objetivos similares y que siguen o se suscriben a una marca a través de medios digitales como redes sociales, blogs o foros, en los que pueden tener interacción con la marca y entre ellos mismos.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'Término usado para determinar el nivel de compromiso y cuán involucrado se encuentra el cliente con una marca.',
    },
    {
      termino: '<em>Leads</em>',
      significado:
        'Es el contacto que una marca tiene con un cliente potencial; es la persona o negocio que expresó algún interés en los productos de la marca.',
    },
    {
      termino: '<em>Marketing mix</em>',
      significado:
        'Se refiere al análisis estratégico desarrollado por las empresas sobre las 4 variables internas más importantes para la marca: producto, precio, distribución y promoción.',
    },
    {
      termino: '<em>Pixel</em>',
      significado:
        'Es el más pequeño elemento que tiene una imagen digital. En una pantalla de computador, celular o tableta, al hacer zoom sobre la imagen se podrán ver lo píxeles alineados formando la imagen. La unión o el conjunto de varios píxeles conforman la imagen.',
    },
    {
      termino: 'Posicionamiento SEO',
      significado:
        'Posicionamiento natural u orgánico en internet y motores de búsqueda, sin pago económico, que se logra a través de un buen trabajo estratégico de palabras claves y gestión de contenidos digitales.',
    },
    {
      termino: '<em>Vector</em>',
      significado:
        'Es el elemento más importante que tienen las imágenes vectoriales que se componen por formas geométricas individuales. Es una línea, recta o curva, que posee un punto de aplicación, un módulo, una trayectoria y un sentido, con los cuales se van logrando los trazos geométricos, el diseño o la ilustración.',
    },
  ],
  referencias: [
    {
      referencia: 'Costa, J. (1993). Identidad corporativa. Editorial Trillas.',
    },
    {
      referencia:
        'Cubero-Somed, J. L. (2020). Posicionamiento de Marca o Producto. Amazon Digital Services.',
    },
    {
      referencia:
        'Cumpa, L. A. (2002). Fundamentos de diagramación. Fondo Editorial de la UNMSM.',
    },
    {
      referencia: 'García, M. (2001). Las claves de la publicidad. Esic.',
    },
    {
      referencia:
        'López, A. M. (2019). Diseño gráfico digital. Anaya Multimedia.',
    },
    {
      referencia:
        'Lupton, E., & Phillips, J. C. (2016). Diseño gráfico. Editorial Gustavo Gili.',
    },
    {
      referencia:
        'Marta-Lazo, C., & Barroso, J. A. (2016). Comunicación digital. U.O.C.',
    },
    {
      referencia:
        'Nieto, J. D., Castro, G. B., Espinosa, E., & Narváez, A. E. (1988). Rotulación : Diseño De Alfabetos. Rótulos Especiales. Signos - Símbolos. Logotipos . Servicio Nacional De Aprendizaje (SENA).',
    },
    {
      referencia: 'Pérez, D. (2014). Elaboración Del Arte Final. IC Editorial.',
    },
    {
      referencia: 'Perryman, L. (2021). Color en el arte y el diseño. Blume.',
    },
    {
      referencia:
        'Tamayo, M. I. (2014). Estética E Imagen Visual. Sello Editorial Universidad de Medellín.',
    },
    {
      referencia:
        'Zeegen, L., Pujol, S., & Giménez, D. (2013). Principios de ilustración. Gustavo Gili.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Samuel Pinilla Hurtado',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio - Regional Cauca',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
