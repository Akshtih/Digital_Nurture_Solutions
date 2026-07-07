package com.example.singleton;

import org.junit.Test;

import static org.junit.Assert.assertSame;

public class LoggerTest {

    @Test
    public void testSingletonInstance() {
        Logger first = Logger.getInstance();
        Logger second = Logger.getInstance();
        assertSame(first, second);
    }

    @Test
    public void testLogFunctionality() {
        Logger.getInstance().log("Hello from the singleton");
    }
}
