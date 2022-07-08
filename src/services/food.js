import { useState, useRef } from 'react';
import throttle from '../utils/throttle';
import { TIME_THROTTLING, BASE_URL } from '../utils/constants';

const useFilter = () => {
  const [data, setData] = useState([]);

  const filter = useRef(
    throttle((food) => {
      if (food) {
        const parseFood = food.replace(/ /g, '_');
        const url = `${BASE_URL}?food=${parseFood}`;
        fetch(url, { method: 'GET' })
          .then((res) => res.json())
          .then((res) =>
            setData(
              res.map((element) => {
                return {
                  id: element.id,
                  name: element.name,
                  tagline: element.tagline,
                  first_brewed: element.first_brewed,
                };
              }),
            ),
          );
      } else {
        setData([]);
      }
    }, TIME_THROTTLING),
  );

  return [data, filter.current];
};

export default useFilter;
