import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from 'react-native-vector-icons';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'fontAwesome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    
  }

  render() {
    const { name, style, color, onPress } = this.props;

    let bgColor = '#00ccff';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#00ccff';
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'fontAwesome',
    fontSize: 32,
    lineHeight: 32,
    color: '#FFF',
  },
});

export default CircleButton;
