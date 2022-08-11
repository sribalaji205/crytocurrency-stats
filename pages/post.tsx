import Layout from "./layout"
const Page = ({ data }: { data: any }) => {
  //console.log(data);
  let count = 0;
  return data?.map((item: any) => {
    count++;
    return <Layout key={count} datas={item} />
  })

}
export default Page