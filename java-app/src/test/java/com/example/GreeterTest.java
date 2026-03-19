package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class GreeterTest {

    @Test
    public void testGreet() {
        Greeter greeter = new Greeter("Java");
        assertEquals("Hello, Java!", greeter.greet());
    }

    @Test
    public void testGetName() {
        Greeter greeter = new Greeter("Alice");
        assertEquals("Alice", greeter.getName());
    }
}
