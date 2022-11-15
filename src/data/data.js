const products = [    
        {
            id: 1,
            imagen: "/imagenes/acero-arg.avif",
            nombre: "Termos de Acero Luminox en Colores – Blanco",
            precio: 10152,
            stock: 12,
            category: "Termo acero",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"            
        },
        {
            id: 2,
            imagen: "/imagenes/acero-negro.avif",
            nombre: "Termo de Acero Luminox Negro",
            precio: 10152,
            stock: 10,
            category: "Termo acero",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 3,
            imagen: "/imagenes/acero-boca.avif",
            nombre: "Termo de Acero Luminox Boca Jrs – Camiseta",
            precio: 10295,
            stock: 5,
            category: "Termo acero",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 4,
            imagen: "/imagenes/acero-arg.avif",
            nombre: "Termo de Acero Luminox Bandera Argentina",
            precio: 10152,
            stock: 11,
            category: "Termo acero",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 5,
            imagen: "/imagenes/tangoazul1.webp",
            nombre: "Termo Tango 1000 Compacto – Azul",
            precio: 3177,
            stock: 4,
            category: "Termo vidrio",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 6,
            imagen: "/imagenes/tangorosa1.webp",
            nombre: "Termo Tango 1000 Compacto – Rosa",
            precio: 3177,
            stock: 6,
            category: "Termo vidrio",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 7,
            imagen: "/imagenes/sigmaazul1.webp",
            nombre: "Termo Sigma – Azul",
            precio: 2463,
            stock: 3,
            category: "Termo vidrio",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 8,
            imagen: "/imagenes/sigmavioleta1.webp",
            nombre: "Termo Sigma – Violeta",
            precio: 2463,
            stock: 7,
            category: "Termo vidrio",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 9,
            imagen: "/imagenes/alfarojo.webp",
            nombre: "Termo Alfa – Rojo",
            precio: 2328,
            stock: 2,
            category: "Termo vidrio",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 10,
            imagen: "/imagenes/alfagris.avif",
            nombre: "Termo Alfa – Gris",
            precio: 2321,
            stock: 20,
            category: "Termo vidrio",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 11,
            imagen: "/imagenes/tatuazul.webp",
            nombre: "Termo Tatú – Azul",
            precio: 2215,
            stock: 10,
            category: "Termo vidrio",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 12,
            imagen: "/imagenes/taturojo1.webp",
            nombre: "Termo Tatú – Rojo",
            precio: 2215,
            stock: 5,
            category: "Termo vidrio",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 13,
            imagen: "/imagenes/boca1.webp",
            nombre: "Termo Mate Joven Boca Jrs",
            precio: 2215,
            stock: 30,
            category: "Termo vidrio clubes",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 14,
            imagen: "/imagenes/river1.webp",
            nombre: "Termo Mate Joven River Plate",
            precio: 2215,
            stock: 8,
            category: "Termo vidrio clubes",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 15,
            imagen: "/imagenes/casla1.webp",
            nombre: "Termo Mate Joven San Lorenzo",
            precio: 2215,
            stock: 21,
            category: "Termo vidrio clubes",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 16,
            imagen: "/imagenes/racing1.webp",
            nombre: "Termo Mate Joven Racing Club",
            precio: 2215,
            stock: 2,
            category: "Termo vidrio clubes",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 17,
            imagen: "/imagenes/cai1.webp",
            nombre: "Termo Mate Joven Independiente",
            precio: 2215,
            stock: 3,
            category: "Termo vidrio clubes",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 18,
            imagen: "/imagenes/capriceblanco1.webp",
            nombre: "Jarra Caprice – Blanco",
            precio: 3026,
            stock: 15,
            category: "Jarras",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 19,
            imagen: "/imagenes/iazul2.webp",
            nombre: "Isotérmico Tropical Blanco – Azul",
            precio: 2613,
            stock: 10,
            category: "Bidón",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 20,
            imagen: "/imagenes/inaranja2.webp",
            nombre: "Isotérmico Tropical Blanco – Naranja",
            precio: 2613,
            stock: 7,
            category: "Bidón",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 21,
            imagen: "/imagenes/iazuln1.webp",
            nombre: "Isotérmico Tropical Negro – Azul",
            precio: 2613,
            stock: 6,
            category: "Bidón",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 22,
            imagen: "/imagenes/inaranjan1.webp",
            nombre: "Isotérmico Tropical Negro – Naranja",
            precio: 2613,
            stock: 5,
            category: "Bidón",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 23,
            imagen: "/imagenes/isoboca1.webp",
            nombre: "Isotérmico Tropical Boca Jrs",
            precio: 3065,
            stock: 14,
            category: "Bidón",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        },
        {
            id: 24,
            imagen: "/imagenes/isoriver1.webp",
            nombre: "Isotérmico Tropical River Plate",
            precio: 3065,
            stock: 3,
            category: "Bidón",
            detail: "- Altura: 34 - Diámetro de la Base: 8 cm - Altura de la tapa: 8 cm - Diámetro de la boca: 5,5 cm"
        }
    ]
    
    export default products