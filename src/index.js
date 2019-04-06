export default (val) => {
  if (val === null) return false;
  else if (val === !!val) return false;
  else if (val && val.trim) val = val.trim();
  if (val === '') return false;
  return !isNaN(val+0) && isFinite(val);
};
