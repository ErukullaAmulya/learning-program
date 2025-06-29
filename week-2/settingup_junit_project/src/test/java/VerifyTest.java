import static org.mockito.Mockito.*;
import org.junit.Test;

public class VerifyTest {
    @Test
    public void testVerifyInteractions() {
        java.util.List<String> mockList = mock(java.util.List.class);
        mockList.add("one");
        mockList.clear();
        verify(mockList).add("one");
        verify(mockList).clear();
    }
}
