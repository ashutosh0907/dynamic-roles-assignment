import {StyleSheet} from 'react-native';
import {BRAND, WHITE} from '../../constants/color';
import {BOLD, MEDIUM} from '../../constants/fontfamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {HEIGHT, WIDTH} from '../../constants/config';
export const customButtonStyles = StyleSheet.create({
  buttonview: {
    height: HEIGHT * 0.06,
    borderRadius: 4,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: HEIGHT * 0.01,
  },
  text: {
    fontFamily: BOLD,
    fontSize: RFValue(15),
  },
  iconview: {
    width: WIDTH * 0.1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconimage: {
    height: '50%',
    width: '90%',
  },
});
