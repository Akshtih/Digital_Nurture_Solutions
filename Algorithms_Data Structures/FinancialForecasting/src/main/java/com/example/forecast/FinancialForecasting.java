package com.example.forecast;

public class FinancialForecasting {

    public static double predictFutureValueRecursive(double currentValue, double growthRate, int periods) {
        if (periods <= 0) {
            return currentValue;
        }
        double nextValue = currentValue * (1 + growthRate);
        return predictFutureValueRecursive(nextValue, growthRate, periods - 1);
    }

    public static double predictFutureValueIterative(double currentValue, double growthRate, int periods) {
        double value = currentValue;
        for (int i = 0; i < periods; i++) {
            value = value * (1 + growthRate);
        }
        return value;
    }
}
