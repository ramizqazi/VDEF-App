import React, {useRef, useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Pagination} from 'react-native-snap-carousel';

import AppLogo from './assets/app-logo.svg';
import IconImage1 from './assets/img-1.svg';
import IconImage2 from './assets/img-2.svg';
import IconImage3 from './assets/img-3.svg';
import LinearGradient from 'react-native-linear-gradient';

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

  return (
    <LinearGradient colors={['#042554', '#003F98']} style={styles.container}>
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
      <Pagination
        dotsLength={CAROUSEL_ITEMS.length}
        activeDotIndex={carouselIndex}
        dotStyle={styles.paginationDotActive}
        inactiveDotStyle={styles.paginationDotInactive}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </LinearGradient>
  );
};

const renderItem = ({item}) => (
  <View style={styles.itemContainer}>
    {item.icon}
  </View>
);

const CAROUSEL_ITEMS = [
  {
    description: 'Toute l’actualité des commerces Justenbas de chez vous',
    icon: <AppLogo />,
  },
  {
    title: 'Bienvenue !',
    description:
      'Une nouvelle façon de rester connecté(e) avec les commerces de proximité Justenbas de chez vous.',
    details:
      'Plongez dans un flux personnalisé et suivez les dernières actualités, promotions et événements postés par vos commerces favoris.',
    icon: <IconImage1 />,
  },
  {
    title: 'Explorez votre quartier',
    description:
      '(Re)découverez facilement les commerçants de proximité Justenbas de chez vous',
    details:
      'Avec la carte interactive et le moteur de recherche ajoutez vos commerçants préférés, consultez leurs fiches de présentation et ne manquez aucune offre spéciale ou événement à venir.',
    icon: <IconImage2 />,
  },
  {
    title: 'TNB WALLET',
    description:
      "Flashez simplement les QR codes présents chez les commerces de la communauté Justenbas pour les suivre en un clin d'œil.",
    details:
      'N’hésitez pas à activer la cloche sur la fiche de vos commerces favoris afin d’être notifié lorsqu’ils publient une actualité',
    icon: <IconImage3 />,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  svgContainer: {
    marginTop: '20%',
  },
  txtContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginVertical: 20,
  },
  paginationDotActive: {
    width: 35,
    height: 10,
    borderRadius: 20,
  },
  paginationDotInactive: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
  },
  nextBtn: {
    borderRadius: 15,
    marginVertical: 0,
    marginHorizontal: 30,
  },
});

/* Export
============================================================================= */
export default App;
