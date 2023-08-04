import { useState } from 'react';

import { punkApiRequest } from '../api/axios'
import { Beer } from '../interfaces/punkApiResponse';
import { Filters } from '../interfaces/Filters';

export const usePunkApi = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ beers, setBeers ] = useState<Beer[]>([]);

    const loadBeers = async (filters?: Filters) => {
      setIsLoading(true);
      let params: Filters | undefined = undefined;

      if (filters) {
        params = {};
        for (const [key, value] of Object.entries(filters)) {
          if ((typeof value === 'string' && value !== '') || (typeof value === 'number' && value !== 0)) {
            params[key] = value;
          }
        }
      }
      
      await punkApiRequest.get<Beer[]>('beers', { 
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          params, 
        })
          .then((resp) => {
              setBeers(resp.data);
              setIsLoading(false);
          })
          .catch((error) => {

              if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config);

              setIsLoading(false);
          })
    };
    
  return ({
    isLoading,
    beers,
    loadBeers,
  });
};
