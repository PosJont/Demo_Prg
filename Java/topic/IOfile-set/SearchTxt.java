import java.io.*;

public class SearchTxt
{
    public static void main(String[] args) throws IOException 
    {
        int i;
        String Type_Name[] =new String[5];
        FileReader fr = new FileReader("ALLfile/Name.txt");
        BufferedReader br = new BufferedReader(fr);
        while(br.ready())
        {
            for (i = 0; i <7; i++)
            {
                Type_Name[i]=br.readLine();
                if(Type_Name[i]==null) break;
                System.out.println(Type_Name[i]);
            }
        }
        fr.close();
    }//main
}