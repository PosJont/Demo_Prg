public class ex04 {
    public static void main(String[] args) 
    {
        String str ="a,b,c,d,e,f,g";
        String strA[] = str.split(",");
        for(String a :strA)
            System.out.print(a+"1 ");
    }
}