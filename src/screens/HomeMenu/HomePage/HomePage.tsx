import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import IconFavourite from '../../../components/icons/IconFavourite';
import IconGift from '../../../components/icons/IconGift';
import IconMenu from '../../../components/icons/IconMenu';
import IconSell from '../../../components/icons/IconSell';
import {H1, H4, SmallText} from '../../../components/Typography';
import {hScale, vScale} from '../../../libs/scale';
import MenuData from '../../../resources/mockdata/MenuData';

const HomePage = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: hScale(16)}}>
        <H1 bold>Home</H1>
        <H1 bold>Casourel</H1>

        <View style={styles.listChoice}>
          <View style={styles.customChoice}>
            <TouchableOpacity style={styles.customButton}>
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
        <H1 bold style={{textAlign: 'center', marginVertical: vScale(30)}}>
          Sales
        </H1>

        <FlatList
          data={MenuData}
          keyExtractor={(item, index) => index.toString() + ''}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={{
                width: '48%',
                height: vScale(251),
                backgroundColor: '#FFFFFF',
                marginRight: hScale(10),
                marginBottom: vScale(10),
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: vScale(140),
                  width: '100%',
                  marginBottom: vScale(20),
                }}>
                <Image
                  resizeMode="contain"
                  source={item?.images}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <H4>{item?.name}</H4>
            </View>
          )}
          numColumns={2}
          style={{marginBottom: vScale(260)}}
        />
      </View>
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
});

export default HomePage;
