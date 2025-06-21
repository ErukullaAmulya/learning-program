package financialforecasting;

public class ForecastScenario {
    private String label;
    private double[] projections;

    public ForecastScenario(String label, double[] projections) {
        this.label = label;
        this.projections = projections;
    }

    public void printForecast() {
        System.out.println("Scenario: " + label);
        for (int i = 0; i < projections.length; i++) {
            System.out.printf("Year %d: ₹%.2f\n", i + 1, projections[i]);
        }
        System.out.println();
    }
}
