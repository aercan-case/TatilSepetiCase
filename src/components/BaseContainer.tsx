import {FC, ReactNode} from 'react';
import {SafeAreaView, StatusBar, View, ViewProps} from 'react-native';

interface IBaseContainer extends ViewProps {
  children: ReactNode;
  useSafeArea?: boolean;
}

const BaseContainer: FC<IBaseContainer> = ({
  children,
  useSafeArea = false,
  ...props
}) => {
  const Container = useSafeArea ? SafeAreaView : View;

  return (
    <Container {...props}>
      <StatusBar />
      {children}
    </Container>
  );
};

export default BaseContainer;
