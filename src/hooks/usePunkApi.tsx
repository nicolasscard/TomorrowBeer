import { useState } from 'react';

import { punkApiRequest } from '../api/axios'
import { beerURL } from '../constants/punkApi';
import { Beer } from '../interfaces/punkApiResponse';

export const usePunkApi = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ beers, setBeers ] = useState<Beer[]>([]);

    const loadBeers = async () => {
        console.log('loadBeers');
        setIsLoading(true);
        
        await punkApiRequest.get<Beer[]>('beers', { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }  })
            .then((resp) => {
                console.log('success');
                console.log(resp.data[0].name);
                setBeers(resp.data);
                setIsLoading(false);
                // return;
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

                // console.log('err', err);
                // setIsLoading(false);
                // // return;
            })
    };
    
  return ({
    isLoading,
    beers,
    loadBeers,
  });
};
