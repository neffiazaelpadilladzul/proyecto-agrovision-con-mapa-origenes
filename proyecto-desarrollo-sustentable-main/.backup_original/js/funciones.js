const estadoApp = {
  seccionActiva: 'dashboard',
  actividades: [
    {
      id: 1,
      nombre: 'Cultivo Agroecológico de Hortalizas y Maíz Nativo',
      enfoque: 'agricultura',
      categoria: 'Agricultura',
      descripcion: 'Cultivo orgánico bajo sistema de milpa diversificada sin pesticidas sintéticos y con microrriego.',
      importancia: 'Garantiza la soberanía alimentaria regional, conserva las semillas nativas y sustenta a 140 familias campesinas.',
      viabilidad: 'Alta eficiencia hídrica con 35% de ahorro en agua y fertilización con compostaje propio.',
      tipoDato: 'real',
      fuente: 'INEGI - Censo Agropecuario 2022 (Consulta: 12/Oct/2024)'
    },
    {
      id: 2,
      nombre: 'Ganadería Silvopastoril Regenerativa',
      enfoque: 'ganaderia',
      categoria: 'Ganadería',
      descripcion: 'Pastoreo rotativo en praderas arboladas que captura carbono en el suelo y mejora la fertilidad natural.',
      importancia: 'Produce carne y lácteos de alta calidad biológica sin propiciar deforestación en la cuenca.',
      viabilidad: 'Disminución del 40% en costos de alimento concentrado mediante forrajes nativos.',
      tipoDato: 'real',
      fuente: 'SADER / INIFAP - Manual de Sistemas Silvopastoriles 2023 (Consulta: 15/Oct/2024)'
    },
    {
      id: 3,
      nombre: 'Red de Cooperativas y Mercados de Comercio Justo',
      enfoque: 'comercio',
      categoria: 'Comercio',
      descripcion: 'Puntos de venta directa del productor al consumidor eliminando la especulación de intermediarios.',
      importancia: 'Retiene el valor monetario en el municipio, garantizando pagos justos y precios accesibles.',
      viabilidad: 'Comprobada en 18 municipios con redes solidarias consolidadas.',
      tipoDato: 'real',
      fuente: 'Secretaría de Economía - Registro Nacional de Sociedades Cooperativas 2024 (Consulta: 20/Oct/2024)'
    },
    {
      id: 4,
      nombre: 'Manufactura Forestal y Aserradero Comunitario FSC',
      enfoque: 'industria',
      categoria: 'Industria',
      descripcion: 'Transformación de madera certificada para muebles y construcción con balance de tala cero neta.',
      importancia: 'Genera empleos técnicos industriales locales agregando valor a los recursos maderables sustentables.',
      viabilidad: 'Rentabilidad sostenida con clientes institucionales y de eco-construcción.',
      tipoDato: 'real',
      fuente: 'CONAFOR - Diagnóstico de Empresas Forestales Comunitarias 2023 (Consulta: 05/Nov/2024)'
    },
    {
      id: 5,
      nombre: 'Ecoturismo Comunitario y Senderismo Bioclimático',
      enfoque: 'servicios',
      categoria: 'Servicios',
      descripcion: 'Guías de naturaleza, hospedaje de bajo impacto en cabañas solares y talleres de educación ambiental.',
      importancia: 'Crea incentivos económicos directos para que los ejidatarios conserven bosques y ríos.',
      viabilidad: 'Ocupación promedio del 65% anual con incremento en turismo sustentable.',
      tipoDato: 'real',
      fuente: 'SECTUR - Catálogo de Destinos de Naturaleza 2023 (Consulta: 18/Oct/2024)'
    },
    {
      id: 6,
      nombre: 'Taller de Textiles con Lana y Tintes Botánicos',
      enfoque: 'artesanal',
      categoria: 'Producción artesanal',
      descripcion: 'Hilado manual y tinción orgánica con grana cochinilla, añil y palo de brasil.',
      importancia: 'Preserva el patrimonio biocultural y otorga autonomía económica a cooperativas de mujeres artesanas.',
      viabilidad: 'Alta demanda en galerías culturales y mercados nacionales de comercio ético.',
      tipoDato: 'real',
      fuente: 'FONART - Registro Único de Artesanos de México 2024 (Consulta: 24/Oct/2024)'
    }
  ],
  mercadoAgricola: {
    oferta: 120,
    demanda: 120,
    precioBase: 45.00
  },
  mercadoGanadero: {
    oferta: 90,
    demanda: 90,
    precioBase: 85.00
  },
  productosComercio: [
    {
      id: 1,
      nombre: 'Jitomate Agroecológico Regional',
      tipo: 'Local',
      origen: 'Huerto San Mateo (a 18 km)',
      precio: 24.50,
      distanciaKm: 18,
      emisionesTransporte: '0.002 kg CO2 eq',
      retencionLocal: '68% retenido en la comunidad',
      tipoDato: 'real',
      fuente: 'Central de Abasto Regional / Red Agroecológica 2024'
    },
    {
      id: 2,
      nombre: 'Jitomate de Invernadero Foráneo',
      tipo: 'Global',
      origen: 'California, EE. UU. (a 2,400 km)',
      precio: 46.00,
      distanciaKm: 2400,
      emisionesTransporte: '0.252 kg CO2 eq',
      retencionLocal: '18% retenido en la comunidad',
      tipoDato: 'real',
      fuente: 'Boletín de Comercio Exterior SE-SNIIM 2024'
    },
    {
      id: 3,
      nombre: 'Miel Virgen de Abeja Melipona',
      tipo: 'Local',
      origen: 'Cooperativa Sierra Madre (a 35 km)',
      precio: 140.00,
      distanciaKm: 35,
      emisionesTransporte: '0.004 kg CO2 eq',
      retencionLocal: '74% retenido en la comunidad',
      tipoDato: 'real',
      fuente: 'Asociación Apícola Agroforestal 2024'
    },
    {
      id: 4,
      nombre: 'Miel Industrial con Jarabe Fructosa',
      tipo: 'Global',
      origen: 'Distribuidora Transnacional (a 8,500 km)',
      precio: 115.00,
      distanciaKm: 8500,
      emisionesTransporte: '0.890 kg CO2 eq',
      retencionLocal: '12% retenido en la comunidad',
      tipoDato: 'real',
      fuente: 'PROFECO - Revista del Consumidor 2023'
    }
  ],
  pib: {
    primario: 1225.0,
    secundario: 10210.0,
    terciario: 20765.0,
    fuente: 'INEGI - Sistema de Cuentas Nacionales de México (SCNM), Producto Interno Bruto Trimestral 2024 (Consulta: 28/Oct/2024)'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  inicializarNavegacionSidebar();
  inicializarDashboard();
  inicializarSeccionAgricultura();
  inicializarSeccionGanaderia();
  inicializarSeccionComercio();
  inicializarSeccionPIB();
  inicializarModales();
  inicializarBuscadorTop();
});

function inicializarNavegacionSidebar() {
  const botonesNav = document.querySelectorAll('.nav-link-btn');
  botonesNav.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      navegarSeccion(target);
    });
  });

  const enlacesAccion = document.querySelectorAll('[data-goto]');
  enlacesAccion.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      e.preventDefault();
      const target = enlace.getAttribute('data-goto');
      navegarSeccion(target);
    });
  });

  const hash = window.location.hash.replace('#', '');
  const vistasValidas = ['dashboard', 'agricultura', 'ganaderia', 'comercio', 'industria', 'servicios', 'artesanal', 'pib'];
  if (vistasValidas.includes(hash)) {
    navegarSeccion(hash);
  } else {
    navegarSeccion('dashboard');
  }
}

function navegarSeccion(idSeccion) {
  estadoApp.seccionActiva = idSeccion;

  const secciones = document.querySelectorAll('.section-view');
  secciones.forEach(sec => sec.classList.remove('active'));

  const seccionObjetivo = document.getElementById(`view-${idSeccion}`);
  if (seccionObjetivo) {
    seccionObjetivo.classList.add('active');
  }

  const botones = document.querySelectorAll('.nav-link-btn');
  botones.forEach(btn => {
    if (btn.getAttribute('data-target') === idSeccion) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  window.location.hash = idSeccion;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (idSeccion === 'dashboard') {
    dibujarGraficaOndaDashboard();
    dibujarGraficaBarrasProduccion();
    dibujarGaugeSustentabilidad();
  } else if (idSeccion === 'agricultura') {
    actualizarMercadoAgricola();
  } else if (idSeccion === 'ganaderia') {
    actualizarMercadoGanadero();
  } else if (idSeccion === 'pib' || idSeccion === 'industria' || idSeccion === 'servicios') {
    actualizarCuentasPIB();
  }
}

function inicializarDashboard() {
  dibujarGraficaOndaDashboard();
  dibujarGraficaBarrasProduccion();
  dibujarGaugeSustentabilidad();

  window.addEventListener('resize', () => {
    if (estadoApp.seccionActiva === 'dashboard') {
      dibujarGraficaOndaDashboard();
      dibujarGraficaBarrasProduccion();
      dibujarGaugeSustentabilidad();
    }
  });
}

function dibujarGraficaOndaDashboard() {
  const canvas = document.getElementById('dash-canvas-wave');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;

  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);

  const p1 = { x: w * 0.20, y: h * 0.65 };
  const p2 = { x: w * 0.50, y: h * 0.35 };
  const p3 = { x: w * 0.80, y: h * 0.45 };

  [p1.x, p2.x, p3.x].forEach(x => {
    ctx.beginPath();
    ctx.moveTo(x, 15);
    ctx.lineTo(x, h - 15);
    ctx.stroke();
  });

  ctx.setLineDash([]);

  const grad = ctx.createLinearGradient(0, 0, w, 0);
  grad.addColorStop(0, '#10b981');
  grad.addColorStop(0.5, '#6366f1');
  grad.addColorStop(1, '#ec4899');

  ctx.beginPath();
  ctx.moveTo(w * 0.08, h * 0.70);
  ctx.bezierCurveTo(w * 0.32, h * 0.80, w * 0.35, h * 0.30, p2.x, p2.y);
  ctx.bezierCurveTo(w * 0.65, h * 0.40, w * 0.70, h * 0.55, w * 0.92, h * 0.42);

  ctx.strokeStyle = grad;
  ctx.lineWidth = 3.5;
  ctx.stroke();

  [p1, p2, p3].forEach((p, idx) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = idx === 1 ? '#0d3829' : '#10b981';
    ctx.lineWidth = 3;
    ctx.stroke();
  });

  const badgeW = 65;
  const badgeH = 26;
  const badgeX = p2.x - badgeW / 2;
  const badgeY = p2.y - 38;

  ctx.fillStyle = '#0d3829';
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 13);
    ctx.fill();
  } else {
    ctx.fillRect(badgeX, badgeY, badgeW, badgeH);
  }

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 11px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('4.7 cm/d', p2.x, badgeY + 17);
}

function dibujarGraficaBarrasProduccion() {
  const canvas = document.getElementById('dash-canvas-bars');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;

  ctx.clearRect(0, 0, w, h);

  const padLeft = 40;
  const padBottom = 30;
  const padTop = 20;
  const plotW = w - padLeft - 20;
  const plotH = h - padBottom - padTop;

  ctx.strokeStyle = '#f1f5f9';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);

  [0, 25, 50, 75, 100].forEach(val => {
    const y = padTop + plotH - (val / 100) * plotH;
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(w - 20, y);
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`${val}`, padLeft - 8, y + 3);
  });

  ctx.setLineDash([]);

  const meses = [
    { mes: 'Ene', val: 32, destacada: false },
    { mes: 'Feb', val: 56, destacada: false },
    { mes: 'Mar', val: 42, destacada: false },
    { mes: 'Abr', val: 94, destacada: true },
    { mes: 'May', val: 78, destacada: false },
    { mes: 'Jun', val: 62, destacada: false }
  ];

  const colW = plotW / meses.length;
  const barW = Math.min(colW * 0.52, 42);

  meses.forEach((item, idx) => {
    const x = padLeft + idx * colW + (colW - barW) / 2;
    const barH = (item.val / 100) * plotH;
    const y = padTop + plotH - barH;

    ctx.fillStyle = item.destacada ? '#f97316' : '#fed7aa';

    const r = barW / 2;
    ctx.beginPath();
    ctx.moveTo(x, padTop + plotH);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
    ctx.lineTo(x + barW, padTop + plotH);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = item.destacada ? '#0d3829' : '#64748b';
    ctx.font = item.destacada ? 'bold 11px sans-serif' : '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(item.mes, x + barW / 2, h - 10);
  });
}

function dibujarGaugeSustentabilidad() {
  const canvas = document.getElementById('dash-canvas-gauge');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;

  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h - 10;
  const r = Math.min(cx - 20, cy - 10);
  const grosor = 18;

  ctx.beginPath();
  ctx.arc(cx, cy, r, Math.PI, 0);
  ctx.lineWidth = grosor;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineCap = 'round';
  ctx.stroke();

  const pct = 0.74;
  const anguloFin = Math.PI + pct * Math.PI;

  const grad = ctx.createLinearGradient(cx - r, cy, cx + r, cy);
  grad.addColorStop(0, '#f97316');
  grad.addColorStop(0.5, '#eab308');
  grad.addColorStop(1, '#22c55e');

  ctx.beginPath();
  ctx.arc(cx, cy, r, Math.PI, anguloFin);
  ctx.lineWidth = grosor;
  ctx.strokeStyle = grad;
  ctx.lineCap = 'round';
  ctx.stroke();
}

function inicializarSeccionAgricultura() {
  const sliderO = document.getElementById('agr-slider-oferta');
  const inputO = document.getElementById('agr-input-oferta');
  const sliderD = document.getElementById('agr-slider-demanda');
  const inputD = document.getElementById('agr-input-demanda');
  const inputPrecio = document.getElementById('agr-input-precio-base');

  if (sliderO && inputO) {
    sliderO.addEventListener('input', () => {
      inputO.value = sliderO.value;
      validarYActualizarMercadoAgricola();
    });
    inputO.addEventListener('input', () => {
      sliderO.value = inputO.value;
      validarYActualizarMercadoAgricola();
    });
  }

  if (sliderD && inputD) {
    sliderD.addEventListener('input', () => {
      inputD.value = sliderD.value;
      validarYActualizarMercadoAgricola();
    });
    inputD.addEventListener('input', () => {
      sliderD.value = inputD.value;
      validarYActualizarMercadoAgricola();
    });
  }

  if (inputPrecio) {
    inputPrecio.addEventListener('input', () => {
      validarYActualizarMercadoAgricola();
    });
  }

  actualizarMercadoAgricola();
}

function validarYActualizarMercadoAgricola() {
  const of = parseFloat(document.getElementById('agr-input-oferta')?.value);
  const dem = parseFloat(document.getElementById('agr-input-demanda')?.value);
  const pBase = parseFloat(document.getElementById('agr-input-precio-base')?.value);

  const errorBox = document.getElementById('agr-error-box');

  if (isNaN(of) || isNaN(dem) || isNaN(pBase) || of <= 0 || dem <= 0 || pBase <= 0) {
    if (errorBox) {
      errorBox.textContent = 'Ingrese valores positivos mayores a cero en la oferta, demanda y precio de cosecha.';
      errorBox.style.display = 'block';
    }
    return;
  }

  if (errorBox) errorBox.style.display = 'none';

  estadoApp.mercadoAgricola.oferta = of;
  estadoApp.mercadoAgricola.demanda = dem;
  estadoApp.mercadoAgricola.precioBase = pBase;

  actualizarMercadoAgricola();
}

function actualizarMercadoAgricola() {
  const of = estadoApp.mercadoAgricola.oferta;
  const dem = estadoApp.mercadoAgricola.demanda;
  const pBase = estadoApp.mercadoAgricola.precioBase;

  const precioMercado = pBase * (dem / of);
  const diferencia = of - dem;

  const lblPrecio = document.getElementById('agr-precio-mercado');
  const lblBrecha = document.getElementById('agr-brecha-mercado');
  const callout = document.getElementById('agr-callout-estado');
  const explicacion = document.getElementById('agr-analisis-texto');

  if (lblPrecio) lblPrecio.textContent = `$${precioMercado.toFixed(2)} MXN`;
  if (lblBrecha) lblBrecha.textContent = `${Math.abs(diferencia)} toneladas`;

  if (callout && explicacion) {
    if (of > dem) {
      callout.className = 'status-callout status-callout-excess';
      callout.innerHTML = `<span>⚠️</span> Superávit Agrícola: Oferta mayor que la demanda (+${diferencia} ton)`;
      explicacion.innerHTML = `
        <p><strong>Impacto Operativo:</strong> Hay mayor cosecha disponible que requerimientos de compra. El precio tiende a ajustarse a la baja ($${precioMercado.toFixed(2)} MXN) para agilizar la rotación de producto fresco.</p>
        <p><strong>Criterio de Sustentabilidad:</strong> Se recomienda activar de inmediato plantas de secado solar, conservación en silos y transformación de conservas para evitar desperdicio de biomasa y agua de riego.</p>
      `;
    } else if (of < dem) {
      callout.className = 'status-callout status-callout-deficit';
      callout.innerHTML = `<span>🔥</span> Déficit Agrícola: Demanda supera la oferta disponible (-${Math.abs(diferencia)} ton)`;
      explicacion.innerHTML = `
        <p><strong>Impacto Operativo:</strong> La demanda comunitaria supera el volumen de cosecha actual, generando presión al alza en el precio ($${precioMercado.toFixed(2)} MXN).</p>
        <p><strong>Criterio de Sustentabilidad:</strong> Es prioritario diversificar calendarios de siembra con riego eficiente para satisfacer la soberanía alimentaria sin sobreexplotar los acuíferos locales.</p>
      `;
    } else {
      callout.className = 'status-callout status-callout-eq';
      callout.innerHTML = `<span>⚖️</span> Mercado Agrícola en Equilibrio Operativo (Oferta = Demanda)`;
      explicacion.innerHTML = `
        <p><strong>Impacto Operativo:</strong> Toda la cosecha recolectada se distribuye íntegramente al precio justo de referencia ($${precioMercado.toFixed(2)} MXN).</p>
        <p><strong>Criterio de Sustentabilidad:</strong> Uso eficiente y balanceado de recursos agrícolas, garantizando la solvencia del productor y el acceso oportuno a alimentos.</p>
      `;
    }
  }

  dibujarGraficaOfertaDemandaCanvas('agr-canvas-curvas', of, dem);
}

function inicializarSeccionGanaderia() {
  const sliderO = document.getElementById('gan-slider-oferta');
  const inputO = document.getElementById('gan-input-oferta');
  const sliderD = document.getElementById('gan-slider-demanda');
  const inputD = document.getElementById('gan-input-demanda');
  const inputPrecio = document.getElementById('gan-input-precio-base');

  if (sliderO && inputO) {
    sliderO.addEventListener('input', () => {
      inputO.value = sliderO.value;
      validarYActualizarMercadoGanadero();
    });
    inputO.addEventListener('input', () => {
      sliderO.value = inputO.value;
      validarYActualizarMercadoGanadero();
    });
  }

  if (sliderD && inputD) {
    sliderD.addEventListener('input', () => {
      inputD.value = sliderD.value;
      validarYActualizarMercadoGanadero();
    });
    inputD.addEventListener('input', () => {
      sliderD.value = inputD.value;
      validarYActualizarMercadoGanadero();
    });
  }

  if (inputPrecio) {
    inputPrecio.addEventListener('input', () => {
      validarYActualizarMercadoGanadero();
    });
  }

  actualizarMercadoGanadero();
}

function validarYActualizarMercadoGanadero() {
  const of = parseFloat(document.getElementById('gan-input-oferta')?.value);
  const dem = parseFloat(document.getElementById('gan-input-demanda')?.value);
  const pBase = parseFloat(document.getElementById('gan-input-precio-base')?.value);

  const errorBox = document.getElementById('gan-error-box');

  if (isNaN(of) || isNaN(dem) || isNaN(pBase) || of <= 0 || dem <= 0 || pBase <= 0) {
    if (errorBox) {
      errorBox.textContent = 'Ingrese valores válidos mayores a cero para producción y demanda pecuaria.';
      errorBox.style.display = 'block';
    }
    return;
  }

  if (errorBox) errorBox.style.display = 'none';

  estadoApp.mercadoGanadero.oferta = of;
  estadoApp.mercadoGanadero.demanda = dem;
  estadoApp.mercadoGanadero.precioBase = pBase;

  actualizarMercadoGanadero();
}

function actualizarMercadoGanadero() {
  const of = estadoApp.mercadoGanadero.oferta;
  const dem = estadoApp.mercadoGanadero.demanda;
  const pBase = estadoApp.mercadoGanadero.precioBase;

  const precioMercado = pBase * (dem / of);
  const diferencia = of - dem;

  const lblPrecio = document.getElementById('gan-precio-mercado');
  const lblBrecha = document.getElementById('gan-brecha-mercado');
  const callout = document.getElementById('gan-callout-estado');
  const explicacion = document.getElementById('gan-analisis-texto');

  if (lblPrecio) lblPrecio.textContent = `$${precioMercado.toFixed(2)} MXN/kg`;
  if (lblBrecha) lblBrecha.textContent = `${Math.abs(diferencia)} cabezas/lote`;

  if (callout && explicacion) {
    if (of > dem) {
      callout.className = 'status-callout status-callout-excess';
      callout.innerHTML = `<span>⚠️</span> Exceso de Oferta Pecuaria (+${diferencia} unidades)`;
      explicacion.innerHTML = `
        <p><strong>Análisis Silvopastoril:</strong> La capacidad de pastoreo rotativo generó un volumen superior a los pedidos de la cooperativa. El precio ajustado es de $${precioMercado.toFixed(2)} MXN/kg.</p>
        <p><strong>Criterio Sustentable:</strong> El manejo silvopastoril permite diferir el ganado en potreros arbolados sin pérdida de peso corporal ni degradación del suelo.</p>
      `;
    } else if (of < dem) {
      callout.className = 'status-callout status-callout-deficit';
      callout.innerHTML = `<span>🔥</span> Alta Demanda Pecuaria: Escasez (-${Math.abs(diferencia)} unidades)`;
      explicacion.innerHTML = `
        <p><strong>Análisis Silvopastoril:</strong> La demanda de carne y lácteos ecológicos supera el suministro. El precio de mercado aumenta a $${precioMercado.toFixed(2)} MXN/kg.</p>
        <p><strong>Criterio Sustentable:</strong> Se evita el sobrepastoreo forzado que compacta el suelo; se prioriza la regeneración de biomasa forrajera.</p>
      `;
    } else {
      callout.className = 'status-callout status-callout-eq';
      callout.innerHTML = `<span>⚖️</span> Balance Pecuario en Equilibrio`;
      explicacion.innerHTML = `
        <p><strong>Análisis Silvopastoril:</strong> Carga animal balanceada con la tasa de crecimiento de pastos y forrajes arbóreos, cubriendo la demanda a $${precioMercado.toFixed(2)} MXN/kg.</p>
      `;
    }
  }

  dibujarGraficaOfertaDemandaCanvas('gan-canvas-curvas', of, dem);
}

function dibujarGraficaOfertaDemandaCanvas(canvasId, oferta, demanda) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;

  ctx.clearRect(0, 0, w, h);

  const padLeft = 45;
  const padRight = 25;
  const padTop = 25;
  const padBottom = 35;
  const plotW = w - padLeft - padRight;
  const plotH = h - padTop - padBottom;

  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;

  for (let i = 0; i <= 4; i++) {
    const y = padTop + (plotH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(w - padRight, y);
    ctx.stroke();

    const x = padLeft + (plotW / 4) * i;
    ctx.beginPath();
    ctx.moveTo(x, padTop);
    ctx.lineTo(x, h - padBottom);
    ctx.stroke();
  }

  ctx.strokeStyle = '#0d3829';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padLeft, padTop);
  ctx.lineTo(padLeft, h - padBottom);
  ctx.lineTo(w - padRight, h - padBottom);
  ctx.stroke();

  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(padLeft + 10, padTop + 15);
  ctx.lineTo(padLeft + plotW - 10, h - padBottom - 15);
  ctx.stroke();

  ctx.fillStyle = '#ef4444';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('Demanda (D)', padLeft + plotW - 65, h - padBottom - 20);

  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(padLeft + 10, h - padBottom - 15);
  ctx.lineTo(padLeft + plotW - 10, padTop + 15);
  ctx.stroke();

  ctx.fillStyle = '#10b981';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('Oferta (S)', padLeft + plotW - 65, padTop + 25);

  const maxVal = Math.max(oferta, demanda, 200) * 1.3;
  const qOfX = padLeft + (oferta / maxVal) * plotW;
  const qDemX = padLeft + (demanda / maxVal) * plotW;

  ctx.fillStyle = '#10b981';
  ctx.beginPath();
  ctx.arc(qOfX, h - padBottom, 5.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText(`Qs: ${oferta}`, qOfX - 15, h - padBottom - 10);

  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.arc(qDemX, h - padBottom, 5.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText(`Qd: ${demanda}`, qDemX - 15, h - padBottom + 18);

  if (Math.abs(oferta - demanda) < 3) {
    const eqX = padLeft + plotW / 2;
    const eqY = padTop + plotH / 2;
    ctx.fillStyle = '#0d3829';
    ctx.beginPath();
    ctx.arc(eqX, eqY, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillText('Punto de Equilibrio', eqX - 45, eqY - 12);
  }
}

function inicializarSeccionComercio() {
  renderizarTablaComercio();

  const filtro = document.getElementById('com-filtro-origen');
  if (filtro) {
    filtro.addEventListener('change', () => {
      const val = filtro.value;
      if (val === 'todos') {
        renderizarTablaComercio(estadoApp.productosComercio);
      } else {
        const filtrados = estadoApp.productosComercio.filter(p => p.tipo.toLowerCase() === val.toLowerCase());
        renderizarTablaComercio(filtrados);
      }
    });
  }
}

function renderizarTablaComercio(lista = estadoApp.productosComercio) {
  const tbody = document.getElementById('com-tabla-body');
  if (!tbody) return;

  tbody.innerHTML = '';

  lista.forEach(item => {
    const tr = document.createElement('tr');
    const badge = item.tipo === 'Local'
      ? `<span class="badge-pill badge-pill-green">Local Regional</span>`
      : `<span class="badge-pill badge-pill-orange">Global Importado</span>`;

    tr.innerHTML = `
      <td><strong>${escapeHTML(item.nombre)}</strong></td>
      <td>${badge}</td>
      <td>${escapeHTML(item.origen)}</td>
      <td><strong>$${item.precio.toFixed(2)} MXN</strong></td>
      <td>${item.distanciaKm} km</td>
      <td><span style="font-weight:700; color: #0d3829;">${escapeHTML(item.emisionesTransporte)}</span></td>
      <td><span style="font-weight:700; color: ${item.tipo === 'Local' ? '#166534' : '#9a3412'};">${escapeHTML(item.retencionLocal)}</span></td>
      <td><span class="badge-pill badge-pill-blue" title="${escapeHTML(item.fuente)}">Verificado</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function inicializarSeccionPIB() {
  const inPrim = document.getElementById('pib-input-primario');
  const inSec = document.getElementById('pib-input-secundario');
  const inTer = document.getElementById('pib-input-terciario');
  const btnInegi = document.getElementById('pib-btn-cargar-inegi');

  [inPrim, inSec, inTer].forEach(inp => {
    if (inp) {
      inp.addEventListener('input', () => {
        validarYActualizarPIB();
      });
    }
  });

  if (btnInegi) {
    btnInegi.addEventListener('click', () => {
      if (inPrim) inPrim.value = 1225.0;
      if (inSec) inSec.value = 10210.0;
      if (inTer) inTer.value = 20765.0;
      validarYActualizarPIB();
      mostrarNotificacionPill('Datos oficiales de Cuentas Nacionales de México (INEGI) cargados.');
    });
  }

  actualizarCuentasPIB();
}

function validarYActualizarPIB() {
  const prim = parseFloat(document.getElementById('pib-input-primario')?.value);
  const sec = parseFloat(document.getElementById('pib-input-secundario')?.value);
  const ter = parseFloat(document.getElementById('pib-input-terciario')?.value);

  const errorBox = document.getElementById('pib-error-box');

  if (isNaN(prim) || isNaN(sec) || isNaN(ter) || prim < 0 || sec < 0 || ter < 0) {
    if (errorBox) {
      errorBox.textContent = 'Ingrese montos numéricos válidos mayores o iguales a cero en todos los sectores.';
      errorBox.style.display = 'block';
    }
    return;
  }

  const suma = prim + sec + ter;
  if (suma <= 0) {
    if (errorBox) {
      errorBox.textContent = 'El PIB consolidado debe ser mayor a cero.';
      errorBox.style.display = 'block';
    }
    return;
  }

  if (errorBox) errorBox.style.display = 'none';

  estadoApp.pib.primario = prim;
  estadoApp.pib.secundario = sec;
  estadoApp.pib.terciario = ter;

  actualizarCuentasPIB();
}

function actualizarCuentasPIB() {
  const prim = estadoApp.pib.primario;
  const sec = estadoApp.pib.secundario;
  const ter = estadoApp.pib.terciario;
  const total = prim + sec + ter;

  const pctPrim = (prim / total) * 100;
  const pctSec = (sec / total) * 100;
  const pctTer = (ter / total) * 100;

  const elPVal = document.getElementById('pib-val-prim');
  const elPPct = document.getElementById('pib-pct-prim');
  const elSVal = document.getElementById('pib-val-sec');
  const elSPct = document.getElementById('pib-pct-sec');
  const elTVal = document.getElementById('pib-val-ter');
  const elTPct = document.getElementById('pib-pct-ter');
  const elTotVal = document.getElementById('pib-val-tot');
  const elTotPct = document.getElementById('pib-pct-tot');

  if (elPVal) elPVal.textContent = `$${prim.toLocaleString('es-MX', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`;
  if (elPPct) elPPct.textContent = `${pctPrim.toFixed(2)}%`;
  if (elSVal) elSVal.textContent = `$${sec.toLocaleString('es-MX', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`;
  if (elSPct) elSPct.textContent = `${pctSec.toFixed(2)}%`;
  if (elTVal) elTVal.textContent = `$${ter.toLocaleString('es-MX', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`;
  if (elTPct) elTPct.textContent = `${pctTer.toFixed(2)}%`;
  if (elTotVal) elTotVal.textContent = `$${total.toLocaleString('es-MX', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`;
  if (elTotPct) elTotPct.textContent = `${(pctPrim + pctSec + pctTer).toFixed(2)}%`;

  dibujarGraficaDonaPIB();
}

function dibujarGraficaDonaPIB() {
  const canvas = document.getElementById('pib-canvas-dona');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;

  ctx.clearRect(0, 0, w, h);

  const prim = estadoApp.pib.primario;
  const sec = estadoApp.pib.secundario;
  const ter = estadoApp.pib.terciario;
  const total = prim + sec + ter;

  if (total <= 0) return;

  const datos = [
    { nombre: 'Sector Primario (Agro/Ganadería)', val: prim, pct: (prim / total) * 100, color: '#10b981' },
    { nombre: 'Sector Secundario (Industria/Artesanía)', val: sec, pct: (sec / total) * 100, color: '#f97316' },
    { nombre: 'Sector Terciario (Comercio/Servicios)', val: ter, pct: (ter / total) * 100, color: '#0d3829' }
  ];

  const cx = Math.min(w * 0.38, 160);
  const cy = h / 2;
  const rExt = Math.min(cx - 20, cy - 20);
  const rInt = rExt * 0.58;

  let anguloInicio = -Math.PI / 2;

  datos.forEach(d => {
    const anguloPorcion = (d.pct / 100) * (Math.PI * 2);
    const anguloFin = anguloInicio + anguloPorcion;

    ctx.beginPath();
    ctx.arc(cx, cy, rExt, anguloInicio, anguloFin);
    ctx.arc(cx, cy, rInt, anguloFin, anguloInicio, true);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    anguloInicio = anguloFin;
  });

  ctx.fillStyle = '#0d3829';
  ctx.font = 'bold 13px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('PIB TOTAL', cx, cy - 3);
  ctx.font = '10px sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('100.0%', cx, cy + 13);

  const legX = cx + rExt + 30;
  let legY = cy - 40;

  datos.forEach(d => {
    ctx.fillStyle = d.color;
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(legX, legY, 13, 13, 3);
      ctx.fill();
    } else {
      ctx.fillRect(legX, legY, 13, 13);
    }

    ctx.fillStyle = '#0d3829';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${d.nombre}: ${d.pct.toFixed(1)}%`, legX + 20, legY + 11);

    ctx.fillStyle = '#64748b';
    ctx.font = '10px sans-serif';
    ctx.fillText(`$${d.val.toLocaleString('es-MX', { maximumFractionDigits: 1 })} mmdp`, legX + 20, legY + 24);

    legY += 40;
  });
}

function inicializarModales() {
  const btnAbrirAct = document.getElementById('btn-abrir-modal-actividad');
  const modalAct = document.getElementById('modal-actividad');
  const btnCerrarAct = document.getElementById('btn-cerrar-modal-actividad');
  const btnCancelAct = document.getElementById('btn-cancelar-modal-actividad');
  const formAct = document.getElementById('form-nueva-actividad');

  if (btnAbrirAct) {
    btnAbrirAct.addEventListener('click', () => {
      if (modalAct) modalAct.classList.add('open');
    });
  }

  if (btnCerrarAct) {
    btnCerrarAct.addEventListener('click', () => {
      if (modalAct) modalAct.classList.remove('open');
    });
  }

  if (btnCancelAct) {
    btnCancelAct.addEventListener('click', () => {
      if (modalAct) modalAct.classList.remove('open');
    });
  }

  if (formAct) {
    formAct.addEventListener('submit', (e) => {
      e.preventDefault();
      guardarNuevaActividad();
    });
  }
}

function guardarNuevaActividad() {
  const nombre = document.getElementById('modal-act-nombre')?.value.trim();
  const enfoque = document.getElementById('modal-act-enfoque')?.value;
  const descripcion = document.getElementById('modal-act-desc')?.value.trim();
  const importancia = document.getElementById('modal-act-imp')?.value.trim();
  const fuente = document.getElementById('modal-act-fuente')?.value.trim();

  if (!nombre || !descripcion || !importancia || !fuente) {
    mostrarNotificacionPill('Por favor complete todos los datos del registro.');
    return;
  }

  const nueva = {
    id: Date.now(),
    nombre,
    enfoque,
    categoria: enfoque.charAt(0).toUpperCase() + enfoque.slice(1),
    descripcion,
    importancia,
    viabilidad: 'Viabilidad operativa comprobada en la comunidad sustentable.',
    tipoDato: 'real',
    fuente
  };

  estadoApp.actividades.unshift(nueva);

  const modal = document.getElementById('modal-actividad');
  if (modal) modal.classList.remove('open');
  document.getElementById('form-nueva-actividad')?.reset();

  mostrarNotificacionPill(`Actividad "${nueva.nombre}" registrada en ${nueva.categoria}.`);
  renderizarTarjetasEnfoque(enfoque);
}

function renderizarTarjetasEnfoque(enfoque) {
  const cont = document.getElementById(`grid-${enfoque}`);
  if (!cont) return;

  const filtradas = estadoApp.actividades.filter(a => a.enfoque === enfoque);
  cont.innerHTML = '';

  filtradas.forEach(a => {
    const tile = document.createElement('div');
    tile.className = 'activity-tile';
    tile.innerHTML = `
      <div>
        <div class="tile-top">
          <span class="badge-pill badge-pill-green">${escapeHTML(a.categoria)}</span>
          <span class="badge-pill badge-pill-blue">Dato Verificado</span>
        </div>
        <h4 class="tile-title">${escapeHTML(a.nombre)}</h4>
        <p class="tile-desc">${escapeHTML(a.descripcion)}</p>
        <div class="tile-metric-box">
          <strong>Aporte Comunitario:</strong><br>${escapeHTML(a.importancia)}
        </div>
      </div>
      <div style="font-size: 0.75rem; color: var(--color-subtle); border-top: 1px solid var(--color-border); padding-top: 0.75rem;">
        Fuente: ${escapeHTML(a.fuente.substring(0, 36))}...
      </div>
    `;
    cont.appendChild(tile);
  });
}

function inicializarBuscadorTop() {
  const inputSearch = document.getElementById('topbar-search-input');
  if (!inputSearch) return;

  inputSearch.addEventListener('input', () => {
    const term = inputSearch.value.toLowerCase().trim();
    if (!term) return;

    const coincidencia = estadoApp.actividades.find(a =>
      a.nombre.toLowerCase().includes(term) ||
      a.descripcion.toLowerCase().includes(term) ||
      a.enfoque.toLowerCase().includes(term)
    );

    if (coincidencia) {
      navegarSeccion(coincidencia.enfoque);
    }
  });
}

function mostrarNotificacionPill(mensaje) {
  const cont = document.getElementById('toast-box-area');
  if (!cont) return;

  const pill = document.createElement('div');
  pill.className = 'toast-pill';
  pill.innerHTML = `<span>🌱</span> <span>${escapeHTML(mensaje)}</span>`;
  cont.appendChild(pill);

  setTimeout(() => {
    pill.style.opacity = '0';
    pill.style.transform = 'translateY(10px)';
    pill.style.transition = 'all 0.25s ease';
    setTimeout(() => pill.remove(), 250);
  }, 3500);
}

function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}
