import { MerkleTree } from 'merkletreejs';
import { utils } from 'ethers';

export function getMerkleRoot(addresses) {
	const tree = new MerkleTree(
		addresses.map(utils.keccak256),
		utils.keccak256,
		{ sortPairs: true },
  );
  return `0x${tree.getRoot().toString('hex')}`;
}

export function getMerkleProof(addresses, address) {
  const tree = new MerkleTree(
    addresses.map(utils.keccak256),
    utils.keccak256,
    { sortPairs: true },
  );
  const hashedAddress = utils.keccak256(address);
  return tree.getHexProof(hashedAddress);
}

