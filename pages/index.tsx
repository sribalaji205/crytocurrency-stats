import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import Page from "./post";
import HashLoader from "react-spinners/HashLoader";
import DataFetch from "./fetchdata";
import Filter from "./filter";
import Fuse from "fuse.js";
import { Head } from "next/document";
/* const Ascending = (data: any) => {
  //console.log("inside " + data);
  data?.sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
  return data;
}
const Descending = (data: any) => {
  data?.sort((a: any, b: any) => (a.name > b.name ? -1 : 1))
  return data;
} */
export default function Home() {

  // const { data: posts, error } = useGetPosts();
  /* const fetcher = (url:string) =>axios.get(url).then(resp => resp.data.coins);
const url =  'https://api.coinstats.app/public/v1/coins'; */

  // if (error) return <h1>Something went wrong!</h1>;
  // if (!posts) return <h1>Loading...</h1>;
  const option = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ['name', 'symbol']
  }
  const [pageIndex, setPageIndex] = useState<number>(1);
  //const [pagesize, setPagesize] = useState<string>("");
  //const [tempArray, setTempArray] = useState<any>([]);
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [status, setStatus] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  //const [ascending, setAscending] = useState<boolean>(false);
  //const [descending, setDescending] = useState<boolean>(false);
  /* const url = 'https://api.nomics.com/v1/currencies/ticker?key=0794585972f518da333ea3c4082061f59ef68445&interval=1d,30d&quote-currency=USD&platform-currency=ETH&filter=new&sort=rank&per-page=20&page=1';
  const fetcher = (url: string) => axios.get(url).then(resp => resp.data.coins);
  console.log(fetcher); */
  /* const { data, error } = useSWR(url, fetcher, {
    focusThrottleInterval: 5000,
    refreshInterval: 2000,
    revalidateIfStale: true,
    revalidateOnReconnect: true
  }); */
  const API_KEY = "0794585972f518da333ea3c4082061f59ef68445"
  const url = "https://api.nomics.com/v1/currencies/ticker?key=";
  const interval = "&interval=1d,7d";
  let curr = "";
  if (options[0] === "default") {
    curr = "";
  }
  else {
    curr = "&quote-currency=" + options[0];
  }

  const plat = "&platform-currency=ETH";
  let filter = "";
  if (options[1] === "default") {
    filter = "";
  }
  else {
    filter = "&filter=" + options[1];
  }
  let sort = "";
  if (options[2] === "default") {
    sort = "";
  }
  else {
    sort = "&sort=" + options[2];
  }
  let page_size = "";
  if (options[3] === "undefined" || options[3] === "") {
    page_size = "&per-page=" + "20";
  }
  else {
    page_size = "&per-page=" + options[3];
  }

  //console.log(page_size);
  const page_index = "&page=" + pageIndex;
  //console.log(pagesize, options)
  const fullURL = url + API_KEY + interval + curr + status + filter + plat + sort + page_size + page_index;
  //console.log(fullURL);
  const { data, error } = DataFetch(fullURL);
  //console.log(data);
  if (error) setPageIndex(1);
  if (!data) return <><div className="contain"><div className="lds-ripple"><div></div><div></div></div></div></>
  const fuse = new Fuse(data, option)

  let result: any = fuse.search(search);

  let datas: any = result.map((item: any) => {
    return item.item;
  })

  //console.log(datas);

  /*if (ascending) {
    result = Ascending(data);
    //console.log("Result " + JSON.stringify(result));
  }
  else if (descending) {
    result = Descending(data);
    //console.log("Result " + JSON.stringify(result));
  } */
  result = datas;
  if (search === "") {
    result = data;
  }
  return (
    <>
      <div>

        <div className="flex justify-center bg-gray-100">

          <div className="col-span-12">
            <div className="text-center text-blue-500 font-bold text-4xl mb-24 mt-8">
              CRYPTOCURRENCY STATS
            </div>
            <div className="overflow-auto lg:overflow-visible">
              <div className="flex bg-sky-100 relative rounded-full border-b-2 border-fuchsia-900 pb-1 pt-3">
                <div className="text-center flex">
                  <div className="text-center ml-4 absolute top-4 left-4"><Filter setQuery={setOptions} /></div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Search..."
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    className="
              w-56
              ml-28
              mb-2
              py-1
              border-b-2 border-blue-600
              outline-none
              rounded-md
              focus:border-yellow-400
            "></input>
                </div>

                <div className="flex gap-2 absolute top-4 right-6">
                  <button
                    className="
                bg-blue-500
                border-2
                border-blue-700
                hover:bg-cyan-100
                hover:text-black
                text-white
                py-0.5
                px-4
                sm
                rounded-full
              "
                    onClick={() => {
                      setStatus("&status=active")
                    }}
                  >
                    Active
                  </button>


                  <button
                    className="
                bg-blue-500
                border-2
                border-blue-700
                hover:bg-cyan-100
                hover:text-black
                text-white
                py-0.5
                px-4
                sm
                rounded-full
              "
                    onClick={() => {
                      setStatus("&status=inactive")
                    }}>
                    Inactive
                  </button>

                  <button
                    className="
                bg-blue-500
                border-2
                border-blue-700
                hover:bg-cyan-100
                hover:text-black
                text-white
                py-0.5
                px-4
                sm
                rounded-full
              "
                    onClick={() => {
                      setStatus("&status=dead")
                    }}>
                    Dead
                  </button>
                </div>
              </div>
              <table className="rounded-md table table-fixed font-semibold text-gray-400 border-separate border-spacing-1 hover:bg-white space-y-6 text-sm">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="p-3">Logo</th>
                    <th className="p-3 text-left">Name
                      {/* <span className="text-lg absolute top-2.5 right-7 cursor-pointer" onClick={() => {
                        //setDescending(false);
                        setAscending(true);
                        console.log(descending + "   " + ascending)
                      }}>&#8643;</span>
                      <span className="text-lg absolute top-2.5 right-4 cursor-pointer" onClick={() => {
                        setAscending(false)
                        setDescending(true);
                        console.log(descending + "   " + ascending)
                      }}>&#8638;</span> */}
                    </th>
                    <th className="p-3 text-left">Symbol</th>
                    <th className="p-3 text-left">Price</th>

                    <th className="p-3 text-left">Rank</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">1 Day Volume </th>
                    <th className="p-3 text-left">7 Day Volume</th>
                    <th className="p-3 text-left">Market Cap</th>
                  </tr>
                </thead>

                <tbody className="">
                  <Page data={result} />
                </tbody>
              </table>
            </div>
            <div className="relative mt-20">
              <button className="px-2 py-1 border-2 bg-cyan-100 rounded-md hover:bg-sky-200 border-sky-500 absolute bottom-4 left-4" type="button" onClick={() => {
                if (pageIndex > 1) {
                  setPageIndex(pageIndex - 1)
                }
              }}>Previous</button>
              <button className="px-2 py-1 border-2 bg-cyan-100 rounded-md hover:bg-sky-200 border-sky-500 absolute bottom-4 right-4" type="button" onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
            </div>
          </div>

        </div>



      </div>
    </>
  )

}