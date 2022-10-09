import "./deviceList.css"

const DeviceList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://media.jw.com.au/media/catalog/product/cache/f1bef8199c3ecd58e3d590e310c5b105/z/1/z12q00046_2.png" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>iMac</h1>
                    <h3>Apple</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/5/8/58R02LA-1_T1657731988.png" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>HP Pavilion</h1>
                    {/* https://www.hp.com/mx-es/shop/all-in-one-hp-pavilion-24-ca0000la-58r02la.html*/}
                    <h3>HP</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.lenovo.com/medias/lenovo-think-m-sff-series-feature-left-side.png?context=bWFzdGVyfHJvb3R8MTgzMzkwfGltYWdlL3BuZ3xoMmEvaDgxLzk3NTUyMDM2MzMxODIucG5nfDZlZDZhNzNhYWVlZjI1ZjQyNGJlODJlY2RmNTEyZGY4ZjlmMWY1NTY3OTUyNzhmYzhiYWU1YTdlMzEwZjRlMGU" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>Lenovo Serie M SSF</h1>
                    <h3>Lenovo</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08049972.png" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>HP All-in-One</h1>
                    <h3>HP</h3>
                    {/*https://www.hp.com/us-en/shop/pdp/hp-all-in-one-22-df0120m */}
                </div>
            </div>
            <div className="pListItem">
                <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/optiplex-desktops/5400/composite-imagery/prod-compare-opti-d12-5400-aio-800x550.png?fmt=png-alpha&wid=800&hei=550" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>Dell OptiPlex</h1>
                    <h3>Dell</h3>
                    {/* https://www.dell.com/en-in/work/shop/business-pcs-desktop-computers/sf/optiplex-desktops*/}
                </div>
            </div>
        </div>
    )
}


export default DeviceList