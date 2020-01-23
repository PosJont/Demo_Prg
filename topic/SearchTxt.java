import java.io.*;
import java.util.*;
public class SearchTxt
{
    public static void main(String[] args) throws IOException 
    {
        int i;
        String Type_Name[] = {" "};
        FileReader fr = new FileReader("ALLfile\\Name.txt");
        BufferedReader br = new BufferedReader(fr);
        //Scanner src = new Scanner(System.in);
        //String sName = src.nextLine();
        //int input = src.nextInt();
        while(br.ready())
        {
            for (i = 0; i <7; i++)
            {
                Type_Name[i]=br.readLine();
                System.out.println(Type_Name[1]);

            }
        }
        //src.close();
        fr.close();
    }//main
}