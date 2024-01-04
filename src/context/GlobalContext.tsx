import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
  ReactNode,
} from 'react';

// utils
import axiosInstance from '../utils/axiosConfig';

interface IGlobalProvider {
  children: ReactNode;
}

interface Hotel {
  hotelId: string;
}

interface GlobalContextProps {
  hotels: Hotel[];
  loading: boolean;
}

const DATA_URL =
  'https://gist.githubusercontent.com/yasaricli/de2282f01c739a5c8fcbffbb9116e277/raw/949b2393642747d2f54edf0ce659f27a69c87690/hotels.json';

const GlobalContext = createContext<GlobalContextProps>({
  hotels: [],
  loading: false,
});

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  return context;
};

export const GlobalProvider: FC<IGlobalProvider> = ({children}) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchHotels = async () => {
    setLoading(true);
    try {
      const response: any = await axiosInstance.get(DATA_URL);
      setHotels(response.resultObject.hotelList);
    } catch (error) {
      console.error('fetchHotels:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <GlobalContext.Provider value={{hotels, loading}}>
      {children}
    </GlobalContext.Provider>
  );
};
