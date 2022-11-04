import React from 'react'
import styles from '../styles'
import { formatUnits, parseUnits } from 'ethers/lib/utils'
const Balance=() => {
    const tokenBalance=parseUnits("0.00251")
    return (
        <div className={styles.balance}>
            <p className={styles.balanceText}>
                {tokenBalance&&(
                    <>
                        <span className={styles.balanceTextBold}>
                            Balance: </span>
                        {formatUnits(tokenBalance||parseUnits("0"))}
                    </>
                )}
            </p>
        </div>
    )
}

export default Balance