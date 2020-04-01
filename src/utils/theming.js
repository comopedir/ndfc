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
    tertiary: variables.colorPalePink,
    textOnAccent: variables.colorPalePink,
    textColor: variables.colorPalePink,
  },
  kombuGreen: {
    primary: variables.colorKombuGreen,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorPalePink,
    textOnAccent: variables.colorPalePink,
    textColor: variables.colorPalePink,
  },
  flax: {
    primary: variables.colorFlax,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorKombuGreen,
    textOnAccent: variables.colorFlax,
    textColor: variables.colorKombuGreen,
  },
  palePink: {
    primary: variables.colorPalePink,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorkenyanCooper,
    textOnAccent: variables.colorPalePink,
    textColor: variables.colorkenyanCooper,
  },
  kenyanCopper: {
    primary: variables.colorkenyanCooper,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorPalePink,
    textOnAccent: variables.colorPalePink,
    textColor: variables.colorPalePink,
  },
  blond: {
    primary: variables.colorBlond,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorKombuGreen,
    textOnAccent: variables.colorBlond,
    textColor: variables.colorKombuGreen,
  },
  peach: {
    primary: variables.colorPeach,
    secondary: variables.colorMediumVermilion,
    tertiary: variables.colorKombuGreen,
    textOnAccent: variables.colorPalePink,
    textColor: variables.colorKombuGreen,
  },
  russianViolet: {
    primary: variables.colorRussianViolet,
    secondary: variables.colorPastelRed,
    tertiary: variables.colorPalePink,
    textOnAccent: variables.colorPalePink,
    textColor: variables.colorPalePink,
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
    ...themeColors.kombuGreen,
    img: imgSaudavel,
  },
  ["Asiática"]: {
    ...themeColors.flax,
    img: imgAsiatica,
  },
  ["Ingredientes"]: {
    ...themeColors.peach,
    img: imgIngredientes,
  },
  ["Distribuidora"]: {
    ...themeColors.peach,
    img: imgIngredientes,
  },
  ["Vegetariana"]: {
    ...themeColors.palePink,
    img: imgVegetariana,
  },
  ["Vegana"]: {
    ...themeColors.palePink,
    img: imgVegetariana,
  },
  ["Doces"]: {
    ...themeColors.russianViolet,
    img: imgDoces,
  },
  ["Carnes"]: {
    ...themeColors.blond,
    img: imgCarnes,
  },
  ["Pizza"]: {
    ...themeColors.flax,
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
    ...themeColors.russianViolet,
    img: imgTipica,
  },
  ["Árabe"]: {
    ...themeColors.russianViolet,
    img: imgTipica,
  },
  ["Espanhola"]: {
    ...themeColors.russianViolet,
    img: imgTipica,
  },
  ["Judaíca"]: {
    ...themeColors.russianViolet,
    img: imgTipica,
  },
  ["Variada"]: {
    ...themeColors.russianViolet,
    img: imgTipica,
  },
  ["Autoral"]: {
    ...themeColors.russianViolet,
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
    ...themeColors.blond,
    img: imgLanches,
  },
  ["Lanches"]: {
    ...themeColors.blond,
    img: imgLanches,
  },
  ["Sanduíches"]: {
    ...themeColors.blond,
    img: imgLanches,
  },
  ["Padaria"]: {
    ...themeColors.kenyanCopper,
    img: imgCafe,
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
