import React from 'react';
import {
  Dimensions, StyleSheet, ScrollView, Alert, Platform, TouchableOpacity, Linking
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// galio components
import {
  Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';
import theme from '../theme';
import * as SMS from 'expo-sms';
import openMap from 'react-native-open-maps';

const { width } = Dimensions.get('screen');

export default class Components extends React.Component {

  sendSmsToMess = async () => {
    if (await SMS.isAvailableAsync()) {
      var numbers = ['8883221083', '8148406208'];
      var message = 'My sample message'
      const { result } = await SMS.sendSMSAsync(numbers, message);
      if (result === 'sent') {
        alert("Message sent successfully!");
      } else {
        alert("Message opened successfully");
      }
    } else {
      alert("error while sending message");
    }
  }

  getMessLocation = () => {
    openMap({ latitude:10.965769, longitude:78.074569, zoom:25 });
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          title="Contact Mess"
          right={(
            <Button
              onlyIcon
              icon="heart"
              iconFamily="font-awesome"
              iconSize={theme.SIZES.BASE}
              iconColor={theme.COLORS.ICON}
              color="transparent"
              onPress={() => Linking.openURL('https://galio.io')}
            />
          )}
          left={(
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          )}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />

        <ScrollView style={{ flex: 1, paddingTop: (theme.SIZES.BASE * 11) }} showsVerticalScrollIndicator={false}>
          <Block style={styles.container}>
            <Block flex style={{ marginBottom: theme.SIZES.BASE }}>
              <Block flex center style={{ padding: theme.SIZES.BASE }}>
                <Button style={styles.button} color="success" round onPress={() => this.sendSmsToMess()}>
                  Send SMS to Mess
                </Button>
                <Button color="info" style={styles.button} round onPress={() => this.getMessLocation()}>
                  Open Mess Location
                </Button>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
  },
  button: {
    marginBottom: 20,
  },
  cards: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    borderWidth: 0,
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
  },
  cardFooter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: theme.SIZES.BASE / 2,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE / 2,
    backgroundColor: theme.COLORS.TRANSPARENT,
  },
  cardNoRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardAvatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  cardTitle: {
    justifyContent: 'center',
    paddingLeft: theme.SIZES.BASE / 2,
  },
  cardImageContainer: {
    borderWidth: 0,
    overflow: 'hidden',
  },
  cardImageRadius: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  cardImage: {
    width: 'auto',
    height: theme.SIZES.BASE * 12.5,
  },
  cardRounded: {
    borderRadius: theme.SIZES.BASE * 0.5,
  },
  cardFull: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  cardGradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});
