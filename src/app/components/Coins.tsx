import React from 'react'
import { Asset } from './CoinList'

import styles from '@/app/components/Coins.module.css';

const Coins = (asset: Asset) => {
    return (
        <tr key={asset.id}>
            <td>
                {asset.market_cap_rank}
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={asset.image}
                                alt={asset.id} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{asset.name}</div>
                        <div className="text-sm opacity-50">{asset.symbol.toUpperCase()}</div>
                    </div>
                </div>
            </td>
            <td><div className="font-bold">${asset.current_price.toLocaleString()}</div></td>
            {asset.price_change_percentage_24h > 0 ? 
            (<td className={styles.green} ><div className="font-bold">{asset.price_change_percentage_24h.toFixed(2)}%</div></td>)
            :
            (<td className={styles.red}><div className="font-bold">{asset.price_change_percentage_24h.toFixed(2)}%</div></td>)
            }
            <td><div className="font-bold">${asset.total_volume.toLocaleString()}</div></td>
            <td><div className="font-bold">${asset.market_cap.toLocaleString()}</div></td>
        </tr>
    )

}
export default Coins