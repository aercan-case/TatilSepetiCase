import {FC} from 'react';
import {Text, View} from 'react-native';

// utils
import {formatPrice} from '../../utils';

// styles
import styles from './styles';

interface Props {
  hotelName: string;
  areaName: string;
  subAreaName: string;
  subAreaDetailName: string;
  price: number;
  discountPrice: number;
  accommodation: string;
  campaignName: string;
}

const HotelInfo: FC<Props> = ({
  hotelName,
  areaName,
  subAreaName,
  subAreaDetailName,
  price,
  discountPrice,
  accommodation,
  campaignName,
}) => {
  return (
    <View style={styles.hotelInfoContainer}>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.hotelName}>{hotelName}</Text>
          <Text
            style={
              styles.areaInfo
            }>{`${areaName} - ${subAreaName}, ${subAreaDetailName}`}</Text>
        </View>
        <View>
          {price !== discountPrice && (
            <Text style={styles.originalPrice}>{formatPrice(price)}</Text>
          )}
          <Text style={styles.discountPrice}>{formatPrice(discountPrice)}</Text>
        </View>
      </View>
      <View style={styles.accommodation}>
        <Text style={styles.accommodationText}>{accommodation}</Text>
      </View>
      <View>
        <Text style={styles.campaignName}>{campaignName}</Text>
      </View>
    </View>
  );
};

export default HotelInfo;
