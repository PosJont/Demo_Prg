/*
EX_01: ¥~³¡©I¥sFILE 
*/

import java.io.*;

class fileOUT
{
    public static void main(String[] args)throws IOException
    {
        File file = new File("file//940307.SM");
        BufferedReader br = new BufferedReader(new FileReader(file));
        while(br.ready())
        {
            System.out.println(br.readLine());
        }
        br.close();
    }
}