import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';

// context
import {GlobalProvider, useGlobal} from './src/context/GlobalContext';

// components
import BaseContainer from './src/components/BaseContainer';
import SkeletonLoader from './src/components/SkeletonLoader';
import {HotelCard} from './src/components/HotelCard';

const HotelsList: FC = () => {
  const {hotels, loading} = useGlobal();

  if (loading) {
    return <SkeletonLoader length={3} />;
  }

  return (
    <FlatList
      data={hotels}
      renderItem={({item}) => <HotelCard data={item} />}
      keyExtractor={item => item.hotelId}
      showsVerticalScrollIndicator={false}
    />
  );
};

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <BaseContainer useSafeArea style={styles.safeAreaContainer}>
        <BaseContainer style={{paddingHorizontal: 10}}>
          <HotelsList />
        </BaseContainer>
      </BaseContainer>
    </GlobalProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#DEE8EA',
  },
});

export default App;
