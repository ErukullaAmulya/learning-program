import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {
    @Test
    public void testVariousAssertions() {
        assertTrue(10 > 1);
        assertFalse(1 > 10);
        assertEquals("JUnit", "JUnit");
        assertNotNull(new Object());
        assertNull(null);
    }
}
