import java.util.logging.*;

public class LoggingDemo {
    private static final Logger logger = Logger.getLogger(LoggingDemo.class.getName());

    public static void main(String[] args) {
        logger.setLevel(Level.ALL);
        logger.severe("This is a SEVERE (error) message");
        logger.warning("This is a WARNING message");
    }
}
