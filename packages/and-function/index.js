export default function(...params) {
  return params.reduce((acc, n) => {
    return n && acc;
  }, true);
}
