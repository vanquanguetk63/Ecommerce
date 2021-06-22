import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import IconFavourite from '../../../components/icons/IconFavourite';
import IconGift from '../../../components/icons/IconGift';
import IconMenu from '../../../components/icons/IconMenu';
import IconSell from '../../../components/icons/IconSell';
import {H1, H4, SmallText} from '../../../components/Typography';
import {hScale, vScale} from '../../../libs/scale';
import MenuData from '../../../resources/mockdata/MenuData';
import {useNavigation} from '@react-navigation/core';
import {HomeNavigatorNavProps} from '../../../routes/MainNavigator/MainNavigator';

const HomePage = (): JSX.Element => {
  const navigation = useNavigation<HomeNavigatorNavProps>();

  const navigateToScreen = screen => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{paddingHorizontal: hScale(16)}}
        showsVerticalScrollIndicator={false}>
        <H1 bold>Home</H1>
        <H1 bold>Casourel</H1>
        <View style={styles.listChoice}>
          <View style={styles.customChoice}>
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateToScreen('CategoryPage')}>
              <IconMenu />
            </TouchableOpacity>
            <SmallText color="#1F53E4">Categories</SmallText>
          </View>
          <View style={styles.customChoice}>
            <TouchableOpacity style={styles.customButton}>
              <IconFavourite />
            </TouchableOpacity>
            <SmallText color="#1F53E4">Favourites</SmallText>
          </View>
          <View style={styles.customChoice}>
            <TouchableOpacity style={styles.customButton}>
              <IconGift />
            </TouchableOpacity>
            <SmallText color="#1F53E4">Gifts</SmallText>
          </View>
          <View style={styles.customChoice}>
            <TouchableOpacity style={styles.customButton}>
              <IconSell />
            </TouchableOpacity>
            <SmallText color="#1F53E4">Best Selling</SmallText>
          </View>
        </View>
        <H1 bold style={styles.textMenu}>
          Sales
        </H1>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {MenuData?.map((item, index) => (
            <TouchableOpacity style={styles.menuItem} key={index}>
              <View style={styles.menuImage}>
                <Image
                  resizeMode="contain"
                  source={item?.images}
                  style={styles.detailImage}
                />
              </View>
              <H4>{item?.name}</H4>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5FB',
  },
  customButton: {
    height: hScale(56),
    width: vScale(56),
    borderRadius: 50,
    backgroundColor: '#E0ECF8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listChoice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vScale(20),
  },
  customChoice: {
    height: hScale(81),
    width: vScale(81),
    alignItems: 'center',
  },
  menuItem: {
    width: '48%',
    height: vScale(251),
    backgroundColor: '#FFFFFF',
    marginBottom: vScale(16),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuImage: {
    height: vScale(140),
    width: '100%',
    marginBottom: vScale(20),
  },
  detailImage: {width: '100%', height: '100%'},
  textMenu: {textAlign: 'center', marginVertical: vScale(30)},
});

export default HomePage;
