it("should calculate the monthly rate correctly", function () {
  expect(
    calculateMonthlyPayment({ amount: 500000, years: 25, rate: 5 })
  ).toEqual("2922.95");
});

it("should return a result with 2 decimal places", function () {
  expect(
    calculateMonthlyPayment({ amount: 250000, years: 15, rate: 3.7 })
  ).toEqual("1811.86");
});

it("should return a result with a high interest rate", function () {
  expect(
    calculateMonthlyPayment({ amount: 100000, years: 15, rate: 30 })
  ).toEqual("2529.70");
});
