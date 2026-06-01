export const serializeStartup = (startup) => ({
  ...startup,
  totalInvestment: startup.totalInvestment.toString(),
  revenue: startup.revenue.toString(),
});
