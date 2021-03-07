//Map so each kid has the most candies

var kidsWithCandies = (candies, extraCandies) => candies.map((i) =>
  (i + extraCandies) >= Math.max(...candies))
