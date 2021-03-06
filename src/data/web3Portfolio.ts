import NftSummary from '../assets/work/web3/nftsummary.png';
import IcoSniperV1 from '../assets/work/web3/icosniperv1.png';
// import IcoSniperV2 from '../assets/work/web3/icosniperv2.png';
import MassMinting from '../assets/work/web3/massminting.png';
import FlashBotsRecovery from '../assets/work/web3/flashbotsrecovery.png';
import FlashClaim from '../assets/work/web3/flashclaim.png';
import BuidlGuild from '../assets/work/web3/buidlguild.png';
import BadgeDescription,
{
  typescript,
  flashbots,
  ganache,
  ethersjs,
  javascript,
  hardhat,
  solidity,
  react,
  foundry,
} from './badges';
import StatusDescription,
{
  inprogress,
  privaterepo,
  opensource,
} from './status';

export default interface Web3Project {
  title: string,
  description: string,
  badges: BadgeDescription[],
  statuses: StatusDescription[],
  repoLink?: string,
  image: string,
}

export const web3: Web3Project[] = [
  {
    title: 'Recovering $44k With FlashBots',
    description: 'Beating a wallet sweeping bot to recover $44k of unclaimed vested ICO tokens',
    badges: [flashbots, javascript, ethersjs],
    statuses: [opensource],
    repoLink: 'https://github.com/0xMouseLess/Flashbots-Recovery',
    image: FlashBotsRecovery,
  },
  {
    title: 'NFT Flash Claim',
    description: 'Long tail MEV strategy to claim airdrops by flash claiming NFT pools',
    badges: [flashbots, solidity, foundry, javascript, ethersjs],
    statuses: [privaterepo],
    repoLink: 'https://mirror.xyz/0x0000000000098341a924BD53454654A0dBBc4e43/KaJH_F5cZ76Yspi_oPhn0qP9WAcEm0ouZLxPjSJbEy4',
    image: FlashClaim,
  },
  {
    title: 'Mass Minting NFTs',
    description: 'Custom smart contract to Mass Mint NFTs in a single transaction',
    badges: [foundry, solidity],
    statuses: [opensource],
    repoLink: 'https://github.com/mouseless-eth/NFT-Mass-Minting',
    image: MassMinting,
  },
  {
    title: 'ICO Sniping Bot',
    description: 'Monitoring and buying a token as soon as liquidity is added on a DEX',
    badges: [ethersjs, ganache, javascript],
    statuses: [opensource],
    repoLink: 'https://github.com/0xMouseLess/Listing-Sniping-Bot',
    image: IcoSniperV1,
  },
  // {
  //   title: 'ICO Sniping Bot v2',
  //   description:'Implementing 1Inch\'s Router to v1 bot so now it works on all chains+exchanges',
  //   badges: [ethersjs, ganache, javascript, flashbots],
  //   statuses: [privaterepo],
  //   image: IcoSniperV2,
  // },
  {
    title: 'Builder in BuidlGuild',
    description: "Community of buidlers creating projects using scaffold-eth's dev stack",
    badges: [ethersjs, react, hardhat],
    statuses: [opensource],
    repoLink: 'https://buidlguidl.com/builders/0x0000000000098341a924BD53454654A0dBBc4e43',
    image: BuidlGuild,
  },
  {
    title: 'NFT summary creator',
    description: 'WebApp that produces clean reports of a user\'s NFT based on it\'s metadata',
    badges: [react, typescript, ethersjs],
    statuses: [opensource, inprogress],
    repoLink: 'https://github.com/mouseless-eth/doodles-profile',
    image: NftSummary,
  },
];
