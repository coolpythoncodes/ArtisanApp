import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import Slide from './slide';
import Swiper from 'react-native-swiper';
import {onboardingSlides} from 'utils/data/onboarding.data';

const OnBoarding = () => {
  const swiperRef = useRef<any>(null);
  const next = () => {
    if (swiperRef) {
      swiperRef.current.scrollBy(1);
    }
  };

  const skip = (index: number) => {
    if (swiperRef) {
      if (index === 0) {
        swiperRef.current.scrollBy(2);
      } else {
        swiperRef.current.scrollBy(1);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        index={0}
        // showsButtons={true}
        dotColor="#D9D9D9"
        activeDotColor="#243B64"
        // paginationStyle={styles.paginationStyle}
        // activeDotStyle={styles.dotStyle}
        // dotStyle={styles.dotStyle}
      >
        <Slide {...{next, skip}} slideItems={onboardingSlides[0]} index={0} />
        <Slide {...{next, skip}} slideItems={onboardingSlides[1]} index={1} />
        <Slide slideItems={onboardingSlides[2]} index={2} />
      </Swiper>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
