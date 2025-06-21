package financialforecasting;

public class Main {
    public static void main(String[] args) {
        double[] pastRevenues = {100000, 110000, 120000}; 
        int forecastYears = 3;
        double lastYear = pastRevenues[pastRevenues.length - 1];

        System.out.println("=== Straight-Line Growth Forecast (10%) ===");
        double[] growthForecast = ForecastCalculator.forecastWithGrowthRate(lastYear, 0.10, forecastYears);
        for (int i = 0; i < forecastYears; i++) {
            System.out.printf("Year %d: ₹%.2f\n", i + 1, growthForecast[i]);
        }

        System.out.println("\n=== Moving Average Forecast ===");
        double movingAvg = ForecastCalculator.forecastWithMovingAverage(pastRevenues);
        for (int i = 0; i < forecastYears; i++) {
            System.out.printf("Year %d: ₹%.2f\n", i + 1, movingAvg);
        }

        System.out.println("\n=== Scenario-Based Forecasts ===");
        ForecastScenario[] scenarios = ForecastCalculator.scenarioForecast(lastYear, forecastYears);
        for (ForecastScenario scenario : scenarios) {
            scenario.printForecast();
        }
    }
}
