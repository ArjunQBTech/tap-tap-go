import Button from '../Button';
import { PiWalletBold } from "react-icons/pi";
import './index.css';

const IIWallet = () => {
    return (
        <button>
            <div className='wallets'>
                <img src="/assets/images/ii.png" alt='internet-identity' width={36} height={36} />
                <span>Internet Identity</span>
            </div>
        </button>
    )
}

const NFIDWallet = () => {
    return (
        <button>
            <div className='wallets'>
                <img src="/assets/images/nfid.png" alt='nfid' width={36} height={36} />
                <span>NFID</span>
            </div>
        </button>
    )
}

const ConnectWallet = () => {
    return (
        <div className='connect-wallet group'>
            <Button size='lg'>
                <div className='wallet-content'>
                    <PiWalletBold />
                    <span>Connect Wallet</span>
                </div>
            </Button>
            <div className='wallet-popover'>
                <div className="caret"></div>
                <p>Connect your wallet</p>
                <div className='wallet-popover-content'>
                    <IIWallet />
                    <NFIDWallet/>
                </div>
            </div>
        </div>
    )
}

export default ConnectWallet;