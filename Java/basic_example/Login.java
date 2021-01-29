import java.io.*;
public class Login
{
    public static void main(String[] args) 
    {
        //Scanner sca = new Scanner(System.in);
        System.out.println("reader file name");
        System.out.print("->");
        BufferedReader reader= new BufferedReader(new InputStreamReader(System.in));
        String strfile = reader.readLine();
        FileReader fr =new FileReader(strfile);

        System.out.println("\n txt file" + strfile +"is content");

        // System.out.println(age);
        int ch; 
        while((ch=fr.read()) != -1)
        {
            System.out.println((char)ch);
        }

        fr.close();
    }
}