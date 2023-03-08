export function shortenAddress(address: string) {
  const chars = 4;
  try {
    return `${address.substring(0, chars + 2)}...${address.substring(
      42 - chars,
    )}`;
  } catch (error) {
    console.log(error);
  }
}
