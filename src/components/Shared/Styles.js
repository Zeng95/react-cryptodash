const theme = 'dark'
// const theme = 'light'
export const lightTheme = theme === 'light'

export const color = lightTheme ? 'white' : '#061a44'
export const color2 = lightTheme ? 'white' : '#010e2c'
export const color3 = lightTheme ? '#09f010' : '#42ff3a'
export const color4 = lightTheme ? '#061a44' : 'white'

export const themes = {
  dark: {
    color: '#061a44',
    color2: '#010e2c',
    color3: '#42ff3a',
    color4: 'white',

    backgroundColor: 'background-color: #010e2c;',
    lightBlueBackground: 'background-color: #061a44;',
    darkBlueBackground: 'background-color: #010e2c;',
    greenBackground: 'background-color: #42ff3a;',

    subtleBoxShadow: 'box-shadow: 0px 0px 5px 1px #121d5b;'
  },
  light: {
    color: 'white',
    color2: 'white',
    color3: '#09f010',
    color4: '#061a44',

    backgroundColor: 'background-color: #e1eaee;',
    lightBlueBackground: 'background-color: white;',
    darkBlueBackground: 'background-color: white;',
    greenBackground: 'background-color: #09f010;',

    subtleBoxShadow: 'box-shadow: 0px 0px 5px 1px #a9b6ff;'
  }
}

export const lightBlueBackground = `background-color: ${color};`
export const darkBlueBackground = `background-color: ${color2};`
export const greenBackground = `background-color: ${color3};`

export const fontColorGreen = `color: #03A9F4;`
export const fontColorWhite = `color: white;`

export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${
  lightTheme ? '#a9b6ff' : '#121d5b'
};`
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #5fff17;`
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111;`

export const fontSizeBig = 'font-size: 2em;'
export const fontSize1 = 'font-size: 1.5em;'
export const fontSize2 = 'font-size: 1.0em;'
export const fontSize3 = 'font-size: .75em;'

export const textAlignLeft = 'text-align: left;'
export const textAlignCenter = 'text-align: center;'
