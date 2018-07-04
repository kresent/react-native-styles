# react-native-styles
Macro to create React Native style from css

Usage:

    import { StyleSheet } from 'react-native'
    import css from 'cssRn'

    const styles = StyleSheet.create(
      css`
        .container {
          flex: 1;
          justify-content: center;
          align-items: center;
          ...
        }
      `,
    )
