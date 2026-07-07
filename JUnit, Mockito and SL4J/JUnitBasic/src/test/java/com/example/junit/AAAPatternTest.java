package com.example.junit;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AAAPatternTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        calculator = null;
    }

    @Test
    public void testAddition() {
        int result = calculator.add(5, 3);
        assertEquals(8, result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(10, 4);
        assertEquals(6, result);
    }

    @Test
    public void testMultiplication() {
        int result = calculator.multiply(6, 7);
        assertEquals(42, result);
    }

    @Test
    public void testDivision() {
        int result = calculator.divide(20, 4);
        assertEquals(5, result);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivisionByZeroThrows() {
        calculator.divide(10, 0);
    }
}
