package com.example.forecast;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FinancialForecastingTest {

    private static final double DELTA = 0.001;

    @Test
    public void testRecursiveForecasting() {
        assertEquals(1331.0,
                FinancialForecasting.predictFutureValueRecursive(1000.0, 0.10, 3),
                DELTA);
    }

    @Test
    public void testIterativeForecasting() {
        assertEquals(1331.0,
                FinancialForecasting.predictFutureValueIterative(1000.0, 0.10, 3),
                DELTA);
    }

    @Test
    public void testZeroPeriods() {
        assertEquals(5000.0,
                FinancialForecasting.predictFutureValueRecursive(5000.0, 0.05, 0),
                DELTA);
        assertEquals(5000.0,
                FinancialForecasting.predictFutureValueIterative(5000.0, 0.05, 0),
                DELTA);
    }
}
