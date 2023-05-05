const validateAmount = (amount, setAmt, prevAmount) => {
  if (
    (amount.charCodeAt(0) > 47 && amount.charCodeAt(0) < 58) ||
    (amount.charCodeAt(0) === 46 && !prevAmount.includes(amount)) ||
    amount.charCodeAt(0) === 66
  ) {
    if (amount.charCodeAt(0) === 66) {
      amount = prevAmount.substring(0, prevAmount.length - 1);
    } else {
      amount = prevAmount + amount;
    }
    setAmt(amount);
  }

  return 0;
};

export { validateAmount };
