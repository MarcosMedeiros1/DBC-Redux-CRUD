import moment from "moment"

export const dateMask = [
  /[0-9]/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

export const cpfMask = [
  /[0-9]/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/
];

export const cepMask = [
  /[0-9]/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/
];

export const telefoneMask = [
  "(",
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

export function OnlyNumbers(value) {
  return value.replace(/[^0-9]/gi, '')
}

export function FormatDateBrToUsa(value) {
  return moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD')
}

export function FormatDateUsaToBr(value) {
  return moment(value, 'YYYY-MM-DD').format('DD/MM/YYYY')
}

export const primaryColor = "#3751FF";
export const secondaryColor = "#fff";
export const backgroundDark = "#363740";
export const backgroundLight = "#F7F8FC";
export const textLight = "#9FA2B4";