const homeFeaturedProducts = [
    { id: "SHREE-H1", name: "Soft Cute kitty", image: "https://i.ibb.co/0kX0WzD/file-0000000030dc8206b14693c4d6249eb0-1.png", description: "Fluffy & adorable companion for cozy desk vibes.", price: "₹449", affiliateLink: "https://link.amazon/B0f7lRmfv" },
    { id: "SHREE-H2", name: "Cozy pens", image: "https://i.ibb.co/C5GjcGR3/file-0000000054608230afbea9bebb4eba94-1.png", description: "Smooth pastel pens for aesthetic note-taking.", price: "₹239", affiliateLink: "https://link.amazon/B02KgAfwe" },
    { id: "SHREE-H3", name: "Study Lamp", image: "https://i.ibb.co/kVWqLCXG/file-0000000054608230afbea9bebb4eba94-2.png", description: "Warm glowing light for late-night study sessions.", price: "₹389", affiliateLink: "https://link.amazon/B05q6slxB" },
    { id: "SHREE-H4", name: "Cozy Tumbler", image: "https://i.ibb.co/kVCdCZqx/1785062539076.png", description: "Keep your favorite drinks cozy all day long.", price: "₹999", affiliateLink: "https://link.amazon/B01Y3aDhl" }
];

const affiliateProducts = [
    {
        id: "SHREE-P01",
        name: "Cozy Camera with Print ....",
        images: [
            "https://i.ibb.co/pBLpxHDv/Screenshot-20260725-162951-Amazon.jpg",
            "https://i.ibb.co/gFj5CKJg/Screenshot-20260725-163005-Amazon.jpg",
            "https://i.ibb.co/67JNnqMw/Screenshot-20260725-163014-Amazon.jpg",
            "https://i.ibb.co/G3b7BMtM/Screenshot-20260725-162959-Amazon.jpg"
        ],
        description: "Print photos instantly with a cute design.",
        price: "₹2595",
        affiliateLink: "https://link.amazon/B0ebgY5wp" 
    },
    {
        id: "SHREE-P02",
        name: "Asthetic Summer Wear",
        images: [
            "https://i.ibb.co/LD4zXF4V/6ee16def9d8d8e76b7526c6d0ea8296e.jpg",
            "https://i.ibb.co/jvYf3nW5/41-KV7iq-Uze-L.jpg",
            "https://i.ibb.co/pvmLFg5n/51ikxj-DMYJL.jpg",
            "https://i.ibb.co/LXTr6tvr/410-CP8x-Jl4-L.jpg",
            "https://i.ibb.co/DPZxZD3R/41ccp-Vbvkn-L.jpg",
            "https://i.ibb.co/FqNxq2pP/51-Gks-BDmw-ZL.jpg",
            "https://i.ibb.co/Kj7bMmYc/51-Piy5e-EQCL.jpg"
        ],
        description: "Trendy & breezy style for warm days.",
        price: "₹549",
        affiliateLink: "https://link.amazon/B0cXUqF9L"
    },
    {
        id: "SHREE-P03",
        name: "Black floral Kurti",
        images: [
            "https://i.ibb.co/20skprv7/1785086742333.png",
            "https://i.ibb.co/j9MFkVmR/41zf-JIuk-AGL.jpg",
            "https://i.ibb.co/27ytq4zR/418o-Cir-Cs-XL.jpg",
            "https://i.ibb.co/ks0Y94cw/41-WMpmn-OFML.jpg",
            "https://i.ibb.co/xqrP17np/41-XMYYEJx4-L.jpg",
            "https://i.ibb.co/b5HrwwpG/41-LUn-Yo3-BFL.jpg"
        ],
        description: "Graceful floral print for daily elegance.",
        price: "₹289",
        affiliateLink: "https://link.amazon/B0cKcL6GK"
    },
    {
        id: "SHREE-P04",
        name: "Cotton Frock Kurti",
        images: [
            "https://i.ibb.co/kV91vLdD/51-OUQn-Xzer-L.jpg",
            "https://i.ibb.co/ymgqysQX/51a-TWtn7y-IL.jpg"
        ],
        description: "Pure cotton comfort for everyday charm.",
        price: "₹350",
        affiliateLink: "https://link.amazon/B0euys0QR"
    },
    {
        id: "SHREE-P05",
        name: "Stylish Rayon Kurti",
        images: [
            "https://i.ibb.co/gMDwmbGV/1785093583121.png",
            "https://i.ibb.co/hxsfnKBb/41k2nx-SDuj-L.jpg",
            "https://i.ibb.co/35BLDZpK/41-Kwm-R40-Ie-L.jpg",
            "https://i.ibb.co/k6v6bjMJ/31-LSSt6-LOPL.jpg"
        ],
        description: "Chic rayon fabric with a cozy look.",
        price: "₹493",
        affiliateLink: "https://link.amazon/B0imlLnhy"
    },
    {
        id: "SHREE-P06",
        name: "Women Track Pant & Joggers",
        images: [
            "https://i.ibb.co/5x60w8Y3/1785094243573.png",
            "https://i.ibb.co/Zz7884sh/41-Tpv-R-rtr-L.jpg",
            "https://i.ibb.co/VcKB5dZy/41-THr-ZWl-Du-L.jpg"
        ],
        description: "Soft & relaxed fit for ultimate comfort.",
        price: "₹447",
        affiliateLink: "https://link.amazon/B00IxoJVj"
    },
    {
        id: "SHREE-P07",
        name: "Soft women jumpsuit",
        images: [
            "https://i.ibb.co/sJdmPks0/1785101387939.png",
            "https://i.ibb.co/XrxHtg5n/21-QVGc-DPm-BL.jpg",
            "https://i.ibb.co/VY3d26sb/31-Izp-EW8p5-L.jpg",
            "https://i.ibb.co/k2ZXvgZW/41x-Tvv-Zr-FYL.jpg",
            "https://i.ibb.co/xS6DGTSF/1785102466197.png",
            "https://i.ibb.co/J4Y0qDw/41-Uj-AILXY9-L.jpg",
            "https://i.ibb.co/Jjz2GfF8/51a-HMQAq4-IL.jpg"
        ],
        description: "Effortless style for your everyday look.",
        price: "₹599",
        affiliateLink: "https://link.amazon/B04bk8KS5"
    },
    {
        id: "SHREE-P08",
        name: "White Sport Shoes",
        images: [
            "https://i.ibb.co/svKY8B16/1785101991538-1.png",
            "https://i.ibb.co/r2kPfdWQ/31-Bb-YMa83z-L.jpg",
            "https://i.ibb.co/d4LyNZBf/41-Czqx-Qegi-L.jpg",
            "https://i.ibb.co/wrBgtRC8/51h-TUwthfq-L.jpg",
            "https://i.ibb.co/DFMGBgg/41-RLhoc-Ibi-L.jpg",
            "https://i.ibb.co/XkdPmHGb/31-TXKSTqs-QL.jpg"
        ],
        description: "Clean design for comfortable daily steps.",
        price: "₹1049",
        affiliateLink: "https://link.amazon/B0jbcDF27"
    },
    {
        id: "SHREE-P09",
        name: "Casual Shirt Unisex",
        images: [
            "https://i.ibb.co/XZK9LHM0/1785127671691.png",
            "https://i.ibb.co/GQWCpd6Q/31u-Ui-Qc-Hh-L.jpg",
            "https://i.ibb.co/SX5kB1bZ/41-PEPBvj-9-L.jpg"
        ],
        description: "Relaxed fit with cozy vibe.",
        price: "₹499",
        affiliateLink: "https://link.amazon/B0iNHgBP6"
    },
    {
        id: "SHREE-P10",
        name: "Cotton Cargo Pant",
        images: [
            "https://i.ibb.co/cX2fDqFm/1785129521622.png",
            "https://i.ibb.co/VYpDcCP4/314-S9n-Iwn8-L.jpg",
            "https://i.ibb.co/qM4Lyfd7/31a6-Cq1x-JLL.jpg",
            "https://i.ibb.co/fzQ6JmD6/31-F6-VWE9b-TL.jpg",
            "https://i.ibb.co/bgc06j6z/31-Nn-MZ1jml-L.jpg",
            "https://i.ibb.co/d4VvMHxq/31f-Wvr-I9-SBL.jpg"
        ],
        description: "Durable & stylish for a relaxed fit.",
        price: "₹669",
        affiliateLink: "https://link.amazon/B05lyNyvM"
    },
    {
        id: "SHREE-P11",
        name: "Pink Women Dress",
        images: [
            "https://i.ibb.co/2Y8PVjL2/IMG-20260728-WA0008.jpg",
            "https://i.ibb.co/VYqJCb82/41-Rgisw-Lh3-L.jpg",
            "https://i.ibb.co/gLZMKqgR/51ya-LPKXn-ML.jpg",
            "https://i.ibb.co/PsFcdKsj/51-Su-Ty8s-Xu-L.jpg",
            "https://i.ibb.co/Y7CPZfS3/511y9ot-Xnt-L.jpg"
        ],
        description: "Pretty style for cute day-out vibes.",
        price: "₹366",
        affiliateLink: "https://link.amazon/B0cGZssCZ"
    },
    {
        id: "SHREE-P12",
        name: "Cotten Western Dress",
        images: [
            "https://i.ibb.co/QjvLj4qD/41-qb-ZZ19-NL.jpg",
            "https://i.ibb.co/qYyNQFSk/41-HJg-I60-Xn-L.jpg",
            "https://i.ibb.co/3mq6MRy4/31hcsn-SRZ0-L.jpg",
            "https://i.ibb.co/99TWbsF6/31-HCXie-CBy-L.jpg",
            "https://i.ibb.co/mFdtY6sT/31va-Z4yq-Is-L.jpg",
            "https://i.ibb.co/ym5gc76t/31-lau3a-MRL.jpg",
            "https://i.ibb.co/DHNGCRqg/31-CBb0b-Z9-DL.jpg",
            "https://i.ibb.co/gFf7pRf2/31-Dpi-Ra-d-FL.jpg"
        ],
        description: "Chic cotton style for everyday elegance.",
        price: "₹599",
        affiliateLink: "https://link.amazon/B06AZrl4C"
    },
    {
        id: "SHREE-P13",
        name: "Party Essential Dress",
        images: [
            "https://i.ibb.co/zVs3RqDt/IMG-20260728-WA0010.jpg",
            "https://i.ibb.co/Jj1BWjGB/31-6-WQzkv-ML.jpg",
            "https://i.ibb.co/jZrpfKDf/31ic-X30i-W3-L.jpg",
            "https://i.ibb.co/5xvpw2B9/31nvh-Ju-RR9-L.jpg",
            "https://i.ibb.co/6RSqMZrP/31h-Vxj2d-Zu-L.jpg",
            "https://i.ibb.co/9HJTD06J/41-EUgnaa-3-L.jpg"
        ],
        description: "Stunning outfit for special evenings.",
        price: "₹699",
        affiliateLink: "https://link.amazon/B0b2ePn37"
    },
    {
        id: "SHREE-P14",
        name: "Stylish Stone Earrings",
        images: [
            "https://i.ibb.co/xSW2pS2H/IMG-20260729-WA0000.jpg",
            "https://i.ibb.co/PvfRRdfs/41jr-KCEa5-CL.jpg",
            "https://i.ibb.co/5WbxjrRm/41e8k-XYBQHL.jpg",
            "https://i.ibb.co/938RgY5q/31vr-RBZT0y-L.jpg"
        ],
        description: "Gorgeous stone earrings for everyday look.",
        price: "₹249",
        affiliateLink: "https://link.amazon/B02wulj6X"
    },
    {
        id: "SHREE-P15",
        name: "Collared Maxi Dress",
        images: [
            "https://i.ibb.co/gZ4VDY1D/IMG-20260731-WA0015.jpg",
            "https://i.ibb.co/5WNZ26BX/41huck-Bb0a-L.jpg",
            "https://i.ibb.co/j9ZJ8sP5/31uavg0-H8-L.jpg",
            "https://i.ibb.co/SXNYstH9/41-ggitmo-IL.jpg",
            "https://i.ibb.co/F4WBnQQf/41y-GJ3dq-Yi-L.jpg"
        ],
        description: "Elegant maxi look for effortless style.",
        price: "₹649",
        affiliateLink: "https://link.amazon/B08cj0dBv"
    },
    {
        id: "SHREE-P16",
        name: "Women's Kurta Set",
        images: [
            "https://i.ibb.co/rKwvBt5F/IMG-20260731-WA0016.jpg",
            "https://i.ibb.co/wFCqfMdX/317-Wk-Os-C7d-L.jpg",
            "https://i.ibb.co/B5VLy9Nh/31-Ty-Pk-BS7v-L.jpg",
            "https://i.ibb.co/pB3VcVSf/31yho5ku5-OL.jpg"
        ],
        description: "Graceful ethnic wear for festive vibes.",
        price: "₹849",
        affiliateLink: "https://link.amazon/B0azuTnbG"
    },
    {
        id: "SHREE-P17",
        name: "Dori Belt Dress",
        images: [
            "https://i.ibb.co/Xf97w9J8/IMG-20260731-WA0017.jpg",
            "https://i.ibb.co/bgRyTWyF/41l8-GNZzx-L-SX679.jpg",
            "https://i.ibb.co/cc3YYDWT/51fz19oe25-L-SX342-SY445-QL70-ML2.jpg",
            "https://i.ibb.co/FLCN883M/41-NKdx1v-WL-SX679.jpg"
        ],
        description: "Flattering silhouette with a cozy feel.",
        price: "₹395",
        affiliateLink: "https://link.amazon/B0ihODMZg"
    },
    {
        id: "SHREE-P18",
        name: "Ethnic Flats Sandals ( white )",
        images: [
            "https://i.ibb.co/k2pTX42m/IMG-20260731-WA0018.jpg",
            "https://i.ibb.co/7tbdp74M/41bobbs-H-WL.jpg",
            "https://i.ibb.co/Fb6GZV55/41ne1o-B89q-L.jpg",
            "https://i.ibb.co/vx5ry9gK/410q-IZ4a83-L.jpg"
        ],
        description: "Elegant white flats for daily outfits.",
        price: "₹379",
        affiliateLink: "https://link.amazon/B0f9lsLHq"
    },
    {
        id: "SHREE-P19",
        name: "Ethnic Flats Sandals ( pink )",
        images: [
            "https://i.ibb.co/wrW92md6/IMG-20260731-WA0019.jpg",
            "https://i.ibb.co/bg6bwy8z/41l-Xi0f2-v-L.jpg",
            "https://i.ibb.co/VW8nzpmD/51af-UQPYu-VL.jpg",
            "https://i.ibb.co/WNRMB3rn/41-Vu-J2-ZGl-TL.jpg"
        ],
        description: "Charming pink flats for comfortable wear.",
        price: "₹399",
        affiliateLink: "https://link.amazon/B0gAGmj6s"
    },
    {
        id: "SHREE-P20",
        name: "Asthetic Shoulder Handbag",
        images: [
            "https://i.ibb.co/0RPQYncn/IMG-20260731-WA0020.jpg",
            "https://i.ibb.co/5gCYMmKw/31-ZFnfv-OTw-L.jpg",
            "https://i.ibb.co/7xrx4Bv9/31-MXhgx-C0-GL.jpg",
            "https://i.ibb.co/FkdSTwc5/31s6-Pe-But-TL.jpg",
            "https://i.ibb.co/tw5CKcj4/31-ER2-SVb-Fq-L.jpg",
            "https://i.ibb.co/xSGjWLcp/21-Un8-Y3-Dsr-L.jpg"
        ],
        description: "Chic bag to carry essentials in style.",
        price: "₹329",
        affiliateLink: "https://link.amazon/B03j07UFq"
    },
    {
        id: "SHREE-P21",
        name: "Ethnic Elegance Kurti",
        images: [
            "https://i.ibb.co/5hXcftJW/IMG-20260731-WA0023.jpg",
            "https://i.ibb.co/xSvrNq8k/IMG-20260731-WA0022.jpg",
            "https://i.ibb.co/HQWTc1x/414-Iu-PSmej-L.jpg",
            "https://i.ibb.co/KxJXZccm/41p5c-Zu-IAXL.jpg",
            "https://i.ibb.co/1YVYBnqG/41d4-CC7-Xk0-L.jpg",
            "https://i.ibb.co/XxqqTRqF/41hrh-Zp-Pj-JL.jpg"
        ],
        description: "Intricate detailing for a refined look.",
        price: "₹799",
        affiliateLink: "https://link.amazon/B06lRViYN"
    },
    {
        id: "SHREE-P22",
        name: "Cozy Pillows",
        images: [
            "https://i.ibb.co/0ysFS841/IMG-20260811-WA0000.jpg"
        ],
        shortDescription: "Soft and aesthetic cozy pillow to upgrade your room vibe.",
        description: "Soft and aesthetic cozy pillow to upgrade your room vibe and comfort.",
        price: "₹664",
        colors: [
            { 
                name: "Standard", 
                image: "https://i.ibb.co/0ysFS841/IMG-20260811-WA0000.jpg", 
                images: [
                    "https://i.ibb.co/0ysFS841/IMG-20260811-WA0000.jpg"
                ],
                price: "₹664" 
            }
        ],
        sizes: [
            { name: "Standard", price: "₹664" }
        ]
    }
    ];


// RESELLING CLOSET PRODUCTS
const resellingProducts = [
    {
        id: "SHREE-C03",
        name: "Men Trousers",
        images: [
            "https://i.ibb.co/qMVkm5Q3/ms-y6dhn-512-645925367.jpg"
        ],
        shortDescription: "Solid Lycra Men Trousers with premium stretchable comfort.",
        description: "Solid Lycra Men Trousers with premium stretchable comfort.",
        price: "₹249",
        colors: [
            { 
                name: "Black", 
                image: "https://i.ibb.co/qMVkm5Q3/ms-y6dhn-512-645925367.jpg", 
                images: [
                    "https://i.ibb.co/qMVkm5Q3/ms-y6dhn-512-645925367.jpg",
                    "https://i.ibb.co/ycYZX8y3/ms-kufis-512-645925367.jpg",
                    "https://i.ibb.co/svqQKj8s/ms-0x8fn-512-645925367.jpg",
                    "https://i.ibb.co/N6RS1sLh/ms-r7d51-512-645925367.jpg"
                ],
                price: "₹249" 
            },
            { 
                name: "Khaki", 
                image: "https://i.ibb.co/V00tt1gN/ms-wrwn4-512-645925369.jpg", 
                images: [
                    "https://i.ibb.co/V00tt1gN/ms-wrwn4-512-645925369.jpg",
                    "https://i.ibb.co/v4Nj4YdB/ms-infir-512-645925369.jpg",
                    "https://i.ibb.co/FL7ZQCYB/ms-npsxt-512-645925369.jpg",
                    "https://i.ibb.co/v4fvSPmT/ms-q4qox-512-645925369.jpg"
                ],
                price: "₹249" 
            },
            { 
                name: "Brown", 
                image: "https://i.ibb.co/rR7R3Sk2/ms-uhyan-512-645925366.jpg", 
                images: [
                    "https://i.ibb.co/rR7R3Sk2/ms-uhyan-512-645925366.jpg",
                    "https://i.ibb.co/zVsqK5FV/ms-qquow-512-645925366.jpg",
                    "https://i.ibb.co/VY1QxMmz/ms-hvbjy-512-645925366.jpg",
                    "https://i.ibb.co/27WMLVH1/ms-zd1wb-512-645925366.jpg"
                ],
                price: "₹249" 
            },
            { 
                name: "Blue", 
                image: "https://i.ibb.co/G4LCqZ9W/ms-mrnwz-512-645925368.jpg", 
                images: [
                    "https://i.ibb.co/G4LCqZ9W/ms-mrnwz-512-645925368.jpg",
                    "https://i.ibb.co/wFHBsrBR/ms-dzw8l-512-645925368.jpg",
                    "https://i.ibb.co/1fTFVVjk/ms-xe2hh-512-645925368.jpg",
                    "https://i.ibb.co/qFFqCSmL/ms-pzh8c-512-645925368.jpg"
                ],
                price: "₹249" 
            },
            { 
                name: "Grey", 
                image: "https://i.ibb.co/03FGG7P/ms-eoqvs-512-645925370.jpg", 
                images: [
                    "https://i.ibb.co/03FGG7P/ms-eoqvs-512-645925370.jpg",
                    "https://i.ibb.co/C3jm2VCk/ms-8ygk1-512-645925370.jpg",
                    "https://i.ibb.co/G4BqMbcf/ms-w2i47-512-645925370.jpg",
                    "https://i.ibb.co/0pm5Vw2S/ms-wmsil-512-645925370.jpg"
                ],
                price: "₹249" 
            },
            { 
                name: "Dark Green", 
                image: "https://i.ibb.co/Kx9zx1fx/ms-9n86k-512-645925371.jpg", 
                images: [
                    "https://i.ibb.co/Kx9zx1fx/ms-9n86k-512-645925371.jpg",
                    "https://i.ibb.co/N60JzH3w/ms-zom7y-512-645925371.jpg",
                    "https://i.ibb.co/fRP4N2z/ms-pncyk-512-645925371.jpg",
                    "https://i.ibb.co/ymJSYNRd/ms-4vi0l-512-645925371.jpg"
                ],
                price: "₹249" 
            },
            { 
                name: "Light Green", 
                image: "https://i.ibb.co/T3MwB4B/ms-d9o2d-512-645925373.jpg", 
                images: [
                    "https://i.ibb.co/T3MwB4B/ms-d9o2d-512-645925373.jpg",
                    "https://i.ibb.co/QvMw3HYd/ms-ngu4q-512-645925373.jpg",
                    "https://i.ibb.co/RThQ6Qrc/ms-dle1s-512-645925373.jpg"
                ],
                price: "₹249" 
            },
            { 
                name: "White Grey", 
                image: "https://i.ibb.co/Xx24yZYF/ms-schxo-512-645925374.jpg", 
                images: [
                    "https://i.ibb.co/Xx24yZYF/ms-schxo-512-645925374.jpg",
                    "https://i.ibb.co/MyGH4VpV/ms-7huyz-512-645925374.jpg",
                    "https://i.ibb.co/VWhdyDqJ/ms-3r1qs-512-645925374.jpg"
                ],
                price: "₹249" 
            }
        ],
        sizes: [
            { name: "28", price: "₹249" },
            { name: "30", price: "₹249" },
            { name: "32", price: "₹249" },
            { name: "34", price: "₹249" },
            { name: "36", price: "₹249" }
        ]
    },
    {
        id: "SHREE-C04",
        name: "Stylish Men pant",
        images: [
            "https://i.ibb.co/7xV1gLdD/ms-cp5du-512-894738944.jpg"
        ],
        shortDescription: "Stylish Lycra Men pant with comfortable regular fit.",
        description: "Stylish Lycra Men pant with comfortable regular fit.",
        price: "₹499",
        colors: [
            { 
                name: "Beige", 
                image: "https://i.ibb.co/7xV1gLdD/ms-cp5du-512-894738944.jpg", 
                images: [
                    "https://i.ibb.co/7xV1gLdD/ms-cp5du-512-894738944.jpg",
                    "https://i.ibb.co/yFjWMNms/ms-xcrkc-512-894738944.jpg",
                    "https://i.ibb.co/5gjdRtpd/ms-xb6sg-512-894738944.jpg"
                ],
                price: "₹499" 
            }
        ],
        sizes: [
            { name: "28", price: "₹499" },
            { name: "30", price: "₹499" },
            { name: "32", price: "₹499" }
        ]
    },
    {
        id: "SHREE-C05",
        name: "cargo cozy pant",
        images: [
            "https://i.ibb.co/6R1wQcDY/ms-2vl5s-512-542609354.jpg"
        ],
        shortDescription: 'Cozy cargo pants crafted from soft kapaas fabric.',
        description: "Cozy cargo pants crafted from soft kapaas fabric.",
        price: "₹299",
        colors: [
            { 
                name: "Black", 
                image: "https://i.ibb.co/6R1wQcDY/ms-2vl5s-512-542609354.jpg", 
                images: [
                    "https://i.ibb.co/6R1wQcDY/ms-2vl5s-512-542609354.jpg",
                    "https://i.ibb.co/FL4wtB2s/ms-uwgz7-512-542609354.jpg",
                    "https://i.ibb.co/ynh9vwY7/ms-wvt4u-512-645925354.jpg"
                ],
                price: "₹299" 
            }
        ],
        sizes: [
            { name: "26", price: "₹299" },
            { name: "28", price: "₹299" }
        ]
    },
    {
        id: "SHREE-C06",
        name: "Women's Denim jeans",
        images: [
            "https://i.ibb.co/WvV3wnsL/ms-ny0xz-512-1004855894.jpg"
        ],
        shortDescription: "Stylish Women's Denim jeans with classic fit.",
        description: "Stylish Women's Denim jeans with classic fit.",
        price: "₹549",
        colors: [
            { 
                name: "Grey", 
                image: "https://i.ibb.co/WvV3wnsL/ms-ny0xz-512-1004855894.jpg", 
                images: [
                    "https://i.ibb.co/WvV3wnsL/ms-ny0xz-512-1004855894.jpg",
                    "https://i.ibb.co/m5cvGbNC/ms-cqvfe-512-1004855894.jpg",
                    "https://i.ibb.co/XrWRJmzJ/ms-c4fqa-512-1004855894.jpg",
                    "https://i.ibb.co/ns2cKyww/ms-anlqp-512-1004855894.jpg"
                ],
                price: "₹549" 
            }
        ],
        sizes: [
            { name: "24", price: "₹549" },
            { name: "26", price: "₹549" },
            { name: "28", price: "₹549" },
            { name: "32", price: "₹549" },
            { name: "34", price: "₹549" }
        ]
    },
    {
        id: "SHREE-C07",
        name: "Men's Casual Pant",
        images: [
            "https://i.ibb.co/84My1Lc6/ms-lva1m-512-968821611.jpg"
        ],
        shortDescription: "Comfortable Men's Casual Pant crafted from soft kapaas fabric.",
        description: "Comfortable Men's Casual Pant crafted from soft kapaas fabric.",
        price: "₹499",
        colors: [
            { 
                name: "Olive", 
                image: "https://i.ibb.co/84My1Lc6/ms-lva1m-512-968821611.jpg", 
                images: [
                    "https://i.ibb.co/84My1Lc6/ms-lva1m-512-968821611.jpg",
                    "https://i.ibb.co/M5Dbc39w/ms-hcujg-512-968821611.jpg",
                    "https://i.ibb.co/hJS7yPGd/ms-f8zyy-512-968821611.jpg"
                ],
                price: "₹499" 
            },
            { 
                name: "Beige", 
                image: "https://i.ibb.co/zHFWnW6y/ms-lldsl-512-968821606.jpg", 
                images: [
                    "https://i.ibb.co/zHFWnW6y/ms-lldsl-512-968821606.jpg",
                    "https://i.ibb.co/RkccW8Vd/ms-paqam-512-968821606.jpg",
                    "https://i.ibb.co/MkXMsfqz/ms-vgsjx-512-968821606.jpg"
                ],
                price: "₹499" 
            },
            { 
                name: "Brown", 
                image: "https://i.ibb.co/23HXCbPx/ms-pj0zj-512-968821608.jpg", 
                images: [
                    "https://i.ibb.co/23HXCbPx/ms-pj0zj-512-968821608.jpg",
                    "https://i.ibb.co/hJB3Nrmn/ms-pbmbk-512-968821608.jpg",
                    "https://i.ibb.co/KcvNW5Pg/ms-mybq7-512-968821608.jpg"
                ],
                price: "₹499" 
            }
        ],
        sizes: [
            { name: "28", price: "₹499" },
            { name: "30", price: "₹499" },
            { name: "32", price: "₹499" },
            { name: "34", price: "₹499" },
            { name: "36", price: "₹499" }
        ]
    },
    {
        id: "SHREE-C08",
        name: "Men's korean pant",
        images: [
            "https://i.ibb.co/BVmb1gtc/ms-dvijo-512-1023421032.jpg"
        ],
        shortDescription: "Trendy Men's korean pant crafted from stretchable lycra fabric.",
        description: "Trendy Men's korean pant crafted from stretchable lycra fabric.",
        price: "₹499",
        colors: [
            { 
                name: "Cream", 
                image: "https://i.ibb.co/BVmb1gtc/ms-dvijo-512-1023421032.jpg", 
                images: [
                    "https://i.ibb.co/BVmb1gtc/ms-dvijo-512-1023421032.jpg",
                    "https://i.ibb.co/QjCZ6bHk/ms-sqmsq-512-1023421032.jpg",
                    "https://i.ibb.co/Gv3WhJQZ/ms-ja9eg-512-1023421032.jpg"
                ],
                price: "₹499" 
            }
        ],
        sizes: [
            { name: "28", price: "₹499" },
            { name: "30", price: "₹499" },
            { name: "32", price: "₹499" },
            { name: "34", price: "₹499" }
        ]
    },
    {
        id: "SHREE-C09",
        name: "Casual Men's pant",
        images: [
            "https://i.ibb.co/Ng5fsbMF/ms-nheap-512-405075245.jpg"
        ],
        shortDescription: "Comfortable Casual Men's pant crafted from soft kapaas fabric.",
        description: "Comfortable Casual Men's pant crafted from soft kapaas fabric.",
        price: "₹349",
        colors: [
            { 
                name: "Dark Green", 
                image: "https://i.ibb.co/Ng5fsbMF/ms-nheap-512-405075245.jpg", 
                images: [
                    "https://i.ibb.co/Ng5fsbMF/ms-nheap-512-405075245.jpg",
                    "https://i.ibb.co/rGGG6KSk/ms-t2gay-512-405075245.jpg",
                    "https://i.ibb.co/svLfMNZ1/ms-cdzcu-512-405075245.jpg",
                    "https://i.ibb.co/5XGxgXyk/ms-gjbwg-512-405075245.jpg"
                ],
                sizes: [
                    { name: "28", price: "₹349" },
                    { name: "30", price: "₹349" },
                    { name: "32", price: "₹349" },
                    { name: "34", price: "₹349" },
                    { name: "36", price: "₹349" },
                    { name: "38", price: "₹349" },
                    { name: "40", price: "₹349" }
                ],
                price: "₹349" 
            },
            { 
                name: "Navy blue", 
                image: "https://i.ibb.co/Dc85gYv/ms-unkln-512-405075246.jpg", 
                images: [
                    "https://i.ibb.co/Dc85gYv/ms-unkln-512-405075246.jpg",
                    "https://i.ibb.co/8LS050vZ/ms-wdqjn-512-405075246.jpg",
                    "https://i.ibb.co/ccDrqzK6/ms-vd9sq-512-405075246.jpg",
                    "https://i.ibb.co/Nd92gdNP/ms-62wpr-512-405075246.jpg"
                ],
                sizes: [
                    { name: "28", price: "₹349" },
                    { name: "30", price: "₹349" },
                    { name: "32", price: "₹349" },
                    { name: "34", price: "₹349" },
                    { name: "36", price: "₹349" }
                ],
                price: "₹349" 
            },
            { 
                name: "Blue", 
                image: "https://i.ibb.co/3Y9y3jTR/ms-b2qlp-512-405075247.jpg", 
                images: [
                    "https://i.ibb.co/3Y9y3jTR/ms-b2qlp-512-405075247.jpg",
                    "https://i.ibb.co/qMJrTmQZ/ms-pq8er-512-405075247.jpg",
                    "https://i.ibb.co/m5PymdNw/ms-kqnqo-512-405075247.jpg",
                    "https://i.ibb.co/KpXtPCpr/ms-c57ch-512-405075247.jpg"
                ],
                sizes: [
                    { name: "26", price: "₹349" },
                    { name: "28", price: "₹349" },
                    { name: "30", price: "₹349" },
                    { name: "32", price: "₹349" },
                    { name: "34", price: "₹349" },
                    { name: "36", price: "₹349" }
                ],
                price: "₹349" 
            },
            { 
                name: "Cream", 
                image: "https://i.ibb.co/dsg9cH7N/ms-66v0q-512-405075248.jpg", 
                images: [
                    "https://i.ibb.co/dsg9cH7N/ms-66v0q-512-405075248.jpg",
                    "https://i.ibb.co/hJ31Zc8f/ms-grgvm-512-405075248.jpg",
                    "https://i.ibb.co/84jSSm9r/ms-w5q3a-512-405075248.jpg",
                    "https://i.ibb.co/6JLPH4tm/ms-mzxzq-512-405075248.jpg"
                ],
                sizes: [
                    { name: "28", price: "₹349" },
                    { name: "30", price: "₹349" },
                    { name: "32", price: "₹349" },
                    { name: "34", price: "₹349" }
                ],
                price: "₹349" 
            },
            { 
                name: "Brown", 
                image: "https://i.ibb.co/NvznsRK/ms-7inrq-512-405075249.jpg", 
                images: [
                    "https://i.ibb.co/NvznsRK/ms-7inrq-512-405075249.jpg",
                    "https://i.ibb.co/HTmWPdHJ/ms-bjnvn-512-405075249.jpg",
                    "https://i.ibb.co/dSDgHbW/ms-hhlaz-512-405075249.jpg"
                ],
                sizes: [
                    { name: "26", price: "₹349" },
                    { name: "28", price: "₹349" },
                    { name: "30", price: "₹349" },
                    { name: "32", price: "₹349" },
                    { name: "34", price: "₹349" },
                    { name: "36", price: "₹349" }
                ],
                price: "₹349" 
            },
            { 
                name: "Grey malanze", 
                image: "https://i.ibb.co/8FL7XBp/ms-b63el-512-405075250.jpg", 
                images: [
                    "https://i.ibb.co/8FL7XBp/ms-b63el-512-405075250.jpg",
                    "https://i.ibb.co/SXKZ9ZbP/ms-hznt6-512-405075250.jpg"
                ],
                sizes: [
                    { name: "28", price: "₹349" },
                    { name: "30", price: "₹349" },
                    { name: "32", price: "₹349" },
                    { name: "34", price: "₹349" },
                    { name: "35", price: "₹349" },
                    { name: "38", price: "₹349" },
                    { name: "40", price: "₹349" }
                ],
                price: "₹349" 
            },
            { 
                name: "Grey", 
                image: "https://i.ibb.co/tTT9Wghp/ms-c3ubo-512-405075251.jpg", 
                images: [
                    "https://i.ibb.co/tTT9Wghp/ms-c3ubo-512-405075251.jpg",
                    "https://i.ibb.co/p6Sk8GQd/ms-omdap-512-405075251.jpg"
                ],
                sizes: [
                    { name: "28", price: "₹349" },
                    { name: "30", price: "₹349" },
                    { name: "32", price: "₹349" },
                    { name: "34", price: "₹349" },
                    { name: "36", price: "₹349" },
                    { name: "38", price: "₹349" },
                    { name: "40", price: "₹349" }
                ],
                price: "₹349" 
            },
            { 
                name: "Black", 
                image: "https://i.ibb.co/NdMYBCJc/ms-0oi8x-512-405075252.jpg", 
                images: [
                    "https://i.ibb.co/NdMYBCJc/ms-0oi8x-512-405075252.jpg",
                    "https://i.ibb.co/MktQwkt8/ms-wdmhj-512-405075252.jpg",
                    "https://i.ibb.co/LDVc1Mwq/ms-bmmai-512-405075252.jpg"
                ],
                sizes: [
                    { name: "28", price: "₹349" },
                    { name: "30", price: "₹349" },
                    { name: "32", price: "₹349" },
                    { name: "34", price: "₹349" },
                    { name: "36", price: "₹349" },
                    { name: "38", price: "₹349" },
                    { name: "40", price: "₹349" }
                ],
                price: "₹349" 
            }
        ]
    },
    {
        id: "SHREE-C10",
        name: "Men's Cargo",
        images: [
            "https://i.ibb.co/XZLkBY6Z/ms-k32rr-512-951668703.jpg"
        ],
        shortDescription: "Stylish Men's Cargo crafted from soft kapaas fabric.",
        description: "Stylish Men's Cargo crafted from soft kapaas fabric.",
        price: "₹369",
        colors: [
            { 
                name: "Bhura", 
                image: "https://i.ibb.co/XZLkBY6Z/ms-k32rr-512-951668703.jpg", 
                images: [
                    "https://i.ibb.co/XZLkBY6Z/ms-k32rr-512-951668703.jpg",
                    "https://i.ibb.co/GQYw3MtZ/ms-nctoj-512-951668703.jpg",
                    "https://i.ibb.co/hJqKgbxc/ms-y3mpz-512-951668703.jpg",
                    "https://i.ibb.co/7dpQqJ3b/ms-bqyzm-512-968821603.jpg"
                ],
                price: "₹369" 
            }
        ],
        sizes: [
            { name: "28", price: "₹369" },
            { name: "30", price: "₹369" },
            { name: "32", price: "₹369" },
            { name: "34", price: "₹369" },
            { name: "36", price: "₹369" },
            { name: "M", price: "₹369" },
            { name: "L", price: "₹369" },
            { name: "XL", price: "₹369" },
            { name: "XXL", price: "₹369" },
            { name: "XXXL", price: "₹369" }
        ]
    },
    {
        id: "SHREE-C11",
        name: "Track pant",
        images: [
            "https://i.ibb.co/35kdcLYt/ms-rdcwz-512-1014430644.jpg"
        ],
        shortDescription: "Comfortable Track pant crafted from polyester fabric.",
        description: "Comfortable Track pant crafted from polyester fabric.",
        price: "₹399",
        colors: [
            { 
                name: "Green", 
                image: "https://i.ibb.co/35kdcLYt/ms-rdcwz-512-1014430644.jpg", 
                images: [
                    "https://i.ibb.co/35kdcLYt/ms-rdcwz-512-1014430644.jpg"
                ],
                price: "₹399" 
            },
            { 
                name: "Blue", 
                image: "https://i.ibb.co/tTLCzN8V/ms-ttwp1-512-1014430643.jpg", 
                images: [
                    "https://i.ibb.co/tTLCzN8V/ms-ttwp1-512-1014430643.jpg"
                ],
                price: "₹399" 
            }
        ],
        sizes: [
            { name: "S", price: "₹399" },
            { name: "M", price: "₹399" },
            { name: "L", price: "₹399" },
            { name: "XL", price: "₹399" },
            { name: "XXL", price: "₹399" }
        ]
    },
    {
        id: "SHREE-C12",
        name: "Casual Pajama",
        images: [
            "https://i.ibb.co/JWqNwYNN/ms-jeuyx-512-1022799693.jpg"
        ],
        shortDescription: "Soft and comfortable Casual Pajama crafted from kapaas fabric.",
        description: "Soft and comfortable Casual Pajama crafted from kapaas fabric.",
        price: "₹329",
        colors: [
            { 
                name: "Black", 
                image: "https://i.ibb.co/JWqNwYNN/ms-jeuyx-512-1022799693.jpg", 
                images: [
                    "https://i.ibb.co/JWqNwYNN/ms-jeuyx-512-1022799693.jpg"
                ],
                price: "₹329" 
            }
        ],
        sizes: [
            { name: "S", price: "₹329" },
            { name: "M", price: "₹329" },
            { name: "L", price: "₹329" },
            { name: "XL", price: "₹329" }
        ]
    },
    {
        id: "SHREE-C13",
        name: "Beggy Track pant",
        images: [
            "https://i.ibb.co/Kx1pm4kt/ms-qgwsu-512-1022524034.jpg"
        ],
        shortDescription: "Stylish Beggy Track pant with combo track pants design.",
        description: "Stylish Beggy Track pant with combo track pants design.<br><br><b>Specification:</b> Combo Track pants",
        price: "₹549",
        colors: [
            { 
                name: "Green + Blue", 
                image: "https://i.ibb.co/Kx1pm4kt/ms-qgwsu-512-1022524034.jpg", 
                images: [
                    "https://i.ibb.co/Kx1pm4kt/ms-qgwsu-512-1022524034.jpg",
                    "https://i.ibb.co/xtMtSGrV/ms-5kcee-512-1022524036.jpg",
                    "https://i.ibb.co/JRbQD74d/ms-5a9cu-512-1022524034.jpg"
                ],
                price: "₹549" 
            },
            { 
                name: "Black + Green", 
                image: "https://i.ibb.co/t0qKLSG/ms-v9luj-512-1022524036.jpg", 
                images: [
                    "https://i.ibb.co/t0qKLSG/ms-v9luj-512-1022524036.jpg",
                    "https://i.ibb.co/4nxRzJzJ/ms-ucmvt-512-1022524035.jpg",
                    "https://i.ibb.co/bgYG2p1c/ms-lavsh-512-1022524034.jpg"
                ],
                price: "₹549" 
            },
            { 
                name: "Black + Blue", 
                image: "https://i.ibb.co/rRzcfTKt/ms-bxnxs-512-1022524035.jpg", 
                images: [
                    "https://i.ibb.co/rRzcfTKt/ms-bxnxs-512-1022524035.jpg",
                    "https://i.ibb.co/Gv2cRZNc/ms-bk8z3-512-1022524036.jpg",
                    "https://i.ibb.co/600XS5DJ/ms-9fdcz-512-1022524035.jpg"
                ],
                price: "₹549" 
            }
        ],
        sizes: [
            { name: "M", price: "₹549" },
            { name: "L", price: "₹549" },
            { name: "XL", price: "₹549" },
            { name: "X", price: "₹549" }
        ]
    },
    {
        id: "SHREE-C14",
        name: "Casual T - Shirt",
        images: [
            "https://i.ibb.co/sdkW9N7c/ms-081oq-512-142975418.jpg"
        ],
        shortDescription: "Casual T - Shirt crafted from polyester fabric.",
        description: "Casual T - Shirt crafted from polyester fabric.",
        price: "₹199",
        colors: [
            { 
                name: "Black with white stripes", 
                image: "https://i.ibb.co/sdkW9N7c/ms-081oq-512-142975418.jpg", 
                images: [
                    "https://i.ibb.co/sdkW9N7c/ms-081oq-512-142975418.jpg",
                    "https://i.ibb.co/PzxFftpW/ms-u64jw-512-142975418.jpg"
                ],
                price: "₹199" 
            }
        ],
        sizes: [
            { name: "S", price: "₹199" },
            { name: "M", price: "₹199" },
            { name: "L", price: "₹199" },
            { name: "XXL", price: "₹199" }
        ]
    },
    {
        id: "SHREE-C15",
        name: "Stylish T - Shirt",
        images: [
            "https://i.ibb.co/VYs6fPLc/ms-pfzps-512-446366703.jpg"
        ],
        shortDescription: "Stylish printed T - Shirt crafted from cotton fabric.",
        description: "Stylish printed T - Shirt crafted from cotton fabric.",
        price: "₹349",
        colors: [
            { 
                name: "Red + Green + Black", 
                image: "https://i.ibb.co/VYs6fPLc/ms-pfzps-512-446366703.jpg", 
                images: [
                    "https://i.ibb.co/VYs6fPLc/ms-pfzps-512-446366703.jpg"
                ],
                price: "₹349" 
            },
            { 
                name: "Violet + Green + Black", 
                image: "https://i.ibb.co/PG8GvPRH/ms-izsob-512-446366705.jpg", 
                images: [
                    "https://i.ibb.co/PG8GvPRH/ms-izsob-512-446366705.jpg"
                ],
                price: "₹349" 
            },
            { 
                name: "Violet + Pink + Beige", 
                image: "https://i.ibb.co/WvcjrnkV/ms-kcmkp-512-446366704.jpg", 
                images: [
                    "https://i.ibb.co/WvcjrnkV/ms-kcmkp-512-446366704.jpg"
                ],
                price: "₹349" 
            },
            { 
                name: "Red + Green + Beige", 
                image: "https://i.ibb.co/JRYKMTMZ/ms-avgnf-512-446366707.jpg", 
                images: [
                    "https://i.ibb.co/JRYKMTMZ/ms-avgnf-512-446366707.jpg"
                ],
                price: "₹349" 
            },
            { 
                name: "Green + Beige + Black", 
                image: "https://i.ibb.co/QF2D96J2/ms-lwtcw-512-446366708.jpg", 
                images: [
                    "https://i.ibb.co/QF2D96J2/ms-lwtcw-512-446366708.jpg"
                ],
                price: "₹349" 
            }
        ],
        sizes: [
            { name: "S", price: "₹349" },
            { name: "M", price: "₹349" },
            { name: "L", price: "₹349" },
            { name: "XL", price: "₹349" },
            { name: "XXL", price: "₹349" }
        ]
    },
    {
        id: "SHREE-C16",
        name: "Oversized T - shirt",
        images: [
            "https://i.ibb.co/mCfdygWN/ms-6tuwq-512-476893845.jpg"
        ],
        shortDescription: "Cotton Oversized T - shirt with unique anime/character prints.",
        description: "Cotton Oversized T - shirt with unique anime/character prints.",
        price: "₹259",
        colors: [
            { 
                name: "Variant 1 (Itachi Uchiha)", 
                image: "https://i.ibb.co/mCfdygWN/ms-6tuwq-512-476893845.jpg", 
                images: [
                    "https://i.ibb.co/mCfdygWN/ms-6tuwq-512-476893845.jpg",
                    "https://i.ibb.co/XZnzBhPF/ms-chbjq-512-476893845.jpg",
                    "https://i.ibb.co/JFQFZSLp/ms-lqw0c-512-476893845.jpg"
                ],
                sizes: [
                    { name: "S", price: "₹259" },
                    { name: "M", price: "₹259" },
                    { name: "L", price: "₹259" },
                    { name: "XL", price: "₹259" }
                ],
                price: "₹259" 
            },
            { 
                name: "Variant 2 (One Piece)", 
                image: "https://i.ibb.co/vxdcz3Cv/ms-skp28-512-476893842.jpg", 
                images: [
                    "https://i.ibb.co/vxdcz3Cv/ms-skp28-512-476893842.jpg",
                    "https://i.ibb.co/FbtjxXdb/ms-xjzmp-512-476893842.jpg"
                ],
                sizes: [
                    { name: "M", price: "₹259" },
                    { name: "XL", price: "₹259" }
                ],
                price: "₹259" 
            },
            { 
                name: "Variant 3 (Hatake Kakashi)", 
                image: "https://i.ibb.co/0R7Pnm42/ms-orzfm-512-476893846.jpg", 
                images: [
                    "https://i.ibb.co/0R7Pnm42/ms-orzfm-512-476893846.jpg",
                    "https://i.ibb.co/CK64kYgh/ms-wwalv-512-476893846.jpg",
                    "https://i.ibb.co/nsM809dt/ms-3cjbw-512-476893846.jpg"
                ],
                sizes: [
                    { name: "S", price: "₹259" },
                    { name: "M", price: "₹259" },
                    { name: "L", price: "₹259" },
                    { name: "XL", price: "₹259" }
                ],
                price: "₹259" 
            },
            { 
                name: "Variant 4 (Satoru Gojo)", 
                image: "https://i.ibb.co/5h2B8RVV/ms-2hlyh-512-476893847.jpg", 
                images: [
                    "https://i.ibb.co/5h2B8RVV/ms-2hlyh-512-476893847.jpg",
                    "https://i.ibb.co/JwYFMPN7/ms-aj1nw-512-476893847.jpg",
                    "https://i.ibb.co/zdqyMhh/ms-lyblp-512-476893847.jpg"
                ],
                sizes: [
                    { name: "M", price: "₹259" },
                    { name: "L", price: "₹259" },
                    { name: "XL", price: "₹259" }
                ],
                price: "₹259" 
            },
            { 
                name: "Variant 5 (Yarmen Sukuna)", 
                image: "https://i.ibb.co/nqkBNm1v/ms-6dhob-512-476893843.jpg", 
                images: [
                    "https://i.ibb.co/nqkBNm1v/ms-6dhob-512-476893843.jpg",
                    "https://i.ibb.co/8ngD0ZbJ/ms-5hpo9-512-476893843.jpg",
                    "https://i.ibb.co/Q30nztB5/ms-uqi7r-512-476893843.jpg"
                ],
                sizes: [
                    { name: "S", price: "₹259" },
                    { name: "M", price: "₹259" },
                    { name: "L", price: "₹259" },
                    { name: "XL", price: "₹259" }
                ],
                price: "₹259" 
            }
        ],
        sizes: [
            { name: "S", price: "₹259" },
            { name: "M", price: "₹259" },
            { name: "L", price: "₹259" },
            { name: "XL", price: "₹259" }
        ]
    },
    {
        id: "SHREE-C17",
        name: "Unisex T - Shirt",
        images: [
            "https://i.ibb.co/s95CtybR/ms-lamr8-512-478512632.jpg"
        ],
        shortDescription: "Pure Cotton Unisex T - Shirt with character prints.",
        description: "Pure Cotton Unisex T - Shirt with character prints.",
        price: "₹299",
        colors: [
            { 
                name: "One Piece", 
                image: "https://i.ibb.co/s95CtybR/ms-lamr8-512-478512632.jpg", 
                images: [
                    "https://i.ibb.co/s95CtybR/ms-lamr8-512-478512632.jpg",
                    "https://i.ibb.co/7dhnpLSb/ms-du4mf-512-478512632.jpg",
                    "https://i.ibb.co/MkPyt03S/ms-ieism-512-478512632.jpg"
                ],
                sizes: [
                    { name: "S", price: "₹299" },
                    { name: "M", price: "₹299" },
                    { name: "XL", price: "₹299" },
                    { name: "XXL", price: "₹299" }
                ],
                price: "₹299" 
            },
            { 
                name: "Tom & Jerry", 
                image: "https://i.ibb.co/svdpFC4L/ms-btn8e-512-478512633.jpg", 
                images: [
                    "https://i.ibb.co/svdpFC4L/ms-btn8e-512-478512633.jpg",
                    "https://i.ibb.co/kgHX7R42/ms-rtc7e-512-478512633.jpg"
                ],
                sizes: [
                    { name: "S", price: "₹299" },
                    { name: "M", price: "₹299" },
                    { name: "L", price: "₹299" },
                    { name: "XL", price: "₹299" },
                    { name: "XXL", price: "₹299" }
                ],
                price: "₹299" 
            },
            { 
                name: "Snoopy", 
                image: "https://i.ibb.co/DHTyYccw/ms-fillt-512-478512634.jpg", 
                images: [
                    "https://i.ibb.co/DHTyYccw/ms-fillt-512-478512634.jpg",
                    "https://i.ibb.co/WvH9yBHW/ms-msq4m-512-478512634.jpg",
                    "https://i.ibb.co/93359M5F/ms-ots6d-512-478512634.jpg"
                ],
                sizes: [
                    { name: "S", price: "₹299" },
                    { name: "M", price: "₹299" },
                    { name: "L", price: "₹299" },
                    { name: "XL", price: "₹299" },
                    { name: "XXL", price: "₹299" }
                ],
                price: "₹299" 
            }
        ],
        sizes: [
            { name: "S", price: "₹299" },
            { name: "M", price: "₹299" },
            { name: "L", price: "₹299" },
            { name: "XL", price: "₹299" },
            { name: "XXL", price: "₹299" }
        ]
    },
    {
        id: "SHREE-C18",
        name: "Oversized T - Shirt",
        images: [
            "https://i.ibb.co/zH6DdMCG/ms-awgtv-512-1029176290.jpg"
        ],
        shortDescription: "Cotton Oversized T - Shirt available in multiple vibrant colors.",
        description: "Cotton Oversized T - Shirt available in multiple vibrant colors.",
        price: "₹299",
        colors: [
            { 
                name: "Grey", 
                image: "https://i.ibb.co/zH6DdMCG/ms-awgtv-512-1029176290.jpg", 
                images: [
                    "https://i.ibb.co/zH6DdMCG/ms-awgtv-512-1029176290.jpg"
                ],
                price: "₹299" 
            },
            { 
                name: "Gulabi", 
                image: "https://i.ibb.co/XrmMgq8f/ms-ebiml-512-1029176288.jpg", 
                images: [
                    "https://i.ibb.co/XrmMgq8f/ms-ebiml-512-1029176288.jpg"
                ],
                price: "₹299" 
            },
            { 
                name: "White", 
                image: "https://i.ibb.co/hx7jwpJ4/ms-xjza1-512-1029176292.jpg", 
                images: [
                    "https://i.ibb.co/hx7jwpJ4/ms-xjza1-512-1029176292.jpg"
                ],
                price: "₹299" 
            },
            { 
                name: "Lavender", 
                image: "https://i.ibb.co/Q7By0Pdj/ms-ciaxd-512-1029176293.jpg", 
                images: [
                    "https://i.ibb.co/Q7By0Pdj/ms-ciaxd-512-1029176293.jpg"
                ],
                price: "₹299" 
            },
            { 
                name: "Blue", 
                image: "https://i.ibb.co/GvKpkjQS/ms-ni1i3-512-1029176294.jpg", 
                images: [
                    "https://i.ibb.co/GvKpkjQS/ms-ni1i3-512-1029176294.jpg"
                ],
                price: "₹299" 
            },
            { 
                name: "Beige", 
                image: "https://i.ibb.co/hRNB42Tg/ms-qwyug-512-1029176289.jpg", 
                images: [
                    "https://i.ibb.co/hRNB42Tg/ms-qwyug-512-1029176289.jpg"
                ],
                price: "₹299" 
            },
            { 
                name: "Green", 
                image: "https://i.ibb.co/JRvfG7vZ/ms-niukw-512-1029176287.jpg", 
                images: [
                    "https://i.ibb.co/JRvfG7vZ/ms-niukw-512-1029176287.jpg"
                ],
                price: "₹299" 
            },
            { 
                name: "Dark Green", 
                image: "https://i.ibb.co/zhK0dwYP/ms-igxat-512-1029176291.jpg", 
                images: [
                    "https://i.ibb.co/zhK0dwYP/ms-igxat-512-1029176291.jpg"
                ],
                price: "₹299" 
            }
        ],
        sizes: [
            { name: "S", price: "₹299" },
            { name: "M", price: "₹299" },
            { name: "L", price: "₹299" },
            { name: "XL", price: "₹299" },
            { name: "XXL", price: "₹299" }
        ]
    },
    {
        id: "SHREE-C19",
        name: "Oversized T - shirt",
        images: [
            "https://i.ibb.co/jPq5zcgM/ms-azgag-512-618688885.jpg"
        ],
        shortDescription: "Cotton Oversized T - shirt featuring Satoru Gojo print.",
        description: "Cotton Oversized T - shirt featuring Satoru Gojo print.",
        price: "₹239",
        colors: [
            { 
                name: "Black (Satoru Gojo)", 
                image: "https://i.ibb.co/jPq5zcgM/ms-azgag-512-618688885.jpg", 
                images: [
                    "https://i.ibb.co/jPq5zcgM/ms-azgag-512-618688885.jpg",
                    "https://i.ibb.co/7dVL0Lvv/ms-i3mqh-512-618688885.jpg"
                ],
                price: "₹239" 
            }
        ],
        sizes: [
            { name: "XS", price: "₹239" },
            { name: "S", price: "₹239" },
            { name: "M", price: "₹239" },
            { name: "L", price: "₹239" },
            { name: "XL", price: "₹239" },
            { name: "XXL", price: "₹239" }
        ]
    },
    {
        id: "SHREE-C20",
        name: "Brooklyn T shirt",
        images: [
            "https://i.ibb.co/tMpH3GKc/ms-montb-512-667586579.jpg"
        ],
        shortDescription: "Pure Kapaas Brooklyn T shirt available in multiple colors.",
        description: "Pure Kapaas Brooklyn T shirt featuring comfortable fabric and stylish look.",
        price: "₹349",
        colors: [
            {
                name: "Green",
                image: "https://i.ibb.co/tMpH3GKc/ms-montb-512-667586579.jpg",
                images: [
                    "https://i.ibb.co/tMpH3GKc/ms-montb-512-667586579.jpg",
                    "https://i.ibb.co/zVQNmVQJ/ms-j3t2r-512-667586579.jpg",
                    "https://i.ibb.co/C5gnchyt/ms-74fao-512-667586579.jpg"
                ],
                price: "₹349"
            },
            {
                name: "Black",
                image: "https://i.ibb.co/YFpvF5qF/ms-iedyg-512-667586580.jpg",
                images: [
                    "https://i.ibb.co/YFpvF5qF/ms-iedyg-512-667586580.jpg",
                    "https://i.ibb.co/fGCjkYs4/ms-tr3se-512-667586580.jpg",
                    "https://i.ibb.co/2Y7GWQzy/ms-9bhdl-512-667586580.jpg"
                ],
                price: "₹349"
            }
        ],
        sizes: [
            { name: "S", price: "₹349" },
            { name: "M", price: "₹349" },
            { name: "L", price: "₹349" },
            { name: "XL", price: "₹349" },
            { name: "XXL", price: "₹349" }
        ]
        },
         {
        id: "SHREE-C-21",
        name: "Dori belt dress",
        images: ["https://i.ibb.co/p63N6q47/ms-yo45x-512-277086555.jpg"],
        shortDescription: "Stylish jorjet dori belt dress available in multiple vibrant colors.",
        description: "Elegant and comfortable jorjet fabric dress featuring a flattering dori belt design.",
        price: "₹249",
        colors: [
            { name: "Maroon", image: "https://i.ibb.co/p63N6q47/ms-yo45x-512-277086555.jpg", images: ["https://i.ibb.co/p63N6q47/ms-yo45x-512-277086555.jpg", "https://i.ibb.co/Psk8hTzt/ms-s60pk-512-277086555.jpg"], price: "₹249" },
            { name: "Black", image: "https://i.ibb.co/tw1kQcSk/ms-bbdky-512-277086556.jpg", images: ["https://i.ibb.co/tw1kQcSk/ms-bbdky-512-277086556.jpg"], price: "₹249" },
            { name: "Yellow", image: "https://i.ibb.co/bgKJgP06/ms-tcuro-512-277086553.jpg", images: ["https://i.ibb.co/bgKJgP06/ms-tcuro-512-277086553.jpg", "https://i.ibb.co/LhJKcMsj/ms-rwioj-512-277086553.jpg", "https://i.ibb.co/274xCgT2/ms-5ndpu-512-277086553.jpg"], price: "₹249" },
            { name: "Purple", image: "https://i.ibb.co/4w5pnvcP/ms-v47t8-512-277086557.jpg", images: ["https://i.ibb.co/4w5pnvcP/ms-v47t8-512-277086557.jpg", "https://i.ibb.co/vx249YCD/ms-li8i5-512-277086557.jpg"], price: "₹249" },
            { name: "Light Pink", image: "https://i.ibb.co/d0RkTFjD/ms-r5ben-512-277086554.jpg", images: ["https://i.ibb.co/d0RkTFjD/ms-r5ben-512-277086554.jpg", "https://i.ibb.co/21HjggW2/ms-eimsa-512-277086554.jpg"], price: "₹249" }
        ],
        sizes: [
            { name: "XS", price: "₹249" },
            { name: "S", price: "₹249" },
            { name: "M", price: "₹249" },
            { name: "L", price: "₹249" }
        ]
    },
    {
        id: "SHREE-C-22",
        name: "Women's Mini Dress",
        images: ["https://i.ibb.co/GQVkpVRH/ms-xoa6x-512-316602636.jpg"],
        shortDescription: "Chic crepe mini dress designed for casual outings and parties.",
        description: "Trendy women's mini dress crafted from soft crepe fabric for an effortless stylish look.",
        price: "₹249",
        colors: [
            { name: "Brown", image: "https://i.ibb.co/GQVkpVRH/ms-xoa6x-512-316602636.jpg", images: ["https://i.ibb.co/GQVkpVRH/ms-xoa6x-512-316602636.jpg"], price: "₹249" },
            { name: "Beige", image: "https://i.ibb.co/HL3yMPxR/ms-ywwr3-512-316602637.jpg", images: ["https://i.ibb.co/HL3yMPxR/ms-ywwr3-512-316602637.jpg"], price: "₹249" },
            { name: "Maroon", image: "https://i.ibb.co/Fk0KQ8dC/ms-xyo9p-512-316602639.jpg", images: ["https://i.ibb.co/Fk0KQ8dC/ms-xyo9p-512-316602639.jpg", "https://i.ibb.co/qYfkcghm/ms-xiqr1-512-316602638.jpg"], price: "₹249" },
            { name: "Green", image: "https://i.ibb.co/21YXZ5Xs/ms-yt08v-512-316602635.jpg", images: ["https://i.ibb.co/21YXZ5Xs/ms-yt08v-512-316602635.jpg"], price: "₹249" },
            { name: "Black", image: "https://i.ibb.co/6250bwS/ms-w6ed8-512-316602634.jpg", images: ["https://i.ibb.co/6250bwS/ms-w6ed8-512-316602634.jpg"], price: "₹249" }
        ],
        sizes: [
            { name: "XS", price: "₹249" },
            { name: "S", price: "₹249" },
            { name: "M", price: "₹249" },
            { name: "L", price: "₹249" }
        ]
    },
    {
        id: "SHREE-C-23",
        name: "Women's Kurti",
        images: ["https://i.ibb.co/B5zg3nbg/ms-gbnbv-512-985903375.jpg"],
        shortDescription: "Elegant rayon kurti featuring fine prints and classic fit.",
        description: "Comfortable and graceful rayon kurti designed for daily wear and ethnic styling.",
        price: "₹429",
        colors: [
            { name: "Blue", image: "https://i.ibb.co/B5zg3nbg/ms-gbnbv-512-985903375.jpg", images: ["https://i.ibb.co/B5zg3nbg/ms-gbnbv-512-985903375.jpg", "https://i.ibb.co/nNSkhnLd/ms-bik7i-512-985903375.jpg", "https://i.ibb.co/MkfDr44Y/ms-xmap4-512-985903375.jpg"], price: "₹429" },
            { name: "Orange", image: "https://i.ibb.co/93NQzfsj/ms-6atmf-512-985903377.jpg", images: ["https://i.ibb.co/93NQzfsj/ms-6atmf-512-985903377.jpg", "https://i.ibb.co/xKsWRrWL/ms-tman4-512-985903377.jpg", "https://i.ibb.co/PsNjcd7d/ms-qjafo-512-985903377.jpg"], price: "₹429" },
            { name: "Yellow", image: "https://i.ibb.co/4RV2VVPs/ms-dgujn-512-985903378.jpg", images: ["https://i.ibb.co/4RV2VVPs/ms-dgujn-512-985903378.jpg", "https://i.ibb.co/xSZbKyFr/ms-4rddj-512-985903378.jpg", "https://i.ibb.co/Q7cGPns4/ms-voe1i-512-985903378.jpg"], price: "₹429" }
        ],
        sizes: [
            { name: "XS", price: "₹429" },
            { name: "S", price: "₹429" },
            { name: "M", price: "₹429" },
            { name: "L", price: "₹429" },
            { name: "XL", price: "₹429" },
            { name: "XXL", price: "₹429" },
            { name: "XXXL", price: "₹429" },
            { name: "4XL", price: "₹429" },
            { name: "5XL", price: "₹429" }
        ]
    },
    {
        id: "SHREE-C-24",
        name: "Women's Kurta Set",
        images: ["https://i.ibb.co/jm3SBs5/ms-8ee5x-512-588164719.jpg"],
        shortDescription: "Premium cotton kurta set offering superior comfort and traditional appeal.",
        description: "Classic cotton kurta set featuring exquisite patterns ideal for festive and casual wear.",
        price: "₹349",
        colors: [
            { name: "Maroon", image: "https://i.ibb.co/jm3SBs5/ms-8ee5x-512-588164719.jpg", images: ["https://i.ibb.co/jm3SBs5/ms-8ee5x-512-588164719.jpg", "https://i.ibb.co/TqWHWTB4/ms-otxu9-512-588164719.jpg", "https://i.ibb.co/tMVr1Y5G/ms-ane4x-512-588164719.jpg", "https://i.ibb.co/KpBHRXbd/ms-uvw9p-512-588164719.jpg"], price: "₹349" }
        ],
        sizes: [
            { name: "XXS", price: "₹349" },
            { name: "XS", price: "₹349" },
            { name: "S", price: "₹349" },
            { name: "M", price: "₹349" },
            { name: "L", price: "₹349" },
            { name: "XL", price: "₹349" },
            { name: "XXL", price: "₹349" },
            { name: "XXXL", price: "₹349" }
        ]
    },
    {
        id: "SHREE-C-25",
        name: "Designer Kurta Set",
        images: ["https://i.ibb.co/HTh5NFbT/ms-b3pwq-512-972567633.jpg"],
        shortDescription: "Designer cotton kurta set crafted with fine detailing and elegant finish.",
        description: "High-quality cotton designer kurta set that brings sophisticated style to your ethnic wardrobe.",
        price: "₹369",
        colors: [
            { name: "Black", image: "https://i.ibb.co/HTh5NFbT/ms-b3pwq-512-972567633.jpg", images: ["https://i.ibb.co/HTh5NFbT/ms-b3pwq-512-972567633.jpg", "https://i.ibb.co/23Gxgfpf/ms-fmvh3-512-972567633.jpg", "https://i.ibb.co/TBvRg8Y5/ms-sohfm-512-972567633.jpg", "https://i.ibb.co/szDZpTD/ms-vevhq-512-972567633.jpg"], price: "₹369" }
        ],
        sizes: [
            { name: "M", price: "₹369" },
            { name: "L", price: "₹369" },
            { name: "XL", price: "₹369" },
            { name: "XXL", price: "₹369" },
            { name: "XXXL", price: "₹369" },
            { name: "4XL", price: "₹369" },
            { name: "5XL", price: "₹369" }
        ]
    },
    {
        id: "SHREE-C-26",
        name: "Women's Cozy Dress",
        images: ["https://i.ibb.co/MD8VsGJG/ms-amvpn-512-504507253.jpg"],
        shortDescription: "Soft khaadi cotton cozy dress designed for all-day relaxed comfort.",
        description: "Cozy and breathable khaadi cotton dress offering an aesthetic silhouette and supreme comfort.",
        price: "₹399",
        colors: [
            { name: "Pink", image: "https://i.ibb.co/MD8VsGJG/ms-amvpn-512-504507253.jpg", images: ["https://i.ibb.co/MD8VsGJG/ms-amvpn-512-504507253.jpg", "https://i.ibb.co/27hT64xn/ms-woxdf-512-504507253.jpg", "https://i.ibb.co/8gYFyvRY/ms-vla3f-512-504507253.jpg", "https://i.ibb.co/HTVPfkX8/ms-yzxag-512-504507253.jpg"], price: "₹399" }
        ],
        sizes: [
            { name: "XS", price: "₹399" },
            { name: "S", price: "₹479" },
            { name: "M", price: "₹399" },
            { name: "L", price: "₹479" },
            { name: "XL", price: "₹479" },
            { name: "XXL", price: "₹479" },
            { name: "XXXL", price: "₹479" },
            { name: "4XL", price: "₹489" },
            { name: "5XL", price: "₹489" }
        ]
    },
    {
        id: "SHREE-C-27",
        name: "Women's latest Kurti",
        images: ["https://i.ibb.co/Nn9t7gWK/ms-i9eio-512-468271645.jpg"],
        shortDescription: "Trendy rayon kurti featuring contemporary patterns and rich maroon tone.",
        description: "Latest design rayon kurti tailored to give you a chic and elegant everyday ethnic look.",
        price: "₹469",
        colors: [
            { name: "Maroon", image: "https://i.ibb.co/Nn9t7gWK/ms-i9eio-512-468271645.jpg", images: ["https://i.ibb.co/Nn9t7gWK/ms-i9eio-512-468271645.jpg", "https://i.ibb.co/TMxbx36H/ms-1bnwy-512-468271645.jpg", "https://i.ibb.co/GfkfzgJS/ms-4yync-512-468271645.jpg", "https://i.ibb.co/yCZ4nPC/ms-uzvd0-512-468271645.jpg"], price: "₹469" }
        ],
        sizes: [
            { name: "L", price: "₹469" },
            { name: "XXL", price: "₹469" },
            { name: "XXXL", price: "₹469" }
        ]
    },
    {
        id: "SHREE-C-28",
        name: "Women's Flat Heels",
        images: ["https://i.ibb.co/V1dMR9H/ms-8z35e-512-530997519.jpg"],
        shortDescription: "Comfortable 2-inch flat heels in classic beige for graceful styling.",
        description: "Stylish women's flat heels with a comfortable 2-inch elevation, perfect for daily wear and special occasions.",
        price: "₹349",
        colors: [
            { name: "Beige", image: "https://i.ibb.co/V1dMR9H/ms-8z35e-512-530997519.jpg", images: ["https://i.ibb.co/V1dMR9H/ms-8z35e-512-530997519.jpg", "https://i.ibb.co/tp7RPYyh/ms-vmhzp-512-530997519.jpg", "https://i.ibb.co/s8CX6mK/ms-ptrvb-512-530997519.jpg", "https://i.ibb.co/zTLKWx7G/ms-qouce-512-530997519.jpg"], price: "₹349" }
        ],
        sizes: [
            { name: "IND 4", price: "₹349" },
            { name: "IND 5", price: "₹349" },
            { name: "IND 6", price: "₹349" },
            { name: "IND 7", price: "₹349" },
            { name: "IND 8", price: "₹349" }
        ]
    },
    {
        id: "SHREE-C-29",
        name: "Men's Stylish Shirt",
        images: ["https://i.ibb.co/bRmtLMBj/ms-mrunx-512-527490671.jpg"],
        shortDescription: "Textured popcorn fabric men's shirt for a sharp and modern look.",
        description: "Trendy men's stylish shirt made from comfortable popcorn fabric, built for casual and smart-casual wear.",
        price: "₹249",
        colors: [
            { name: "White", image: "https://i.ibb.co/bRmtLMBj/ms-mrunx-512-527490671.jpg", images: ["https://i.ibb.co/bRmtLMBj/ms-mrunx-512-527490671.jpg", "https://i.ibb.co/tj6TjFj/ms-vjwfo-512-527490671.jpg"], price: "₹249" },
            { name: "Black", image: "https://i.ibb.co/9mdtjv14/ms-reeub-512-527490672.jpg", images: ["https://i.ibb.co/9mdtjv14/ms-reeub-512-527490672.jpg", "https://i.ibb.co/wrcYS7vD/ms-fykza-512-527490672.jpg"], price: "₹249" }
        ],
        sizes: [
            { name: "S", price: "₹249" },
            { name: "M", price: "₹249" },
            { name: "L", price: "₹249" },
            { name: "XL", price: "₹249" }
        ]
    },
    {
        id: "SHREE-C-30",
        name: "Men's Casual Shirt",
        images: ["https://i.ibb.co/v6hM62Lk/ms-9omkk-512-375103171.jpg"],
        shortDescription: "Versatile popcorn fabric men's casual shirt in multiple solid colors.",
        description: "Comfortable and light textured popcorn fabric shirt designed for everyday casual comfort.",
        price: "₹229",
        colors: [
            { name: "Sky Blue", image: "https://i.ibb.co/v6hM62Lk/ms-9omkk-512-375103171.jpg", images: ["https://i.ibb.co/v6hM62Lk/ms-9omkk-512-375103171.jpg", "https://i.ibb.co/SZpXVFF/ms-vosnb-512-375103171.jpg"], price: "₹229" },
            { name: "Navy Blue", image: "https://i.ibb.co/35PSsLdx/ms-fzfyu-512-375103167.jpg", images: ["https://i.ibb.co/35PSsLdx/ms-fzfyu-512-375103167.jpg"], price: "₹249" },
            { name: "Black", image: "https://i.ibb.co/GQgpsFpd/ms-lpwfp-512-375103166.jpg", images: ["https://i.ibb.co/GQgpsFpd/ms-lpwfp-512-375103166.jpg"], price: "₹239" },
            { name: "Maroon", image: "https://i.ibb.co/YTqf8jCk/ms-et9qu-512-375103170.jpg", images: ["https://i.ibb.co/YTqf8jCk/ms-et9qu-512-375103170.jpg"], price: "₹249" },
            { name: "Grey", image: "https://i.ibb.co/CNXM5Kq/ms-cy54t-512-375103169.jpg", images: ["https://i.ibb.co/CNXM5Kq/ms-cy54t-512-375103169.jpg"], price: "₹259" },
            { name: "Lavender", image: "https://i.ibb.co/1G0qXC45/ms-zef8g-512-375103173.jpg", images: ["https://i.ibb.co/1G0qXC45/ms-zef8g-512-375103173.jpg"], price: "₹269" },
            { name: "White", image: "https://i.ibb.co/wFgLwx6M/ms-8clna-512-375103172.jpg", images: ["https://i.ibb.co/wFgLwx6M/ms-8clna-512-375103172.jpg"], price: "₹229" },
            { name: "Green", image: "https://i.ibb.co/B5gmPxmC/ms-myvn4-512-375103168.jpg", images: ["https://i.ibb.co/B5gmPxmC/ms-myvn4-512-375103168.jpg"], price: "₹239" }
        ],
        sizes: [
            { name: "S", price: "₹229" },
            { name: "M", price: "₹229" },
            { name: "L", price: "₹229" },
            { name: "XL", price: "₹229" },
            { name: "XXL", price: "₹229" }
        ]
    },
    {
        id: "SHREE-C-31",
        name: "Oversized T shirt (Combo Pack)",
        images: ["https://i.ibb.co/zVM84wqr/ms-hulta-512-516216298.jpg"],
        shortDescription: "Value combo pack of 2 pure kapaas oversized t-shirts with vibrant dual-tone themes.",
        description: "Double up your style with this value-packed combo set of 2 premium kapaas oversized t-shirts, offering unmatched comfort and standout street style aesthetics.",
        price: "₹399",
        colors: [
            { name: "Brown + Blue", image: "https://i.ibb.co/zVM84wqr/ms-hulta-512-516216298.jpg", images: ["https://i.ibb.co/zVM84wqr/ms-hulta-512-516216298.jpg", "https://i.ibb.co/dwxbP3z2/ms-q1xaf-512-516216298.jpg"], price: "₹399" },
            { name: "Brown + Red", image: "https://i.ibb.co/C5n7C2Yv/ms-dx0ka-512-516216300.jpg", images: ["https://i.ibb.co/C5n7C2Yv/ms-dx0ka-512-516216300.jpg"], price: "₹399" },
            { name: "Blue + Red", image: "https://i.ibb.co/hJgcbf8V/ms-rpavn-512-516216305.jpg", images: ["https://i.ibb.co/hJgcbf8V/ms-rpavn-512-516216305.jpg"], price: "₹399" },
            { name: "Green + Black", image: "https://i.ibb.co/0j4mgdwF/ms-2bd4k-512-516216301.jpg", images: ["https://i.ibb.co/0j4mgdwF/ms-2bd4k-512-516216301.jpg"], price: "₹399" },
            { name: "Grey + Green", image: "https://i.ibb.co/VYyFMGP5/ms-xipep-512-516216303.jpg", images: ["https://i.ibb.co/VYyFMGP5/ms-xipep-512-516216303.jpg"], price: "₹399" },
            { name: "Brown + Green", image: "https://i.ibb.co/LzgxhPv1/ms-qrnf5-512-516216304.jpg", images: ["https://i.ibb.co/LzgxhPv1/ms-qrnf5-512-516216304.jpg"], price: "₹399" },
            { name: "Black + Pink", image: "https://i.ibb.co/4w6pPXth/ms-grtn5-512-516216297.jpg", images: ["https://i.ibb.co/4w6pPXth/ms-grtn5-512-516216297.jpg"], price: "₹399" },
            { name: "Green + Red", image: "https://i.ibb.co/Z6kJj85X/ms-mzd2x-512-516216299.jpg", images: ["https://i.ibb.co/Z6kJj85X/ms-mzd2x-512-516216299.jpg"], price: "₹399" }
        ],
        sizes: [
            { name: "S", price: "₹399" },
            { name: "M", price: "₹399" },
            { name: "L", price: "₹399" },
            { name: "XL", price: "₹399" },
            { name: "XXL", price: "₹399" }
        ]
    },
    {
        id: "SHREE-C-32",
        name: "Men's Printed Shirt",
        images: ["https://i.ibb.co/9Hwxx21L/ms-ubn5w-512-456371139.jpg"],
        shortDescription: "Cotton men's printed shirt featuring eye-catching modern patterns.",
        description: "Stylish and breathable cotton printed shirt designed to elevate your casual wardrobe effortlessly.",
        price: "₹329",
        colors: [
            { name: "Black", image: "https://i.ibb.co/9Hwxx21L/ms-ubn5w-512-456371139.jpg", images: ["https://i.ibb.co/9Hwxx21L/ms-ubn5w-512-456371139.jpg"], price: "₹339" },
            { name: "Blue", image: "https://i.ibb.co/21QqhGCn/ms-iasy5-512-456371137.jpg", images: ["https://i.ibb.co/21QqhGCn/ms-iasy5-512-456371137.jpg"], price: "₹329" },
            { name: "White", image: "https://i.ibb.co/CKgQ5XtM/ms-j9wua-512-456371138.jpg", images: ["https://i.ibb.co/CKgQ5XtM/ms-j9wua-512-456371138.jpg"], price: "₹329" }
        ],
        sizes: [
            { name: "S", price: "₹329" },
            { name: "M", price: "₹329" },
            { name: "L", price: "₹329" },
            { name: "XL", price: "₹329" },
            { name: "XXL", price: "₹329" }
        ]
    },
    {
        id: "SHREE-C-33",
        name: "Women's Short Kurti",
        images: ["https://i.ibb.co/5W123zmb/ms-prsik-512-983823213.jpg"],
        shortDescription: "Bright yellow cotton short kurti for a fresh and cheerful everyday look.",
        description: "Charming cotton short kurti crafted with breathable fabric and elegant detailing for casual styling.",
        price: "₹299",
        colors: [
            { name: "Yellow", image: "https://i.ibb.co/5W123zmb/ms-prsik-512-983823213.jpg", images: ["https://i.ibb.co/5W123zmb/ms-prsik-512-983823213.jpg", "https://i.ibb.co/6J4yCpXc/ms-2r7dn-512-983823213.jpg", "https://i.ibb.co/sdYg9G6d/ms-lz0fx-512-983823213.jpg"], price: "₹299" }
        ],
        sizes: [
            { name: "XS", price: "₹299" },
            { name: "S", price: "₹299" },
            { name: "M", price: "₹299" },
            { name: "L", price: "₹299" },
            { name: "XL", price: "₹299" },
            { name: "XXL", price: "₹299" }
        ]
    },
    {
        id: "SHREE-C-34",
        name: "Women's Short Kurti",
        images: ["https://i.ibb.co/rRmhpwxF/ms-nfs4e-512-1041181898.jpg"],
        shortDescription: "Sleek black cotton short kurti pairing modern fit with ethnic comfort.",
        description: "Versatile black cotton short kurti that adds a touch of elegance to your daily wardrobe.",
        price: "₹299",
        colors: [
            { name: "Black", image: "https://i.ibb.co/rRmhpwxF/ms-nfs4e-512-1041181898.jpg", images: ["https://i.ibb.co/rRmhpwxF/ms-nfs4e-512-1041181898.jpg", "https://i.ibb.co/4wXyvtht/ms-ukcfq-512-1041181898.jpg", "https://i.ibb.co/T6nVBsJ/ms-mm2sq-512-1041181898.jpg"], price: "₹299" }
        ],
        sizes: [
            { name: "XS", price: "₹299" },
            { name: "S", price: "₹299" },
            { name: "M", price: "₹299" },
            { name: "L", price: "₹299" },
            { name: "XL", price: "₹299" }
        ]
    },
    {
        id: "SHREE-C-35",
        name: "Women's Short Kurti",
        images: ["https://i.ibb.co/yn33DD5r/ms-9d8pq-512-1020792947.jpg"],
        shortDescription: "Vibrant red cotton short kurti for a stylish everyday ethnic look.",
        description: "Lightweight and comfortable cotton short kurti designed in a striking red tone.",
        price: "₹299",
        colors: [
            { name: "Red", image: "https://i.ibb.co/yn33DD5r/ms-9d8pq-512-1020792947.jpg", images: ["https://i.ibb.co/yn33DD5r/ms-9d8pq-512-1020792947.jpg", "https://i.ibb.co/fVWhFSGW/ms-0ujbn-512-1020792947.jpg"], price: "₹299" }
        ],
        sizes: [
            { name: "S", price: "₹299" },
            { name: "M", price: "₹299" },
            { name: "L", price: "₹299" },
            { name: "XL", price: "₹299" }
        ]
    },
    {
        id: "SHREE-C-36",
        name: "Women's Short Kurti",
        images: ["https://i.ibb.co/7tpqK6CD/ms-1kl5l-512-977386124.jpg"],
        shortDescription: "Affordable and cozy blue cotton short kurti for casual wear.",
        description: "Easy-breezy cotton short kurti in a soothing blue shade, offering high value and comfort.",
        price: "₹199",
        colors: [
            { name: "Blue", image: "https://i.ibb.co/7tpqK6CD/ms-1kl5l-512-977386124.jpg", images: ["https://i.ibb.co/7tpqK6CD/ms-1kl5l-512-977386124.jpg", "https://i.ibb.co/zWGwbTfb/ms-qgrfg-512-977386124.jpg"], price: "₹199" }
        ],
        sizes: [
            { name: "XS", price: "₹199" },
            { name: "S", price: "₹199" },
            { name: "M", price: "₹199" },
            { name: "L", price: "₹199" },
            { name: "XL", price: "₹199" },
            { name: "XXL", price: "₹199" }
        ]
    },
    {
        id: "SHREE-C-37",
        name: "Women's Kurta",
        images: ["https://i.ibb.co/DgMnKhh8/ms-soeyf-512-556963070.jpg"],
        shortDescription: "Graceful rayon kurta in rich color variations for elegant ethnic wear.",
        description: "Soft and flowing rayon kurta crafted with beautiful finish for standard casual and festive occasions.",
        price: "₹399",
        colors: [
            { name: "Green", image: "https://i.ibb.co/DgMnKhh8/ms-soeyf-512-556963070.jpg", images: ["https://i.ibb.co/DgMnKhh8/ms-soeyf-512-556963070.jpg", "https://i.ibb.co/gbfCVhtR/ms-c7981-512-556963070.jpg", "https://i.ibb.co/nMYQSdRC/ms-ul0ay-512-556963070.jpg"], price: "₹399" },
            { name: "Purple", image: "https://i.ibb.co/2mcmK9d/ms-ag7qk-512-556963072.jpg", images: ["https://i.ibb.co/2mcmK9d/ms-ag7qk-512-556963072.jpg", "https://i.ibb.co/MWb6VKW/ms-2lybj-512-556963072.jpg", "https://i.ibb.co/Cp0MQzTJ/ms-7xbgz-512-556963072.jpg"], price: "₹399" },
            { name: "Orange", image: "https://i.ibb.co/jZ1NwFz1/ms-qpsac-512-556963071.jpg", images: ["https://i.ibb.co/jZ1NwFz1/ms-qpsac-512-556963071.jpg", "https://i.ibb.co/N6pPMXpR/ms-y4iov-512-556963071.jpg"], price: "₹399" }
        ],
        sizes: [
            { name: "S", price: "₹399" },
            { name: "M", price: "₹359" },
            { name: "L", price: "₹399" },
            { name: "XL", price: "₹399" },
            { name: "XXL", price: "₹399" }
        ]
    },
    {
        id: "SHREE-C-38",
        name: "Women's Jaipuri Kurti",
        images: ["https://i.ibb.co/1fgYPQPf/ms-uviso-512-616446241.jpg"],
        shortDescription: "Traditional Jaipuri print rayon kurti offering vibrant ethnic charm.",
        description: "Classic Jaipuri style rayon kurti featuring exquisite cultural prints and comfortable fit.",
        price: "₹349",
        colors: [
            { name: "Purple", image: "https://i.ibb.co/1fgYPQPf/ms-uviso-512-616446241.jpg", images: ["https://i.ibb.co/1fgYPQPf/ms-uviso-512-616446241.jpg", "https://i.ibb.co/8L8mJYPm/ms-uh8jl-512-616446241.jpg", "https://i.ibb.co/G4B2sWxS/ms-rp610-512-616446241.jpg"], price: "₹349" },
            { name: "Green", image: "https://i.ibb.co/wZBCks2V/ms-nqzmz-512-616446240.jpg", images: ["https://i.ibb.co/wZBCks2V/ms-nqzmz-512-616446240.jpg", "https://i.ibb.co/CKkVqJMc/ms-ysneq-512-616446240.jpg", "https://i.ibb.co/21yWFZvY/ms-kwrxj-512-616446240.jpg"], price: "₹339" }
        ],
        sizes: [
            { name: "XS", price: "₹349" },
            { name: "S", price: "₹349" },
            { name: "M", price: "₹329" },
            { name: "L", price: "₹349" },
            { name: "XL", price: "₹349" },
            { name: "XXL", price: "₹349" },
            { name: "XXXL", price: "₹339" }
        ]
    },
    {
        id: "SHREE-C-39",
        name: "Combo Trousers",
        images: ["https://i.ibb.co/xrJ5BVH/ms-0rhvw-512-620266054.jpg"],
        shortDescription: "Comfortable cotton-blend combo trousers featuring versatile multi-color options.",
        description: "Durable and cozy kapaas combo trousers tailored for ultimate comfort and everyday wearability.",
        price: "₹319",
        colors: [
            { name: "Black + Pink", image: "https://i.ibb.co/xrJ5BVH/ms-0rhvw-512-620266054.jpg", images: ["https://i.ibb.co/xrJ5BVH/ms-0rhvw-512-620266054.jpg", "https://i.ibb.co/hFHskGYN/ms-xr5o8-512-620266054.jpg", "https://i.ibb.co/KSyX5xQ/ms-2skgs-512-620266053.jpg"], price: "₹319" },
            { name: "Black + Brown", image: "https://i.ibb.co/v6n8LLDt/ms-s5qk1-512-620266050.jpg", images: ["https://i.ibb.co/v6n8LLDt/ms-s5qk1-512-620266050.jpg", "https://i.ibb.co/Cr4dV2P/ms-enedk-512-620266050.jpg"], price: "₹319" },
            { name: "Beige + Brown", image: "https://i.ibb.co/LD9rPLy3/ms-atgo2-512-620266052.jpg", images: ["https://i.ibb.co/LD9rPLy3/ms-atgo2-512-620266052.jpg", "https://i.ibb.co/BDJ4WSy/ms-wiixt-512-620266052.jpg"], price: "₹319" },
            { name: "Beige + Pink", image: "https://i.ibb.co/WNwgKh5F/ms-wivpc-512-620266053.jpg", images: ["https://i.ibb.co/WNwgKh5F/ms-wivpc-512-620266053.jpg", "https://i.ibb.co/spZTT2CJ/ms-yn9do-512-620266053.jpg"], price: "₹319" },
            { name: "Black + Beige", image: "https://i.ibb.co/DPjmrLLx/ms-uxnvm-512-620266051.jpg", images: ["https://i.ibb.co/DPjmrLLx/ms-uxnvm-512-620266051.jpg", "https://i.ibb.co/NgbX3bQH/ms-oxbmh-512-620266051.jpg"], price: "₹319" }
        ],
        sizes: [
            { name: "S", price: "₹319" },
            { name: "M", price: "₹319" },
            { name: "L", price: "₹319" },
            { name: "XL", price: "₹319" },
            { name: "XXL", price: "₹319" }
        ]
    },
    {
        id: "SHREE-C-40",
        name: "Blackberry Dress",
        images: ["https://i.ibb.co/XZ0DRGt1/ms-sahxc-512-382519791.jpg"],
        shortDescription: "Stunning jorjet Blackberry dress designed for parties and special outings.",
        description: "Graceful jorjet fabric dress featuring a sleek cut and sophisticated look for an effortless statement.",
        price: "₹399",
        colors: [
            { name: "Black", image: "https://i.ibb.co/XZ0DRGt1/ms-sahxc-512-382519791.jpg", images: ["https://i.ibb.co/XZ0DRGt1/ms-sahxc-512-382519791.jpg", "https://i.ibb.co/cc5h6PQD/ms-mz1wn-512-382519791.jpg", "https://i.ibb.co/jv88RnVT/ms-hpcjt-512-382519791.jpg"], price: "₹399" }
        ],
        sizes: [
            { name: "XS", price: "₹399" },
            { name: "S", price: "₹399" },
            { name: "M", price: "₹339" },
            { name: "L", price: "₹399" },
            { name: "XL", price: "₹399" },
            { name: "XXL", price: "₹399" },
            { name: "XXXL", price: "₹399" },
            { name: "4XL", price: "₹399" }
        ]
    }
  ];

// CART STATE
let cart = JSON.parse(localStorage.getItem('shree_cart')) || [];
let selectedVariantColorIdx = 0;
let selectedVariantSizeIdx = 0;
let savedScrollPos = 0;

// Render Home Products
const homeContainer = document.getElementById('home-products');
let homeHtml = '';
homeFeaturedProducts.forEach((product, index) => {
    homeHtml += `<div class="product-card"><div class="single-img-container" onclick="openProductDetail('home', ${index})"><img src="${product.image}" alt="${product.name}"></div><h3 onclick="openProductDetail('home', ${index})">${product.name}</h3><p>${product.description}</p><div class="price-row"><span class="price">${product.price}</span><a href="${product.affiliateLink}" target="_blank" class="btn-small">View Deal</a></div></div>`;
});
homeContainer.innerHTML = homeHtml;

// Render Finds Products
const findsContainer = document.getElementById('finds-products');
let findsHtml = '';
affiliateProducts.forEach((product, index) => {
    let swipeImagesHtml = '';
    product.images.forEach((imgLink, imgIndex) => {
        swipeImagesHtml += `<div class="swipe-img-item" onclick="openLightbox('finds', ${index}, ${imgIndex})"><img src="${imgLink}" alt="product image"></div>`;
    });
    findsHtml += `<div class="product-card"><div class="swipe-gallery-container" id="swipe-container-finds-${index}">${swipeImagesHtml}</div><h3 onclick="openProductDetail('finds', ${index})">${product.name}</h3><p>${product.description}</p><div class="price-row"><span class="price">${product.price}</span><a href="${product.affiliateLink}" target="_blank" class="btn-small">View Deal</a></div></div>`;
});
findsContainer.innerHTML = findsHtml;

// Render Closet Products
const closetContainer = document.getElementById('closet-products');
let closetHtml = '';
resellingProducts.forEach((product, index) => {
    let displayImg = product.colors ? product.colors[0].image : product.images[0];
    let displayPrice = product.colors ? product.colors[0].price : product.price;
    let swipeImagesHtml = `<div class="swipe-img-item" onclick="openLightbox('closet', ${index}, 0)"><img src="${displayImg}" alt="product image"></div>`;
    
    // Sanitize description string for safe inline usage (remove tags or replace quotes if needed)
    let safeDesc = (product.shortDescription || product.description).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    
    closetHtml += `<div class="product-card"><div class="swipe-gallery-container" id="swipe-container-closet-${index}">${swipeImagesHtml}</div><h3 onclick="openProductDetail('closet', ${index})">${product.name}</h3><p>${product.shortDescription || product.description}</p><div class="price-row"><span class="price" id="closet-card-price-${index}">${displayPrice}</span><div class="btn-group"><button class="btn-small btn-cart" onclick="addToCartItem('${product.id}', '${product.name.replace(/'/g, "\\'")}', '${displayPrice}', '${displayImg}', '')">Add to Cart</button><button class="btn-small" onclick="buyNowItem('${product.id}', '${product.name.replace(/'/g, "\\'")}', '${displayPrice}', '${displayImg}', '')">Buy Now</button></div></div></div>`;
});
closetContainer.innerHTML = closetHtml;

// SEARCH MODAL TOGGLE & LIVE SEARCH
function toggleSearchModal() {
    const modal = document.getElementById('search-modal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
        document.getElementById('search-input').focus();
    }
}

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const container = document.getElementById('search-results-container');

    if (!query) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-light); font-size: 13px; grid-column: span 2; margin-top: 20px;">Type something to find your favorite picks 🤍</p>`;
        return;
    }

    let allProducts = [
        ...affiliateProducts.map(p => ({ ...p, type: 'finds', mainImg: p.images[0] })),
        ...resellingProducts.map(p => ({ ...p, type: 'closet', mainImg: p.colors ? p.colors[0].image : p.images[0] }))
    ];

    let filtered = allProducts.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-light); font-size: 13px; grid-column: span 2; margin-top: 20px;">No cozy treasures found for "${query}" 🍃</p>`;
        return;
    }

    let html = '';
    filtered.forEach(p => {
        let originalIdx = (p.type === 'finds') ? affiliateProducts.findIndex(item => item.id === p.id) : resellingProducts.findIndex(item => item.id === p.id);
        html += `
            <div class="product-card" style="cursor: pointer;" onclick="toggleSearchModal(); openProductDetail('${p.type}', ${originalIdx})">
                <div style="width: 100%; height: 120px; background: #f9f9f9; border-radius: 8px; overflow: hidden; margin-bottom: 8px;">
                    <img src="${p.mainImg}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <h4 style="font-size: 14px; font-weight: 700; color: var(--text-dark); margin-bottom: 4px;">${p.name}</h4>
                <p style="font-size: 12px; color: var(--primary-green); font-weight: 700; margin-bottom: 0;">${p.price}</p>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Page Switch Logic
function switchPage(pageId, navElement) {
    let pages = document.getElementsByClassName('page-section');
    for(let i = 0; i < pages.length; i++) pages[i].classList.remove('active-page');
    document.getElementById(pageId).classList.add('active-page');
    
    let navLinks = document.querySelectorAll('nav ul li a');
    for(let i = 0; i < navLinks.length; i++) navLinks[i].classList.remove('active');
    
    if(navElement) {
        navElement.classList.add('active');
    } else {
        if(pageId === 'home-page') document.getElementById('nav-home').classList.add('active');
        if(pageId === 'finds-page') document.getElementById('nav-finds').classList.add('active');
        if(pageId === 'closet-page') document.getElementById('nav-closet').classList.add('active');
        if(pageId === 'categories-page') document.getElementById('nav-categories').classList.add('active');
        if(pageId === 'about-page') document.getElementById('nav-about').classList.add('active');
        if(pageId === 'contact-page') document.getElementById('nav-contact').classList.add('active');
    }
    
    if (pageId !== 'product-detail-page') {
        window.scrollTo(0, 0);
    }
}

// Open Product Detail
function openProductDetail(type, index) {
    savedScrollPos = window.scrollY; 
    selectedVariantColorIdx = 0;
    selectedVariantSizeIdx = 0;
    
    renderDetailPageContent(type, index);
    switchPage('product-detail-page', null);
    window.scrollTo(0, 0);
}

function renderDetailPageContent(type, index) {
    let p;
    if(type === 'home') p = homeFeaturedProducts[index];
    else if(type === 'finds') p = affiliateProducts[index];
    else if(type === 'closet') p = resellingProducts[index];

    const detailWrapper = document.getElementById('detail-wrapper');
    
    let currentImg = '';
    let currentPriceFormatted = '';
    let swipeImgsHtml = '';

    if (type === 'closet' && p.colors) {
        let activeColorObj = p.colors[selectedVariantColorIdx];
        currentImg = activeColorObj.image;
        let colorSizes = activeColorObj.sizes || p.sizes;
        if (selectedVariantSizeIdx >= colorSizes.length) selectedVariantSizeIdx = 0;
        currentPriceFormatted = colorSizes[selectedVariantSizeIdx] ? colorSizes[selectedVariantSizeIdx].price : activeColorObj.price;
        
        let colorImages = activeColorObj.images || [activeColorObj.image];
        colorImages.forEach((imgLink, imgIdx) => {
            swipeImgsHtml += `<div class="detail-swipe-item" onclick="openLightbox('closet', ${index}, ${imgIdx})"><img src="${imgLink}" alt="${p.name}"></div>`;
        });
    } else {
        currentImg = (type === 'home') ? p.image : p.images[0];
        currentPriceFormatted = p.price;
        swipeImgsHtml = `<div class="detail-swipe-item"><img src="${currentImg}" alt="${p.name}"></div>`;
    }

    let colorsHtml = '';
    if (type === 'closet' && p.colors) {
        colorsHtml += `<div class="variant-section"><div class="variant-title">Color / Variant: <span style="font-weight:400; color:var(--text-light);">${p.colors[selectedVariantColorIdx].name}</span></div><div class="variant-options">`;
        p.colors.forEach((col, cIdx) => {
            let activeCls = (cIdx === selectedVariantColorIdx) ? 'active-variant' : '';
            colorsHtml += `<button class="variant-btn ${activeCls}" onclick="selectVariantColor(${index}, ${cIdx})">${col.name}</button>`;
        });
        colorsHtml += `</div></div>`;
    }

    let sizesHtml = '';
    let currentSizes = (type === 'closet' && p.colors && p.colors[selectedVariantColorIdx] && p.colors[selectedVariantColorIdx].sizes) ? p.colors[selectedVariantColorIdx].sizes : p.sizes;
    if (type === 'closet' && currentSizes) {
        if (selectedVariantSizeIdx >= currentSizes.length) selectedVariantSizeIdx = 0;
        sizesHtml += `<div class="variant-section"><div class="variant-title">Size: <span style="font-weight:400; color:var(--text-light);">${currentSizes[selectedVariantSizeIdx].name}</span></div><div class="variant-options">`;
        currentSizes.forEach((sz, sIdx) => {
            let activeCls = (sIdx === selectedVariantSizeIdx) ? 'active-variant' : '';
            sizesHtml += `<button class="variant-btn ${activeCls}" onclick="selectVariantSize(${index}, ${sIdx})">${sz.name}</button>`;
        });
        sizesHtml += `</div></div>`;
    }

    let actionButtons = '';
    if(type === 'closet') {
        let variantFullName = p.name;
        if(p.colors) variantFullName += ` (${p.colors[selectedVariantColorIdx].name}`;
        if(currentSizes) variantFullName += `, ${currentSizes[selectedVariantSizeIdx].name})`;
        else if(p.colors) variantFullName += `)`;

        let escapedVariantName = variantFullName.replace(/'/g, "\\'");

        actionButtons = `
            <button class="btn-small btn-cart" style="padding: 10px 20px; font-size: 14px;" onclick="addToCartItem('${p.id}', '${escapedVariantName}', '${currentPriceFormatted}', '${currentImg}', '')">Add to Cart</button>
            <button class="btn-small" style="padding: 10px 20px; font-size: 14px;" onclick="buyNowItem('${p.id}', '${escapedVariantName}', '${currentPriceFormatted}', '${currentImg}', '')">Buy Now</button>
        `;
    } else {
        let externalLink = p.affiliateLink || "#";
        actionButtons = `<a href="${externalLink}" target="_blank" class="btn-small" style="padding: 10px 20px; font-size: 14px;">View Deal on Amazon 🤍</a>`;
    }

    let backNavText = (type === 'closet') ? 'Back to Closet' : ((type === 'finds') ? 'Back to Finds' : 'Back to Home');
    let backNavAction = (type === 'closet') ? "goBackToSection('closet-page', document.getElementById('nav-closet'))" : ((type === 'finds') ? "goBackToSection('finds-page', document.getElementById('nav-finds'))" : "goBackToSection('home-page', document.getElementById('nav-home'))");

    let descriptionDisplay = (type === 'closet') ? `<p style="font-size: 14px; color: var(--text-light); margin-bottom: 12px; font-weight: 600; white-space: pre-line;">${p.description}</p>` : ``;

    detailWrapper.innerHTML = `
        <button class="btn-back" onclick="${backNavAction}"><i class="fa-solid fa-arrow-left"></i> ${backNavText}</button>
        <div class="detail-container">
            <div class="detail-gallery-box">
                <div class="detail-swipe-container">${swipeImgsHtml}</div>
            </div>
            <div class="detail-info">
                <h2>${p.name}</h2>
                ${descriptionDisplay}
                <div style="font-size:12px; color:var(--primary-green); font-weight:700;">Product ID: ${p.id}</div>
                <div class="price" id="detail-price-tag">${currentPriceFormatted}</div>
                ${colorsHtml}
                ${sizesHtml}
                <div class="btn-group" style="margin-top: 15px; margin-bottom: 20px;">
                    ${actionButtons}
                </div>
            </div>
        </div>
    `;
}

function selectVariantColor(index, colorIdx) {
    selectedVariantColorIdx = colorIdx;
    selectedVariantSizeIdx = 0;
    renderDetailPageContent('closet', index);
}

function selectVariantSize(index, sizeIdx) {
    selectedVariantSizeIdx = sizeIdx;
    renderDetailPageContent('closet', index);
}

function goBackToSection(pageId, navElement) {
    switchPage(pageId, navElement);
    window.scrollTo(0, savedScrollPos); 
}

// Toast
function showCozyToast(name, image) {
    let toast = document.getElementById('cozy-toast');
    if(!toast) {
        toast = document.createElement('div');
        toast.id = 'cozy-toast';
        toast.className = 'cozy-toast';
        toast.innerHTML = `<img id="toast-img" src="" alt="product"><div style="font-weight:700;" id="toast-title">Added to Bag!</div>`;
        document.body.appendChild(toast);
    }
    document.getElementById('toast-img').src = image;
    document.getElementById('toast-title').innerText = name + ' added to bag!';
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Cart Functions
function addToCartItem(id, name, price, image, affiliateLink) {
    let existing = cart.find(item => item.name === name);
    if(existing) {
        if(existing.qty < 3) existing.qty += 1;
    } else {
        cart.push({ id: id, name: name, price: price, image: image, affiliateLink: affiliateLink, qty: 1 });
    }
    localStorage.setItem('shree_cart', JSON.stringify(cart));
    updateCartUI();
    showCozyToast(name, image);
}

function buyNowItem(id, name, price, image, affiliateLink) {
    addToCartItem(id, name, price, image, affiliateLink);
    toggleCartDrawer();
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if(cart[index].qty > 3) cart[index].qty = 3;
    if(cart[index].qty < 1) cart[index].qty = 1;
    localStorage.setItem('shree_cart', JSON.stringify(cart));
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('shree_cart', JSON.stringify(cart));
    updateCartUI();
}

function openProductFromCart(name) {
    toggleCartDrawer();
    let foundCloset = resellingProducts.findIndex(p => p.name === name);
    if(foundCloset !== -1) {
        openProductDetail('closet', foundCloset);
    }
}

function updateCartUI() {
    const badge = document.getElementById('cart-count');
    let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.innerText = totalQty;

    const container = document.getElementById('cart-items-container');
    const footerSec = document.getElementById('cart-footer-section');

    if(cart.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-light); margin-top: 40px;">Your cart is empty!</p>`;
        footerSec.style.display = 'none';
        return;
    }

    footerSec.style.display = 'flex';
    let html = '';
    let total = 0;

    cart.forEach((item, index) => {
        let numericPrice = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
        total += numericPrice * item.qty;
        let escapedName = item.name.replace(/'/g, "\\'");
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" onclick="openProductFromCart('${escapedName}')">
                <div class="cart-item-details">
                    <h4 onclick="openProductFromCart('${escapedName}')">${item.name}</h4>
                    <p style="font-size:11px; color:var(--primary-green); font-weight:700;">ID: ${item.id}</p>
                    <p>${item.price}</p>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </div>
                <i class="fa-solid fa-trash remove-item" onclick="removeFromCart(${index})"></i>
            </div>
        `;
    });

    container.innerHTML = html;
    document.getElementById('cart-total-price').innerText = '₹' + total;
}

function toggleCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    drawer.classList.toggle('open');
}

function openCheckoutPage() {
    toggleCartDrawer();
    switchPage('checkout-page', null);
}

// ==========================================
// CONTACT EMAILJS - ONLY FOR CONTACT FORM
// ==========================================

const CONTACT_PUBLIC_KEY = "DNRJlokDKp5mriXcz";
const CONTACT_SERVICE_ID = "service_shreestore";
const CONTACT_TEMPLATE_ID = "template_c77f1ie";

function handleContactForm(e) {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    const btn = document.getElementById("contact-btn");
    const statusEl = document.getElementById("contact-status");

    btn.innerText = "Sending... 🤍";
    btn.disabled = true;
    statusEl.style.display = "none";

    const contactParams = {
        to_email: "pikapipikachuu2009@gmail.com",
        from_name: name,
        from_email: email,
        reply_to: email,
        message: message
    };

    // CONTACT ACCOUNT
    emailjs.init("DNRJlokDKp5mriXcz");

    emailjs.send(
        "service_shreestore",
        "template_c77f1ie",
        contactParams
    )
    .then(function(response) {

        console.log("CONTACT EMAIL SENT:", response);

        // IMPORTANT:
        // Checkout account ko wapas restore karo
        emailjs.init("rtEfinvD0NNpYxlO2");

        document.getElementById("contact-form").reset();

        btn.innerText = "Send Message 🤍";
        btn.disabled = false;

        statusEl.innerText =
            "Thank you! Your message has been sent to Shree 🤍";

        statusEl.style.color = "";
        statusEl.style.display = "block";

        setTimeout(function () {
            statusEl.style.display = "none";
        }, 6000);

    })
    .catch(function(error) {

        // Checkout account restore
        emailjs.init("rtEfinvD0NNpYxlO2");

        console.error("CONTACT EMAIL ERROR:", error);
        console.error("STATUS:", error.status);
        console.error("TEXT:", error.text);

        btn.innerText = "Send Message 🤍";
        btn.disabled = false;

        statusEl.innerText =
            "Error: " + (error.text || "Unable to send message");

        statusEl.style.color = "#E58A8A";
        statusEl.style.display = "block";
    });
}
function handlePlaceOrder(e) {
    e.preventDefault();
    const name = document.getElementById('chk-name').value;
    const email = document.getElementById('chk-email').value;
    const phone = document.getElementById('chk-phone').value;
    const address = document.getElementById('chk-address').value;
    const pincode = document.getElementById('chk-pincode').value;

    let total = 0;
    cart.forEach(item => {
        let num = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
        total += num * item.qty;
    });

    const orderId = '#SHREE' + Math.floor(1000 + Math.random() * 9000);
    const paymentMethodText = 'Cash on Delivery (COD)';

    executeOrderFinalization({ name, email, phone, address, pincode, paymentMethod: paymentMethodText, total, orderId });
}

function executeOrderFinalization(data) {
    const orderDate = new Date().toLocaleString();
    let itemsDetails = cart.map(i => `• [${i.id}] ${i.name} (Qty: ${i.qty}) - Price: ${i.price}`).join('\n');
    let plainItemsDetails = cart.map(i => `• [${i.id}] ${i.name} (Qty: ${i.qty}) - Price: ${i.price}`).join('\n');

    let templateParams = {
        to_email: 'pikapipikachuu2009@gmail.com',
        customer_name: data.name,
        customer_email: data.email,
        customer_phone: data.phone,
        customer_address: data.address,
        customer_pincode: data.pincode,
        payment_method: data.paymentMethod,
        total_amount: '₹' + data.total,
        amount: '₹' + data.total,
        order_id: data.orderId,
        order_date: orderDate,
        order_items: itemsDetails,
        items: itemsDetails
    };

    emailjs.send('service_shreestore', 'template_o99gixn', templateParams)
        .then(function(res) {
            console.log('Admin email sent successfully!', res.status, res.text);
        }, function(err) {
            console.error('Failed to send admin email:', err.text || JSON.stringify(err));
        });

    let customerParams = {
        to_email: data.email,
        customer_name: data.name,
        customer_email: data.email,
        customer_phone: data.phone,
        customer_address: data.address,
        customer_pincode: data.pincode,
        payment_method: data.paymentMethod,
        total_amount: '₹' + data.total,
        amount: '₹' + data.total,
        order_id: data.orderId,
        order_date: orderDate,
        order_items: plainItemsDetails,
        items: plainItemsDetails
    };

    emailjs.send('service_shreestore', 'template_xgf26mm', customerParams)
        .then(function(res) {
            console.log('Customer email sent successfully!', res.status, res.text);
        }, function(err) {
            console.error('Failed to send customer email:', err.text || JSON.stringify(err));
        });

    let successHtml = `Thank you <b>${data.name}</b>! Your order <b>${data.orderId}</b> has been placed successfully.<br>Payment: <b>${data.paymentMethod}</b><br>Total Cost: <b>₹${data.total}</b><br>Delivery Pincode: <b>${data.pincode}</b>.`;
    document.getElementById('success-message').innerHTML = successHtml;
    
    cart = [];
    localStorage.removeItem('shree_cart');
    updateCartUI();
    switchPage('success-page', null);
}

updateCartUI();

// Lightbox
let currentCatalogType = 'finds';
let currentLightboxProduct = -1;
let currentLightboxImageIdx = 0;

function openLightbox(type, productIndex, imgIndex) {
    currentCatalogType = type;
    currentLightboxProduct = productIndex;
    currentLightboxImageIdx = imgIndex !== undefined ? imgIndex : 0;
    document.body.style.overflow = 'hidden';
    updateLightboxView();
    document.getElementById('image-lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.body.style.overflow = '';
    document.getElementById('image-lightbox').style.display = 'none';
}

function getLightboxImages() {
    if (currentCatalogType === 'finds') {
        return affiliateProducts[currentLightboxProduct].images;
    } else {
        let p = resellingProducts[currentLightboxProduct];
        if (p && p.colors) {
            let colObj = p.colors[selectedVariantColorIdx];
            return colObj.images || [colObj.image];
        }
        return p ? p.images : [];
    }
}

function changeLightboxImage(direction) {
    let imagesArray = getLightboxImages();
    if (!imagesArray || imagesArray.length === 0) return;
    currentLightboxImageIdx += direction;
    if(currentLightboxImageIdx < 0) {
        currentLightboxImageIdx = imagesArray.length - 1;
    } else if(currentLightboxImageIdx >= imagesArray.length) {
        currentLightboxImageIdx = 0;
    }
    updateLightboxView();
}

function updateLightboxView() {
    let imagesArray = getLightboxImages();
    if (imagesArray && imagesArray[currentLightboxImageIdx]) {
        document.getElementById('lightbox-main-img').src = imagesArray[currentLightboxImageIdx];
    }
}

document.getElementById('image-lightbox').addEventListener('click', function(e) {
    if(e.target === this) {
        closeLightbox();
    }
});
// ==========================================
// AUTO-OPEN PRODUCT FROM URL QUERY PARAM (?id=...)
// Supports: Home, Finds, Closet
// Example: ?id=SHREE-P03
// ==========================================

function checkAndOpenProductFromURL() {
    const productId = new URLSearchParams(window.location.search).get('id');

    if (!productId) return;

    let index = resellingProducts.findIndex(p => p.id === productId);

    if (index !== -1) {
        setTimeout(() => {
            openProductDetail('closet', index);
        }, 500);
        return;
    }

    index = affiliateProducts.findIndex(p => p.id === productId);

    if (index !== -1) {
        setTimeout(() => {
            openProductDetail('finds', index);
        }, 500);
        return;
    }

    index = homeFeaturedProducts.findIndex(p => p.id === productId);

    if (index !== -1) {
        setTimeout(() => {
            openProductDetail('home', index);
        }, 500);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndOpenProductFromURL);
} else {
    checkAndOpenProductFromURL();
}