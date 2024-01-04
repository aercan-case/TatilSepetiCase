import {FC} from 'react';
import {Image, Text, View} from 'react-native';

// styles
import styles, {getColorForScore} from './styles';

interface Props {
  score: number;
  photo: string;
}

const HotelImage: FC<Props> = ({score, photo}) => {
  const scoreColor = getColorForScore(score);

  return (
    <View style={styles.imageContainer}>
      <View style={[styles.customerScore, {backgroundColor: scoreColor}]}>
        <Text style={styles.customerScoreText}>{score}</Text>
      </View>
      <Image source={{uri: photo}} style={styles.hotemImage} />
    </View>
  );
};

export default HotelImage;
