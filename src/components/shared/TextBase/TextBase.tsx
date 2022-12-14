import type { ColorTypes, TextTypes, TextSizes } from 'ts/general'
import { FC } from 'react'
import { Text, TextProps, TextStyle } from 'react-native'
import styles from './styles'

interface ITextBaseProps extends Omit<TextProps, "style"> {
    color?: ColorTypes,
    type?: TextTypes,
    size?: TextSizes,
    bold?: boolean,
    style?: Omit<TextStyle, "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight">
}

function getColorStyle(color: ColorTypes) {
    return styles[`${color}ColorText`]
}
function getTypeStyle(type: TextTypes, bold: boolean) {
    return styles[`${type}${bold ? 'Bold' : ''}`] || styles[`${type}`]
}
function getSizeStyle(size: TextSizes) {
    return styles[`${size}Text`]
}

const TextBase: FC<ITextBaseProps> = (props) => {
    const { color = 'primary', type = 'regular', bold = false, size = 'normal', style = {}, ...rest } = props

    return <Text style={[
        getColorStyle(color),
        getTypeStyle(type, bold),
        getSizeStyle(size),
        style
    ]} {...rest} />
}

export default TextBase
