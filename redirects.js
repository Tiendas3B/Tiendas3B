// redirects.js
const redirects = {
  // Links de Tiendas (club de vecinos)
  "/3001": "https://chat.whatsapp.com/BpNMdzXbAAN7Rixfh47SY5?s=cl&p=a&iam=2", // ESCUADRON VELASCO
  "/3002": "https://chat.whatsapp.com/FNwlCxR77KcHdzJEHAefp3?s=cl&p=a&iam=2", // SANTOS DUMONT 3/4
  "/3003": "https://chat.whatsapp.com/LZw0rJqHX0070DsZoMqvpO?s=cl&p=a&iam=2", // SUAREZ ARANA
  "/3004": "https://chat.whatsapp.com/II7bQ5lAJdn5r7TchW79S3?s=cl&p=a&iam=2", // PIRAI 4
  "/3005": "https://chat.whatsapp.com/JYRIB0sVBaiKJd12fwqGp5?s=cl&p=a&iam=2", // SANTA ROSA NORTE (2 HERMANAS)
  "/3006": "https://chat.whatsapp.com/E3rGoVdaUdz1bWLRCWjqA3?s=cl&p=a&iam=2", // BANZER 7
  "/3007": "https://chat.whatsapp.com/F4JZQSYRKPcCNU99yuH3hv?s=cl&p=a&iam=2", // ALEMANA 5
  "/3008": "https://chat.whatsapp.com/J0ZWSHfmWKbLtNPCrIG258?s=cl&p=a&iam=2", // AV INTERNACIONAL
  "/3009": "https://chat.whatsapp.com/LCnhvCfEvSDEtm7dVRvyrk?s=cl&p=a&iam=2", // 10MO ANILLO CANAL PEDRO VELEZ
  "/3010": "https://chat.whatsapp.com/H9FzXeMaZkgH7OUkK3XMo7?s=cl&p=a&iam=2", // RADIAL 26 4/5
  "/3011": "https://chat.whatsapp.com/Ju2LD1onSY2EfKt2tXZTHF?s=cl&p=a&iam=2", // DOBLE VIA KM 10
  "/3013": "https://chat.whatsapp.com/FZqiRjA7UBI2WHvzDWfkLP?s=cl&p=a&iam=2", // PASEO CENTRAL
  "/3014": "https://chat.whatsapp.com/DJG7kGY66tYH2ifHcRtTyD?s=cl&p=a&iam=2", // POLANCO
  "/3015": "https://chat.whatsapp.com/JVp6pCtUMRjKFmyiZbX8kj?s=cl&p=a&iam=2", // CHE GUEVARA
  "/3016": "https://chat.whatsapp.com/Kxq5DLoTlz9Emd7vJ8Re99?s=cl&p=a&iam=2", // EL DORADO
  "/3017": "https://chat.whatsapp.com/ItlAzAMJict0P7fLSeysq2?s=cl&p=a&iam=2", // PRIMAVERA
  "/3018": "https://chat.whatsapp.com/CAkQh7KBSkRISL0fwnwDNt?s=cl&p=a&iam=2", // CUMAVI
  "/3019": "https://chat.whatsapp.com/ERWwwHV7fG2LquPPDbtkTM?s=cl&p=a&iam=2", // AV. BOLIVIA
  "/3020": "https://chat.whatsapp.com/GGFk3BBTpiKDLiqtIIkFSm?s=cl&p=a&iam=2", // SANTOS DUMONT 6
  "/3021": "https://chat.whatsapp.com/CM0JBe4bnyJ7IsjMyduZl9?s=sh&p=a&iam=2", // MONTERO I
  "/3022": "https://chat.whatsapp.com/DKuHLXLfQaIFODCqwQAc3x?s=cl&p=a&iam=2", // SATELITE NORTE (la lista nueva repetía el enlace de 3021; se mantiene el grupo anterior)
  "/3023": "https://chat.whatsapp.com/DOyDnmFh9Dr2BeQTiW0UAG?s=cl&p=a&iam=2", // URB ESPAÑA
  "/3024": "https://chat.whatsapp.com/IOoH5pjFwwa1GTi1Y08EVh?s=cl&p=a&iam=2", // EL TORNO I
  "/3025": "https://chat.whatsapp.com/DKInDR9RjxJ51wF37aKvzG?s=cl&p=a&iam=2", // TOMAS DE LEZO
  "/3026": "https://chat.whatsapp.com/GhGBwUrI6Ip9MOgmcR1wie?s=cl&p=a&iam=2", // JUAN PABLO II
  "/3027": "https://chat.whatsapp.com/DGKJNlt1lok4t2o05ihlDu?s=cl&p=a&iam=2", // LOS POCITOS PLAN 3000
  "/3028": "https://chat.whatsapp.com/GQ8x2zumY5y3RoGHQiOl98?s=cl&p=a&iam=2", // VILLA 1ERO DE MAYO BARRIO SUCRE
  "/3029": "https://chat.whatsapp.com/Fp48fyLacNqHLeX0y0QUYF?s=cl&p=a&iam=2", // EL MECHERO PLAN 3000
  "/3030": "https://chat.whatsapp.com/JocLRdlxFUmAZQfE1EwxZi?s=cl&p=a&iam=2", // LA CAMPANA
  "/3031": "https://chat.whatsapp.com/HbHl3vQrzUh0xiWV1TCsX7?s=cl&p=a&iam=2", // AV. BOLIVIA II
  "/3032": "https://chat.whatsapp.com/EAG6W4jmBNJJksC2GkftDw?s=cl&p=a&iam=2", // UCEBOL
  "/3033": "https://chat.whatsapp.com/L5586d9XptJAlFzzWDgCvj?s=cl&p=a&iam=2", // AV. MOSCU I
  "/3034": "https://chat.whatsapp.com/Ly4w2zgWNqp2jgQJnjyyvq?s=cl&p=a&iam=2", // AV. MUTUALISTA 3/4
  "/3035": "https://chat.whatsapp.com/DnITuWHZLB0ByOksTmKkmt?s=cl&p=a&iam=2", // COTOCA
  "/3036": "https://chat.whatsapp.com/IZCvwOKyWpb4jOYNpyaxTV?s=cl&p=a&iam=2", // CENTENARIO
  "/3037": "https://chat.whatsapp.com/DP3wIgUAI7S2uJ7kbn4vgx?s=cl&p=a&iam=2", // GUAPURU
  "/3038": "https://chat.whatsapp.com/H8Kn7QNWHNSKyvgAPBtzGd?s=cl&p=a&iam=2", // RADIAL 13 3/4
  "/3039": "https://chat.whatsapp.com/HZptfz11nQNAXxzS6KZUpU?s=cl&p=a&iam=2", // YAPACANI
  "/3040": "https://chat.whatsapp.com/HX8mLfrkDq6Be6imhSYr04?s=cl&p=a&iam=2", // RADIAL 10 4/5
  "/3041": "https://chat.whatsapp.com/DM9dP87pU3uI1d4G0i56G7?s=cl&p=a&iam=2", // PARAGUA
  "/3042": "https://chat.whatsapp.com/EyYCE1RtoRz4DeHTw6GI2t?s=cl&p=a&iam=2", // AV LUJAN 6
  "/3043": "https://chat.whatsapp.com/CJuphKVsJk76aHkWvOweDH?s=cl&p=a&iam=2", // DOBLE VIA LA GUARDIA KM 6
  "/3044": "https://chat.whatsapp.com/C8lx8pxi0lF7jAqY9oiTRy?s=sh&p=a&iam=2", // LOS LOTES PARADA 15
  "/3045": "https://chat.whatsapp.com/GcUnyfccPZh9E1QUyJVIKZ?s=cl&p=a&iam=2", // 8VO ANILLO REMANSO
  "/3046": "https://chat.whatsapp.com/J3rgg9GzDbK109HnF2hAjt?s=cl&p=a&iam=2", // 3 PASOS AL FRENTE 5/4
  "/3047": "https://chat.whatsapp.com/ByZGXQBKaO5DfVNUpszAWB?s=cl&p=a&iam=2", // WARNES
  "/3048": "https://chat.whatsapp.com/KCXcByrk18D10Bxdm8V5xr?s=cl&p=a&iam=2", // MERCADO SANTA CRUZ SUR
  "/3049": "https://chat.whatsapp.com/ELnAZgRoDSQKXvX4jq37TV?s=cl&p=a&iam=2", // MERCADO LAS AMERICAS
  "/3050": "https://chat.whatsapp.com/Em0kAWMgfk0EqTS3NyjPEP?s=cl&p=a&iam=2", // MERCADO PRIMAVERA
  "/3051": "https://chat.whatsapp.com/DSAManQI1EJDvdCqbJV8Uh?s=cl&p=a&iam=2", // 2 DE AGOSTO 6
  "/3052": "https://chat.whatsapp.com/EfVFZ8ANojhH63m0d1OVek?s=cl&p=a&iam=2", // AV BARRANCA
  "/3053": "https://chat.whatsapp.com/Jqz6leWyqdmBJ6tpTSqLwb?s=cl&p=a&iam=2", // AV PIRAI 2/3
  "/3054": "https://chat.whatsapp.com/K9j0Ol8WXvB2Sy0s8nOUC4?s=cl&p=a&iam=2", // AV ALEMANA 6
  "/3055": "https://chat.whatsapp.com/HLuf5Ja6VDr7cfVqEc1Ywv?s=cl&p=a&iam=2", // URB VALLE SANCHEZ
  "/3056": "https://chat.whatsapp.com/IQgbk6AMsdnEiJ0c50PHZr?s=cl&p=a&iam=2", // MONTECRISTO
  "/3057": "https://chat.whatsapp.com/IBoL3spjUswEH1jHvFn8e7?s=cl&p=a&iam=2", // LA GUARDIA
  "/3058": "https://chat.whatsapp.com/JsdgALbIyj054kiBRSx3Zx?s=cl&p=a&iam=2", // BOSQUES DE LA COLINA
  "/3059": "https://chat.whatsapp.com/EHVyj1bwTu1E2LzohXWCoB?s=cl&p=a&iam=2", // LOS CHACOS
  "/3060": "https://chat.whatsapp.com/C7MkERTLtwTBZ4ZAWmJP8s?s=cl&p=a&iam=2", // ALEMANA 3/4
  "/3061": "https://chat.whatsapp.com/J4NWAai8TSr9AA5RzCTvH8?s=cl&p=a&iam=2", // AV VIRGEN DE LUJAN
  "/3062": "https://chat.whatsapp.com/BjBaC9N1H676AhVWwabnQn?s=cl&p=a&iam=2", // RETOÑO
  "/3063": "https://chat.whatsapp.com/KiZieJlMf071KK0eYV7X91?s=cl&p=a&iam=2", // URUBO SANTA CRUZ DE LA COLINA (3063-1)
  "/3064": "https://chat.whatsapp.com/HCQwg3SWnUjFsC6QlSrzN7?s=cl&p=a&iam=2", // MERCADO BELEN
  "/3065": "https://chat.whatsapp.com/KvGIWXwy2wR1cDnYTv2O5P?s=cl&p=a&iam=2", // AV BENI 3/4
  "/3066": "https://chat.whatsapp.com/CdAegnFFMgI6ty2wmSR0WX?s=cl&p=a&iam=2", // AV VIRGEN DE COTOCA
  "/3067": "https://chat.whatsapp.com/GiYNBIoihYCFDkWrwk8VKL?s=cl&p=a&iam=2", // AV RADIAL 17 1/2
  "/3068": "https://chat.whatsapp.com/IJ3AFeZvroH9TRIjxyxLV8?s=cl&p=a&iam=2", // MERCADO NUEVO PLAN 3000
  "/3069": "https://chat.whatsapp.com/EPVcu0hxPq9FduQu3DfUWh?s=cl&p=a&iam=2", // AV 16 DE JULIO
  "/3070": "https://chat.whatsapp.com/LhO5AeaZeSH1gvL5L4oGBO?s=cl&p=a&iam=2", // REFINERIA
  "/3071": "https://chat.whatsapp.com/FdQwryd0jfEEVdtQTNeIt9?s=cl&p=a&iam=2", // VILLA 1ERO DE MAYO
  "/3072": "https://chat.whatsapp.com/H1jDRfygy3vL0imrcvIVZS?s=cl&p=a&iam=2", // 4 CAÑADAS
  "/3073": "https://chat.whatsapp.com/LuL6PNEzADCBSYT9VSh1f7?s=cl&p=a&iam=2", // 7 DE ABRIL
  "/3074": "https://chat.whatsapp.com/HsPD6MlomHwJ6YKUKMjJt6?s=cl&p=a&iam=2", // SAN IGNACIO
  "/3075": "https://chat.whatsapp.com/BYRs3tLVicIGSNphI2O8vb?s=cl&p=a&iam=2", // EL FUERTE
  "/3076": "https://chat.whatsapp.com/Hgx3NdeyDTFCXlEZnfa02z?s=cl&p=a&iam=2", // MERCADO EL RECREO
  "/3077": "https://chat.whatsapp.com/HIZyKv5wIlnCqfMEiM1RT5?s=cl&p=a&iam=2", // MONTERO II
  "/3078": "https://chat.whatsapp.com/DOL8HR8BdfRHeYxMV0TtrX?s=cl&p=a&iam=2", // PAMPITAS
  "/3079": "https://chat.whatsapp.com/GjdElOs59SQFVWP94a3kY2?s=cl&p=i&iam=2", // GALLITOS
  "/3080": "https://chat.whatsapp.com/Cj3gLmYss8HBsFSslnpNNp?s=cl&p=a&iam=2", // 4 DE NOVIEMBRE
  "/3081": "", // PLAN 4000 (sin enlace)
  "/3082": "https://chat.whatsapp.com/Idpkphu07W00199LXHPuSz?s=cl&p=a&iam=2", // CONCEPCION
  "/3083": "https://chat.whatsapp.com/Lw7l9p3acFD83vaBgczD2Q?s=cl&p=a&iam=2", // EL CARMEN
  "/3084": "",
  "/3085": "https://chat.whatsapp.com/ETADt2bnU25EooZT54OhXS?s=cl&p=a&iam=2", // LOS CUSIS
  "/3086": "",
  "/3087": "https://chat.whatsapp.com/Efa3E6TBsi76uWx20Ur3Nn?s=cl&p=a&iam=2", // LOS OLIVOS

  // Links Adicionales
  "/chivarumbera01": "https://chat.whatsapp.com/BDFXSiHKkGMIf3M0hToC5s?s=cl&p=a&iam=2",
  "/direcciontourahorro": "https://3b.com.bo/tiendas/",
  "/whatsappclubvecinos": "https://chat.whatsapp.com/BBrvx8bFhArFoW9ZRn83Y9?s=sh&p=a&mlu=4&ilr=4",
  "/whatsappfexpo": "https://chat.whatsapp.com/DdlQYFMyJ95CIDrxTuLRLu?s=sh&p=a&mlu=4&ilr=4",
  "/tiendas3b": "https://www.tiendas3b.com.bo",
  "/pauta": "https://chat.whatsapp.com/KNDD6hzHy840RXQb411wl4",
  "/masivo": "https://chat.whatsapp.com/IrBIyYo5hfp0xRwrbVuLlK",
  "/marketing": "https://chat.whatsapp.com/HWADco87ExtJCLQb0lcSLX?s=sh&p=a&mlu=4&ilr=4"
};
