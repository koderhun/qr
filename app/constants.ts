export const DEFAULT_TEXT: string = 'Пример текста '

export interface TextData {
  name: string
  pos: {
    x: number
    y: number
  }
  fontSize: number
  color: string
  strokeColor: string
  rotate: number
}

export const DEFAULT_TEXT_DATA: TextData = {
  name: DEFAULT_TEXT,
  pos: {
    x: 170,
    y: -140,
  },
  fontSize: 20,
  color: '#000000',
  strokeColor: '#ffffff',
  rotate: 0,
}
