import {FC} from 'react';
import {View} from 'react-native';

// styles
import styles from './styles';

// sub-components
import HotelImage from './HotelImage';
import HotelInfo from './HotelInfo';

interface Props {
  data: any;
}

export const HotelCard: FC<Props> = ({data}: Props) => {
  const {
    photoPath,
    customerScore,
    hotelName,
    areaName,
    subAreaName,
    subAreaDetailName,
    price,
    discountPrice,
    accommodation,
    campaignName,
  } = data;
  return (
    <View style={styles.hotelCardContainer}>
      <HotelImage photo={photoPath} score={customerScore} />
      <HotelInfo
        hotelName={hotelName}
        areaName={areaName}
        subAreaName={subAreaName}
        subAreaDetailName={subAreaDetailName}
        price={price}
        discountPrice={discountPrice}
        accommodation={accommodation}
        campaignName={campaignName}
      />
    </View>
  );
};
