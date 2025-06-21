package singleton;
public class Main {
    public static void main (String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("App started");
        logger2.log("Performing operation");

        System.out.println(logger1 == logger2);  // true
    }
}
