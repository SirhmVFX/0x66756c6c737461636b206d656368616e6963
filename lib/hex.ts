export const SERIAL_HEX = "0x66756c6c737461636b206d656368616e6963";
export const SERIAL_DECODED = "fullstack mechanic";

export type HexByte = {
  hex: string;
  char: string;
  index: number;
};

export const HEX_BYTES: HexByte[] = SERIAL_HEX.slice(2)
  .match(/.{2}/g)!
  .map((hex, index) => ({
    hex,
    char: String.fromCharCode(parseInt(hex, 16)),
    index,
  }));

export function decodeSerial(hex: string) {
  const raw = hex.startsWith("0x") ? hex.slice(2) : hex;
  return raw
    .match(/.{2}/g)
    ?.map((b) => String.fromCharCode(parseInt(b, 16)))
    .join("") ?? "";
}
