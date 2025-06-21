package financialforecasting;

public class ForecastCalculator {

    // Method 1: Straight-line growth forecast
    public static double[] forecastWithGrowthRate(double lastYearRevenue, double growthRate, int years) {
        double[] forecast = new double[years];
        for (int i = 0; i < years; i++) {
            lastYearRevenue += lastYearRevenue * growthRate;
            forecast[i] = lastYearRevenue;
        }
        return forecast;
    }

    // Method 2: Simple moving average
    public static double forecastWithMovingAverage(double[] pastRevenues) {
        double total = 0;
        for (double rev : pastRevenues) {
            total += rev;
        }
        return total / pastRevenues.length;
    }

    // Method 3: Scenario-based forecast
    public static ForecastScenario[] scenarioForecast(double lastYearRevenue, int years) {
        double[] growthRates = {0.05, 0.10, 0.15}; // Worst, Base, Best
        String[] labels = {"Worst", "Base", "Best"};

        ForecastScenario[] scenarios = new ForecastScenario[3];

        for (int i = 0; i < 3; i++) {
            double[] projection = forecastWithGrowthRate(lastYearRevenue, growthRates[i], years);
            scenarios[i] = new ForecastScenario(labels[i], projection);
        }
        return scenarios;
    }
}

