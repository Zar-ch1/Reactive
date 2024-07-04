public class test
{
    public static void main(String[] args)
    {
        System.out.println("Hey Myat, I love you more than your think");
        
        assertThrows(ArithmeticException.class, () -> {
            int result = 0 / 0;
        });
        System.err.println(1/0);
    }
}