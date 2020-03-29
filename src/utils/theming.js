import variables from "../assets/styles/variables.scss"
import imgAsiatica from "../assets/images/asiaticab.png"
import imgCafe from "../assets/images/cafe.png"
import imgCarnes from "../assets/images/carnes.png"
import imgDrinks from "../assets/images/drinks.png"
import imgFrutosDoMar from "../assets/images/frutos-do-mar.png"
import imgIngredientes from "../assets/images/ingredientes.png"
import imgItaliana from "../assets/images/italiana.png"
import imgLanches from "../assets/images/lanches.png"
import imgMexicana from "../assets/images/mexicana.png"
import imgPizza from "../assets/images/pizza.png"
import imgSaudavel from "../assets/images/saudavel.png"
import imgDoces from "../assets/images/doces.png"
import imgSorvetes from "../assets/images/sorvetes.png"
import imgTipica from "../assets/images/tipica.png"
import imgTodas from "../assets/images/todas.png"
import imgVegetariana from "../assets/images/vegetariana.png"

const themeColors = {
  mediumVermillion: {
    primary: variables.colorMediumVermilion,
    secondary: variables.colorKombuGreen,
    tertiary: variables.colorUnbleachedSilk,
  },
  kombuGreen: {
    primary: variables.colorKombuGreen,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorUnbleachedSilk,
  },
  flax: {
    primary: variables.colorFlax,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorKombuGreen,
  },
  palePink: {
    primary: variables.colorPalePink,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorkenyanCooper,
  },
  kenyanCopper: {
    primary: variables.colorkenyanCooper,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorUnbleachedSilk,
  },
  blond: {
    primary: variables.colorBlond,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorKombuGreen,
  },
  peach: {
    primary: variables.colorPeach,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorKombuGreen,
  },
}

/* eslint-disable no-useless-computed-key */
export const themes = {
  ["Italiana"]: {
    ...themeColors.blond,
    img: imgItaliana,
  },
  ["Frutos do Mar"]: {
    ...themeColors.mediumVermillion,
    img: imgFrutosDoMar,
  },
  ["Saudável"]: {
    ...themeColors.peach,
    img: imgSaudavel,
  },
  ["Asiática"]: {
    ...themeColors.peach,
    img: imgAsiatica,
  },
  ["Ingredientes"]: {
    ...themeColors.palePink,
    img: imgIngredientes,
  },
  ["Distribuidora"]: {
    ...themeColors.palePink,
    img: imgIngredientes,
  },
  ["Vegetariana"]: {
    ...themeColors.peach,
    img: imgVegetariana,
  },
  ["Vegana"]: {
    ...themeColors.peach,
    img: imgVegetariana,
  },
  ["Doces"]: {
    ...themeColors.kenyanCopper,
    img: imgDoces,
  },
  ["Carnes"]: {
    ...themeColors.blond,
    img: imgCarnes,
  },
  ["Pizza"]: {
    ...themeColors.peach,
    img: imgPizza,
  },
  ["Drinks"]: {
    ...themeColors.palePink,
    img: imgDrinks,
  },
  ["Bebidas"]: {
    ...themeColors.palePink,
    img: imgDrinks,
  },
  ["Bar"]: {
    ...themeColors.palePink,
    img: imgDrinks,
  },
  ["Brasileira"]: {
    ...themeColors.mediumVermillion,
    img: imgTipica,
  },
  ["Árabe"]: {
    ...themeColors.mediumVermillion,
    img: imgTipica,
  },
  ["Espanhola"]: {
    ...themeColors.mediumVermillion,
    img: imgTipica,
  },
  ["Judaíca"]: {
    ...themeColors.mediumVermillion,
    img: imgTipica,
  },
  ["Variada"]: {
    ...themeColors.mediumVermillion,
    img: imgTipica,
  },
  ["Autoral"]: {
    ...themeColors.mediumVermillion,
    img: imgTipica,
  },
  ["Mexicana"]: {
    ...themeColors.kenyanCopper,
    img: imgMexicana,
  },
  ["Todas"]: {
    ...themeColors.kombuGreen,
    img: imgTodas,
  },
  ["Burgers"]: {
    ...themeColors.mediumVermillion,
    img: imgLanches,
  },
  ["Lanches"]: {
    ...themeColors.blond,
    img: imgLanches,
  },
  ["Padaria"]: {
    ...themeColors.kenyanCopper,
    img: imgCafe,
  },
  ["Sanduíches"]: {
    ...themeColors.blond,
    img: imgLanches,
  },
  ["Sorvetes"]: {
    ...themeColors.peach,
    img: imgSorvetes,
  },
  ["Café"]: {
    ...themeColors.kenyanCopper,
    img: imgCafe,
  },
  home: {
    ...themeColors.kombuGreen,
  },
  ["faq"]: {
    ...themeColors.flax,
  },
}
/* eslint-disable no-useless-computed-key */
