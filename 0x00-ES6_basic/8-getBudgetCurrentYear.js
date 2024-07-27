function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {};
    const inc = `income-${getCurrentYear()}`;
    const gd = `gdp-${getCurrentYear()}`;
    const bud = `capita-${getCurrentYear()}`;

    budget[inc] = income;
    budget[gd] = gdp;
    budget[bud] = capita;

    return budget;
}
