// CORIALSTORE — Catálogo de productos
// Edita aquí para agregar, quitar o modificar productos y precios.

const GAMES = [
  {
    id: 'roblox', name: 'Roblox', emoji: '🟥',
    color: '#c0392b', color2: '#7b0d0d',
    tagline: 'Robux, cuentas premium y objetos exclusivos',
    categories: [
      { id:'robux', label:'💎 Robux', products: [
        { icon:'💎', name:'400 Robux',    desc:'Carga vía GamePass. Entrega en minutos.',              price:'$50',   avail:true  ,  img:'' },
        { icon:'💎', name:'800 Robux',    desc:'Ideal para ropa, accesorios y gamepasses.',            price:'$90',   avail:true  ,  img:'' },
        { icon:'💎', name:'1,700 Robux',  desc:'El pack más popular. Cubre passes y exclusivos.',      price:'$175',  avail:true  ,  img:'./img/perfilfortnite.avif' },
        { icon:'💎', name:'4,500 Robux',  desc:'Para jugadores serios. Mejor relación precio-cant.',   price:'$440',  avail:true  ,  img:'' },
        { icon:'💎', name:'10,000 Robux', desc:'El pack definitivo para creadores y coleccionistas.',  price:'$950',  avail:true  ,  img:'' },
      ]},
      { id:'cuentas', label:'👤 Cuentas', products: [
        { icon:'👤', name:'Cuenta Starter',  desc:'Cuenta nueva sin historial. Lista para usar.',             price:'$80',  avail:true  ,  img:'' },
        { icon:'⭐', name:'Cuenta Premium',  desc:'Premium activo + varios items y robux incluidos.',         price:'$250', avail:true  ,  img:'' },
        { icon:'👑', name:'Cuenta OG Rara',  desc:'Cuenta antigua con items limitados de colección.',         price:'$800', avail:false ,  img:'' },
      ]},
      { id:'adoptme', label:'🐾 Adopt Me', products: [
        { icon:'🐉', name:'Dragon Neon',         desc:'Mascota legendaria versión Neon.',                      price:'$120', avail:true  ,  img:'' },
        { icon:'🦄', name:'Unicornio Mega Neon',  desc:'Mega Neon del clásico. Brilla en 4 colores.',          price:'$200', avail:true  ,  img:'' },
        { icon:'🐺', name:'Pack x3 Legendarios',  desc:'Tres mascotas legendarias de temporadas pasadas.',     price:'$180', avail:true  ,  img:'' },
      ]},
      { id:'mm2', label:'🔪 Murder Mystery 2', products: [
        { icon:'🔪', name:'Godly Knife',       desc:'Cuchillo Godly con efecto animado.',                      price:'$95',  avail:true  ,  img:'' },
        { icon:'🔫', name:'Godly Gun',          desc:'Pistola Godly con skin exclusiva. Muy rara.',            price:'$110', avail:true  ,  img:'' },
        { icon:'💀', name:'Set Godly Completo', desc:'Cuchillo + pistola del mismo set. Precio especial.',     price:'$190', avail:true  ,  img:'' },
      ]},
      { id:'ps99', label:'🐶 Pet Simulator 99', products: [
        { icon:'🐶', name:'Huge Cat (Exclusivo)', desc:'Huge pet de rareza máxima. Boost x10 monedas.',        price:'$300', avail:true  ,  img:'' },
        { icon:'💰', name:'1B Diamantes',          desc:'Diamantes para canjear. Entrega inmediata.',          price:'$70',  avail:true  ,  img:'' },
        { icon:'🌟', name:'Pack Starter PS99',     desc:'3 mascotas raras + 500M monedas.',                    price:'$130', avail:true  ,  img:'' },
      ]},
    ]
  },
  {
    id: 'fortnite', name: 'Fortnite', emoji: '⚡',
    color: '#5b2d8e', color2: '#1a1a2e',
    tagline: 'Cuentas OG, V-Bucks y skins de temporadas pasadas',
    categories: [
      { id:'cuentas', label:'👤 Cuentas', products: [
        { icon:'🛡️', name:'Cuenta OG Tier 100',    desc:'Black Knight incluida. Temporadas 1-3.',              price:'$650', avail:true  ,  img:'' },
        { icon:'💀', name:'Cuenta Skull Trooper',   desc:'Skull Trooper original + 20 skins adicionales.',     price:'$450', avail:true  ,  img:'' },
        { icon:'🎮', name:'Cuenta Básica 10+ Skins',desc:'10+ skins, nivel 50+. Perfecta para empezar.',       price:'$180', avail:true  ,  img:'' },
      ]},
      { id:'vbucks', label:'💙 V-Bucks', products: [
        { icon:'💙', name:'1,000 V-Bucks', desc:'Para objetos de tienda. Entrega por gift.',                   price:'$130', avail:true  ,  img:'' },
        { icon:'💙', name:'2,800 V-Bucks', desc:'Pase de batalla + extras. El más solicitado.',               price:'$330', avail:true  ,  img:'./img/pavosverdes.jpg' },
        { icon:'💙', name:'5,000 V-Bucks', desc:'Para skins grandes y colecciones.',                          price:'$580', avail:true  ,  img:'' },
      ]},
      { id:'skins', label:'🎭 Skins Raras', products: [
        { icon:'🎭', name:'Ghoul Trooper',  desc:'Skin de Halloween ultra rara. Pink variant incluida.',       price:'$380', avail:true  ,  img:'' },
        { icon:'🔵', name:'Recon Expert',   desc:'Una de las skins más escasas del juego.',                   price:'$520', avail:false ,  img:'' },
      ]},
    ]
  },
  {
    id: 'freefire', name: 'Free Fire', emoji: '🔥',
    color: '#e55c00', color2: '#7a1500',
    tagline: 'Diamantes, cuentas heroicas y personajes exclusivos',
    categories: [
      { id:'diamantes', label:'💎 Diamantes', products: [
        { icon:'💎', name:'100 Diamantes',   desc:'Envío directo a tu ID. Entrega en minutos.',                price:'$30',   avail:false  ,  img:'' },
        { icon:'💎', name:'500 Diamantes',   desc:'Para ruleta o skins de la tienda.',                        price:'$130',  avail:true  ,  img:'' },
        { icon:'💎', name:'2,000 Diamantes', desc:'Pack grande. Ideal para eventos especiales.',              price:'$480',  avail:true  ,  img:'' },
        { icon:'💎', name:'5,000 Diamantes', desc:'Máxima cantidad. Para coleccionistas de ropa rara.',       price:'$1,150',avail:true  ,  img:'' },
      ]},
      { id:'cuentas', label:'👤 Cuentas', products: [
        { icon:'🔥', name:'Cuenta Heroica',      desc:'Rango Heroico, 30+ skins de armas y personajes.',     price:'$350', avail:true  ,  img:'' },
        { icon:'🌟', name:'Cuenta Grandmaster',  desc:'El rango más alto. Items de temporada exclusivos.',   price:'$700', avail:false ,  img:'' },
      ]},
    ]
  },
  {
    id: 'minecraft', name: 'Minecraft', emoji: '⛏️',
    color: '#5d8a3c', color2: '#2a4018',
    tagline: 'Cuentas Java Edition y Bedrock Edition originales',
    categories: [
      { id:'java', label:'☕ Java Edition', products: [
        { icon:'☕', name:'Java Edition',       desc:'Original Java. Versión reciente, acceso completo.',      price:'$220', avail:true  ,  img:'' },
        { icon:'☕', name:'Java + Historial',   desc:'Cuenta antigua con varios nombres y logros.',            price:'$320', avail:true  ,  img:'' },
      ]},
      { id:'bedrock', label:'📱 Bedrock Edition', products: [
        { icon:'📱', name:'Bedrock Edition',         desc:'Compatible con móvil, consola y PC. Cross-platform.', price:'$180', avail:true  ,  img:'' },
        { icon:'🎮', name:'Java + Bedrock Bundle',   desc:'Las dos ediciones en una cuenta.',                    price:'$380', avail:true  ,  img:'' },
      ]},
    ]
  },
  {
    id: 'valorant', name: 'Valorant', emoji: '🎯',
    color: '#ff4655', color2: '#1a0a0e',
    tagline: 'Cuentas de alto rango, VP y skins exclusivas',
    categories: [
      { id:'cuentas', label:'👤 Cuentas', products: [
        { icon:'💎', name:'Cuenta Diamante', desc:'Rango Diamante, skins Phantom/Vandal, todos los agentes.', price:'$500', avail:true  ,  img:'' },
        { icon:'🎯', name:'Cuenta Platino',  desc:'Platino con Karambit skin y 10+ agentes.',                price:'$350', avail:true  ,  img:'' },
        { icon:'🌟', name:'Cuenta Smurf',    desc:'Nueva desbloqueada, lista para rankear.',                 price:'$140', avail:true  ,  img:'' },
      ]},
      { id:'vp', label:'💜 VP', products: [
        { icon:'💜', name:'1,000 VP', desc:'Recarga de Valorant Points. Entrega en 15 min.',                 price:'$170', avail:true  ,  img:'' },
        { icon:'💜', name:'2,050 VP', desc:'Alcanza para una skin del battle pass.',                         price:'$320', avail:true  ,  img:'' },
        { icon:'💜', name:'5,350 VP', desc:'Para skins premium como Valorant Collection.',                   price:'$800', avail:true  ,  img:'' },
      ]},
    ]
  },
];
