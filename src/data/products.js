export const products = [
  { id: 1, name: 'Cojin Lino Arena', price: 24990, color: 'from-[#f0e6d8] to-[#e4d4bb]' },
  { id: 2, name: 'Cojin Lavanda Suave', price: 23990, color: 'from-[#ece8f8] to-[#d9d1f2]' },
  { id: 3, name: 'Cojin Rosa Palo', price: 21990, color: 'from-[#f6e8e3] to-[#efd6cf]' },
  { id: 4, name: 'Funda Sofa Crudo', price: 62990, color: 'from-[#efe6d9] to-[#deceb6]' },
  { id: 5, name: 'Funda Sillon Noche', price: 59990, color: 'from-[#353d53] to-[#242b3f]' },
  { id: 6, name: 'Pie de Cama Minimal', price: 45990, color: 'from-[#f2ebe1] to-[#dbcbb5]' },
  { id: 7, name: 'Set Cojines Pastel', price: 48990, color: 'from-[#eee8f8] to-[#d8cdee]' },
  { id: 8, name: 'Mantel Textura Organica', price: 32990, color: 'from-[#eee2d6] to-[#e1cbb8]' },
  { id: 9, name: 'Camino de Mesa Azul', price: 27990, color: 'from-[#2f3a58] to-[#1f2942]' },
  { id: 10, name: 'Funda Cojin Rayas', price: 18990, color: 'from-[#f4e9dc] to-[#e5d6c5]' },
  { id: 11, name: 'Funda Cojin Nube', price: 17990, color: 'from-[#f0eef8] to-[#e3ddf5]' },
  { id: 12, name: 'Funda Cojin Grafito', price: 19990, color: 'from-[#3b3b3b] to-[#1f1f1f]' },
  { id: 13, name: 'Cortina Lino Natural', price: 69990, color: 'from-[#f5ede1] to-[#e7d6c1]' },
  { id: 14, name: 'Set Fundas Comedor', price: 55990, color: 'from-[#ece2d6] to-[#dbc6ac]' },
  { id: 15, name: 'Manta Decorativa Duna', price: 42990, color: 'from-[#f3e8dd] to-[#e0cdb5]' },
  { id: 16, name: 'Cojin Geometrico Navy', price: 26990, color: 'from-[#32415f] to-[#1f2a44]' },
  { id: 17, name: 'Pack Textiles Living', price: 82990, color: 'from-[#f1e7db] to-[#ddc8ae]' },
  { id: 18, name: 'Set Deco Primavera', price: 73990, color: 'from-[#f2e5df] to-[#e6d2cb]' },
]

export const formatCLP = (amount) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(amount)
