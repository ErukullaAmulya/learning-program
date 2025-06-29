import static org.mockito.Mockito.*;
import org.junit.Test;

public class MockingTest {
    @Test
    public void testMocking() {
        java.util.List<String> mockedList = mock(java.util.List.class);
        when(mockedList.get(0)).thenReturn("first element");
        System.out.println(mockedList.get(0));
    }
}
