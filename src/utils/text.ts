// https://stackoverflow.com/a/1026087
export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function validateEmail(email: string|null|undefined): boolean {
  if (!email) return false

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const valid = String(email).toLowerCase().match(re)

  if (valid) return true
  return false
}

export function beautifyDate(input: string|Date, format: "full"|'long'|'medium'|'short' = "full") {
  const date = new Date(input)
  const dateFormat = new Intl.DateTimeFormat("en-us", { dateStyle: format})
  return dateFormat.format(date)
}