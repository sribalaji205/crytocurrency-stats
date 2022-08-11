import { SetStateAction, useState } from "react";
import { Currency } from "./currency-list";
//import { currency } from "../interfaces/interface";
const Filter = ({ setQuery }: { setQuery: (val: SetStateAction<string[]>) => void }) => {
    const [open, setOpen] = useState<boolean>(false);
    //const [query, setQuery] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [sort, setSort] = useState<string>("");
    const [filter, setFilter] = useState<string>("");
    const [pagesize, setPagesize] = useState<string>("");

    //console.log(query);
    //console.log(JSON.stringify(Currency));
    const CurrencyArray: any = Currency;
    const optionData: any = CurrencyArray.map((item: any) => { return <option className="font-semibold" key={item.code} value={item.code}>{item.name}</option> })
    //console.log(item.name + " " + item.code);
    //let temp: string[] = [];
    if (open === true) {
        //console.log("open");
        return (
            <>
                <div>
                    <div className="relative">
                        <button type="button" className="cursor-pointer flex font-bold mr-2" onClick={() => {
                            setOpen(true);
                        }}>Filter<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg></button>
                        <div className="absolute z-10 rounded-md top-0 left-0 bg-blue-300 p-10 border-4 border-cyan-100">
                            <div className="flex font-bold">
                                <div className="bg-white p-4 mr-4 rounded-md">
                                    <div>Select Currency Type:</div>
                                    <div className="pt-1 w-72 relative overflow-hidden">
                                        <select
                                            className="divide-y divide-dashed bg-gray-100 h-36 scrollbar scrollbar-thumb-cyan-400 scrollbar-track-cyan-100 block w-full border-4 rounded-md border-cyan-500  cursor-pointer focus:bg-white-500 outline-none focus:outline-none"
                                            multiple onChange={(e) => {
                                                let str: string = e.target.value;
                                                setCountry(str);
                                            }}>
                                            {optionData}
                                        </select>
                                        <div>
                                            { }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col p-4 gap-2 pl-4 bg-white rounded-md">
                                    <div className="p-1 font-bold">
                                        <div className="pb-1">Sort:</div>
                                        <div className="flex">
                                            <div className="flex items-center mr-4 ">
                                                <input id="inline-radio" type="radio" value="default" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={(e) => {
                                                    let defa = e.target.value;
                                                    setSort(defa);
                                                }}>
                                                </input><label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-black">Default</label>
                                            </div>
                                            <div className="flex items-center mr-4">
                                                <input id="inline-radio" type="radio" value="rank" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={(e) => {
                                                    let defa = e.target.value;
                                                    setSort(defa);
                                                }}>
                                                </input><label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-black">Rank</label>
                                            </div>
                                            <div className="flex items-center mr-4">
                                                <input id="inline-radio" type="radio" value="first_priced_at" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={(e) => {
                                                    let defa = e.target.value;
                                                    setSort(defa);
                                                }}>
                                                </input><label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-black ">Priced 1st</label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="p-1 font-bold relative">
                                        <div className="pb-1">Filter:</div>
                                        <div className="flex text-black">
                                            <div className="flex items-center mr-4">
                                                <input id="radio" type="radio" value="default" name="inline-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={(e) => {
                                                    let defa = e.target.value;
                                                    setFilter(defa);
                                                }}>
                                                </input><label htmlFor="radio" className="ml-2 text-sm font-medium text-black" >Default</label>
                                            </div>
                                            <div className="flex items-center mr-4">
                                                <input id="radio" type="radio" value="any" name="inline-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={(e) => {
                                                    let defa = e.target.value;
                                                    setFilter(defa);
                                                }}>
                                                </input><label htmlFor="radio" className="ml-2 text-sm font-medium text-black ">Any</label>
                                            </div>
                                            <div className="flex items-center mr-4">
                                                <input id="radio" type="radio" value="new" name="inline-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={(e) => {
                                                    let defa = e.target.value;
                                                    setFilter(defa);
                                                }}>
                                                </input><label htmlFor="radio" className="ml-2 text-sm font-medium text-black">New</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="pb-1">Data per Page:</label><br></br>
                                        <input className="focus:outline-none font-semibold outline-none border-b-2 border-black focus:border-b-2 focus:border-green-400" type="text" onChange={(e) => {
                                            setPagesize(e.target.value);
                                        }} placeholder="Enter size 1-100"></input>
                                    </div>
                                    <div className="mt-10">
                                        <button className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" type="button" onClick={() => {
                                            let QueryArr = [country, filter, sort, pagesize];
                                            setQuery(QueryArr);
                                            setOpen(false);
                                        }}>Apply Filter</button>
                                    </div>
                                </div>


                            </div>
                            <div className="flex gap-4">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        )
    }
    else {
        //setOpen(false);
        //console.log("close");
        return (
            <>
                <div>
                    <div className="relative">
                        <button type="button" className="cursor-pointer flex font-bold mr-2" onClick={() => {
                            setOpen(true);
                        }}>Filter<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg></button>

                    </div>
                </div>
            </>
        )
    }

}

export default Filter;