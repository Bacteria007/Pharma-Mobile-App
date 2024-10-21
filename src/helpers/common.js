import { Dimensions } from 'react-native'
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

export const wp = (percent) => {
    return (percent * deviceWidth) / 100
}
export const hp = (percent) => {
    return (percent * deviceHeight) / 100
}
export const getColmnCount = (percent) => {
    if (deviceWidth >= 1024) {
        return 4
    } else if (deviceWidth >= 500) {
        return 3
    } else {
        return 2
    }
}