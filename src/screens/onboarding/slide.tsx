import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {CustomButton} from 'components/input';
// import {useNavigation} from '@react-navigation/native';

type SlideProps = {
  slideItems: {
    id: number;
    image: any;
    title: string;
    subtitle: string;
  };
  next?: () => void;
  skip?: (value: number) => void;
  index: number;
};

const {width} = Dimensions.get('window');

const Slide = ({slideItems, index, next, skip}: SlideProps) => {
  //   const navigation = useNavigation();
  const handleOnPress = () => {
    if (slideItems.id === 3) {
      //   navigation.navigate('SelectAccount');
      Alert.alert("That's all for now");
    } else {
      next();
    }
  };
  return (
    <View style={styles.container}>
      {slideItems.id === 3 ? null : (
        <CustomButton
          onPress={() => skip(index)}
          title="Skip"
          style={styles.skipButton}
        />
      )}

      <Image source={slideItems.image} style={styles.image} />

      <View style={styles.buttomContainer}>
        <View>
          <Text style={styles.titleText}>{slideItems.title}</Text>
          <Text style={styles.subtitle}>{slideItems.subtitle}</Text>
        </View>
        <CustomButton
          onPress={handleOnPress}
          title={slideItems.id === 3 ? 'Get Started' : 'Next'}
        />
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  skipButton: {
    width: 80,
    height: 42,
    borderRadius: 28,
    marginLeft: 'auto',
  },
  image: {
    marginVertical: 40,
  },
  titleText: {
    color: '#1B1C1E',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 50,
    color: '#49494B',
  },
  buttomContainer: {
    position: 'absolute',
    bottom: 50,
    width: width,
    paddingHorizontal: 24,
  },
});
