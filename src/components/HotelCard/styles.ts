import {StyleSheet} from 'react-native';

type ScoreColorMap = {
  [key: string]: string;
};

const SCORE_COLORS: ScoreColorMap = {
  perfect: '#27ae60',
  wonderful: '#87a52c',
  veryGood: '#f39c12',
  good: '#f28447',
  notBad: '#d35400',
};

const SCORE_THRESHOLDS = [
  {limit: 9.5, color: SCORE_COLORS.perfect},
  {limit: 8.9, color: SCORE_COLORS.wonderful},
  {limit: 8.0, color: SCORE_COLORS.veryGood},
  {limit: 7.0, color: SCORE_COLORS.good},
];

export const getColorForScore = (score: number): string => {
  const threshold = SCORE_THRESHOLDS.find(st => score >= st.limit);

  return threshold ? threshold.color : SCORE_COLORS.notBad;
};

const styles = StyleSheet.create({
  hotelCardContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  customerScore: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 1,
    padding: 6,
    borderRadius: 6,
  },
  customerScoreText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  hotemImage: {
    height: 210,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  hotelInfoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003466',
    marginBottom: 6,
  },
  areaInfo: {
    color: '#9F9EA3',
    marginBottom: 10,
    fontSize: 13,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  originalPrice: {
    color: '#C84348',
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'right',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    color: '#1458B3',
    fontWeight: '600',
    fontSize: 16,
  },
  accommodation: {
    borderWidth: 1,
    borderColor: '#243B4C',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  accommodationText: {
    fontSize: 12,
    color: '#243B4C',
  },
  campaignName: {
    color: '#449C72',
    fontSize: 12,
  },
});

export default styles;
