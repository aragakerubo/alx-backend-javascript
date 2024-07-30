export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  try {
    view.setInt8(position, value);
  } catch (e) {
    if (e instanceof RangeError) {
      throw new Error("Position outside range");
    } else {
      throw e;
    }
  }

  return view;
}
