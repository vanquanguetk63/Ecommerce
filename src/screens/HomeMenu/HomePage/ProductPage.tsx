import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import IconBack from '../../../components/icons/IconBack';
import {H1, H4} from '../../../components/Typography';
import {hScale, vScale} from '../../../libs/scale';

const ProductPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paddingContainer}>
        <IconBack />
        <H1 bold color="#0A1034" style={styles.textCategory}>
          Categories
        </H1>
        <ScrollView>
          <TouchableOpacity style={styles.itemCategory}>
            <H4 color="#0A1034" bold>
              All
            </H4>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paddingContainer: {
    paddingHorizontal: hScale(16),
  },
  itemCategory: {
    height: vScale(60),
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    paddingLeft: hScale(16),
    marginBottom: vScale(16),
  },
  textCategory: {
    paddingVertical: vScale(16),
  },
});

export default ProductPage;
