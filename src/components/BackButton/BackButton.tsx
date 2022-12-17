import { FC } from "react"
import type { HeaderBackButtonProps } from '@react-navigation/elements'
import { TouchableOpacity, View } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import styles from './styles'
import TextBase from "shared/TextBase"
import { useNavigation } from "@react-navigation/native"

const BackButton: FC<HeaderBackButtonProps> = (props) => {
    const {canGoBack} = props
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }

    return canGoBack ? (
        <TouchableOpacity onPress={goBack} style={styles.root}>
            <FontAwesomeIcon icon={faChevronLeft} style={styles.icon} />
            <TextBase>Back</TextBase>
        </TouchableOpacity>
    ) : <View />
}

export default BackButton