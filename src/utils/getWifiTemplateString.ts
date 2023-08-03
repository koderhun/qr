type wifiProps = {
  ssid: string
  pass?: string
  crypt?: string
  hidden?: string
}

export const wifiTemplateString = ({ssid, pass = '', crypt = '', hidden = ''}: wifiProps) => {
  return `WIFI:S:${ssid};T:${crypt};P:${pass};${hidden};`
}
