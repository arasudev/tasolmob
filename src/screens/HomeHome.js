import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Galio components
import {
  Block, NavBar, Icon, Switch, Text, Button
} from 'galio-framework';
import theme from '../theme';
// import Text from "react-native-web/src/exports/Text";
import {Card} from 'react-native-shadow-cards';
import {SectionList} from "react-native-web";


const { width } = Dimensions.get('screen');

const cards = [
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Hisdg',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  }
];

export default class HomeHome extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
        <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
          <NavBar
              title="Tasol"
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
          <Card style={{padding: 10, margin: 10, height: 150}}>
            <Text>@2020-05-28</Text>
            {
              false ? <Button style={{height: 30, width: 70}} round size="small" color="success">ReOrder</Button> :
                  <Button style={{height: 30, width: 70}} round size="small" color="error">Cancel</Button>
            }
            <Button style={{height: 30, width: 70}} round size="small" color="success">ReOrder</Button>
          </Card>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
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
