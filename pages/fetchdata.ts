import axios from "axios";
import useSWR from "swr";


const DataFetch=(urlString:string)=>{
  const url=urlString
  //const url = 'https://api.nomics.com/v1/currencies/ticker?key=0794585972f518da333ea3c4082061f59ef68445&interval=1d,30d&quote-currency=USD&platform-currency=ETH&filter=new&sort=rank&per-page=20&page=1';
    const fetcher = (url: string) => axios.get(url).then(resp => resp.data);
    //console.log(fetcher);
    const { data, error } = useSWR(url, fetcher, {
      focusThrottleInterval: 120000,
      refreshInterval: 60000,
      revalidateIfStale: true,
      revalidateOnFocus : true,
      revalidateOnReconnect: true
    });
    //console.log("DATA FETCH  "+data);
    return {data,error}
}

export default DataFetch;