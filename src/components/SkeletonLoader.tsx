import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface Props {
  length: number;
}

const SkeletonLoader: FC<Props> = ({length}) => {
  const skeletons = Array.from({length}, (_, index) => (
    <View key={index} style={styles.skeletonContainer}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width="100%" height={150} />
      </SkeletonPlaceholder>
      <View style={styles.skeletonSubContainer}>
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item width="60%" height={20} />
            <SkeletonPlaceholder.Item
              width="30%"
              marginTop={6}
              marginBottom={10}
              height={15}
            />
            <SkeletonPlaceholder.Item width="40%" height={24} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    </View>
  ));

  return <View>{skeletons}</View>;
};

const styles = StyleSheet.create({
  skeletonContainer: {
    marginBottom: 20,
  },
  skeletonSubContainer: {
    backgroundColor: '#fff',
    padding: 14,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default SkeletonLoader;
