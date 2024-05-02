const excellentCoffees = [
  { roaster: "Man versus Machine", lastRecommendedBy: "holgergp" },
  { roaster: "Five Elephant", lastRecommendedBy: "spittank" },
  { roaster: "The Barn", lastRecommendedBy: undefined },
];

export function filterOutEmptyValues() {
  const recommenders = excellentCoffees
    .map((coffee) => coffee.lastRecommendedBy)
    .filter((recommender) => recommender !== undefined);

  for (const recommender of recommenders) {
    recommender.toUpperCase();
  }
}


const isNumber = (x: unknown) => typeof x === 'number';