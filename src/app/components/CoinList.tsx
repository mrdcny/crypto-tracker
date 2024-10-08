import React from 'react'
import Coins from './Coins';

export interface Asset {
    key: string,
    id: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number
    name: string,
    symbol: string,
    total_volume: number,
    price_change_percentage_24h: number
    image: string
}

const CoinList = ({assets}: any) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Coin</th>
                            <th>Price</th>
                            <th>24h</th>
                            <th>Total Volume</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map((asset: Asset) => {
                            return (
                                <Coins
                                    key={asset.id}
                                    name={asset.name}
                                    id={asset.id}
                                    current_price={asset.current_price}
                                    symbol={asset.symbol}
                                    market_cap={asset.market_cap}
                                    total_volume={asset.total_volume}
                                    image={asset.image}
                                    price_change_percentage_24h={asset.price_change_percentage_24h}
                                    market_cap_rank={asset.market_cap_rank}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CoinList