import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {Pagination} from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  useWindowDimensions,
  Pressable,
  ImageBackground,
} from 'react-native';

import AppLogo from './assets/app-logo.svg';
import Ellipse from './assets/Ellipse.png';
import IconImage1 from './assets/img-1.svg';
import IconImage2 from './assets/img-2.svg';
import IconImage3 from './assets/img-3.svg';
import ChevronRightIcon from './assets/arrow-right.svg';

/* =============================================================================
<App />
============================================================================= */
const App = () => {
  const carousel = useRef();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const {width: windowWidth} = useWindowDimensions();

  const _handleSnapToItem = index => {
    setCarouselIndex(index);
  };

  const _handleNextPress = () => {
    carousel.current.snapToNext();
  };

  return (
    <LinearGradient colors={['#042554', '#003F98']} style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.carouselContainer}>
        <Carousel
          layout={'default'}
          ref={carousel}
          useScrollView
          data={CAROUSEL_ITEMS}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          renderItem={renderItem}
          onSnapToItem={_handleSnapToItem}
        />
      </View>
      <View style={styles.footer}>
        <Pagination
          dotsLength={CAROUSEL_ITEMS.length}
          activeDotIndex={carouselIndex}
          dotStyle={styles.paginationDotActive}
          inactiveDotStyle={styles.paginationDotInactive}
          dotContainerStyle={styles.paginationDotContainer}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
        {carouselIndex === 3 ? (
          <Pressable style={styles.finalBtn} onPress={_handleNextPress}>
            <Text style={styles.finalBtnTxt}>C’est parti !</Text>
          </Pressable>
        ) : (
          <Pressable style={styles.nextBtn} onPress={_handleNextPress}>
            <ChevronRightIcon />
          </Pressable>
        )}
      </View>
    </LinearGradient>
  );
};

const renderItem = ({item, index}) => {
  if (index === 0) {
    return (
      <View style={[styles.itemContainer, {paddingBottom: 80}]}>
        {item.icon}
        <Text style={[styles.itemTxt, styles.itemTxtRegular, styles.itemTxtxl]}>
          {item.boldText}{' '}
          <Text
            style={[styles.itemTxt, styles.itemTxtMedium, styles.itemTxtxl]}>
            {item.text}
          </Text>
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.itemContainer}>
      <ImageBackground
        resizeMode="contain"
        source={Ellipse}
        style={styles.iconContainer}>
        {item.icon}
      </ImageBackground>
      <Text style={[styles.itemTxt, styles.itemTxtBold, styles.titleTxt]}>
        {item.title}
      </Text>
      <View style={styles.itemTxtContainer}>
        <Text style={[styles.itemTxt, styles.itemTxtBold, styles.itemTxtlg]}>
          {item.boldText}
        </Text>
        <Text style={[styles.itemTxt, styles.itemTxtlg, styles.itemTxtRegular]}>
          {item.text}
        </Text>
      </View>
    </View>
  );
};

const CAROUSEL_ITEMS = [
  {
    boldText: 'Toute l’actualité des commerces',
    text: 'Justenbas de chez vous',
    icon: <AppLogo />,
  },
  {
    title: 'Bienvenue !',
    boldText:
      'Une nouvelle façon de rester connecté(e) avec les commerces de proximité Justenbas de chez vous.',
    text: 'Plongez dans un flux personnalisé et suivez les dernières actualités, promotions et événements postés par vos commerces favoris.',
    icon: <IconImage2 />,
  },
  {
    title: 'Explorez votre quartier',
    boldText:
      '(Re)découverez facilement les commerçants de proximité Justenbas de chez vous',
    text: 'Avec la carte interactive et le moteur de recherche ajoutez vos commerçants préférés, consultez leurs fiches de présentation et ne manquez aucune offre spéciale ou événement à venir.',
    icon: <IconImage3 />,
  },
  {
    title: 'Scannez !',
    boldText:
      "Flashez simplement les QR codes présents chez les commerces de la communauté Justenbas pour les suivre en un clin d'œil.",
    text: 'N’hésitez pas à activer la cloche sur la fiche de vos commerces favoris afin d’être notifié lorsqu’ils publient une actualité',
    icon: <IconImage1 />,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    flex: 1,
  },
  itemContainer: {
    rowGap: 30,
    marginTop: 20,
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  itemTxt: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 'Karla-Regualar',
  },
  itemTxtRegular: {
    fontFamily: 'Karla-Light',
  },
  itemTxtxl: {
    fontSize: 32,
  },
  itemTxtlg: {
    fontSize: 17,
  },
  itemTxtMedium: {
    fontFamily: 'Karla-Medium',
  },
  itemTxtBold: {
    fontFamily: 'Karla-Bold',
  },
  itemTxtContainer: {
    rowGap: 10,
    paddingBottom: 25,
    paddingHorizontal: 18,
  },
  iconContainer: {
    height: 230,
  },
  titleTxt: {
    fontSize: 27,
  },
  footer: {
    flex: 0.4,
    rowGap: 50,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 25,
    justifyContent: 'flex-start',
  },
  paginationDotContainer: {
    marginHorizontal: 5,
  },
  paginationDotActive: {
    width: 22,
    height: 7,
    borderRadius: 15,
    backgroundColor: '#FFA953',
  },
  paginationDotInactive: {
    width: 7,
    height: 7,
    borderRadius: 7 / 2,
    backgroundColor: '#fff',
  },
  nextBtn: {
    width: 56,
    height: 56,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: 56 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  finalBtn: {
    width: '100%',
    height: 42,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  finalBtnTxt: {
    color: '#000',
    fontSize: 17,
    fontFamily: 'Karla-Bold',
  },
});

/* Export
============================================================================= */
export default App;
