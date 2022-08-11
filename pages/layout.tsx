const Layout = ({ datas }: { datas: any }) => {
    //console.log("Layout datas " + datas);
    let name = (datas.name !== undefined ? datas.name : "-");
    let icon = (datas.logo_url !== undefined ? datas.logo_url : "https://image.cnbcfm.com/api/v1/image/106928219-1629130755312-gettyimages-1234311531-sindeyev-notitle210729_np12K.jpeg?v=1649925814");
    let symbol = (datas.symbol !== undefined ? datas.symbol : "-");
    let rank = (datas.rank !== undefined ? datas.rank : "-");
    let price = (datas.price !== undefined ? datas.price : "-");
    let status = (datas.status !== undefined ? datas.status : "-");
    let oneday = "-";
    if (datas["1d"] !== undefined) {
        oneday = (datas["1d"].price_change !== undefined ? datas["1d"].price_change : "-");
    }
    let oneweek = "-";
    if (datas["7d"] !== undefined) {
        oneweek = (datas["7d"].price_change !== undefined ? datas["7d"].price_change : "-");
    }
    //let oneweek = (datas["7d"].price_change !== undefined ? datas["7d"].price_change : "-");
    let marketcap = (datas.market_cap !== undefined ? datas.market_cap : "-");
    let pricecolor = (price < 0 ? "Red" : "Green");
    let onedaycolor = (parseFloat(oneday) < 0 ? "Red" : parseFloat(oneday) > 0 ? "Green" : "normal");
    let oneweekcolor = (parseFloat(oneweek) < 0 ? "Red" : parseFloat(oneweek) > 0 ? "Green" : "normal");
    return (
        <>
            <tr className="bg-blue-200 lg:text-black rounded-md">
                <td className="p-3"><img className="rounded-full" src={icon} width={30} height={30} alt="image datas" onError={() => "this.onerror=null;this.src='https://image.cnbcfm.com/api/v1/image/106928219-1629130755312-gettyimages-1234311531-sindeyev-notitle210729_np12K.jpeg?v=1649925814';"} /></td>
                <td className="p-3">{name}</td>
                <td className="p-3">{symbol}</td>
                <td id={pricecolor} className="p-3">{price}</td>
                <td className="p-3">{rank}</td>
                <td className="p-3">{status}</td>
                <td id={onedaycolor} className="p-3">{oneday}</td>
                <td id={oneweekcolor} className="p-3">{oneweek}</td>
                <td className="p-3">{marketcap}</td>
            </tr>
        </>
    )
}
export default Layout;