import java.io.*;

class outfile02{
    public static void main(String[] args) throws IOException{
       // FileOutputStream fp1 = new FileOutputStream(file);
       BufferedOutputStream fp1 = new BufferedOutputStream(new FileOutputStream("file/out.txt"));
        String str1 = "40331207	±äÃh¤É\n40331208	¼Ú¶§¦t®x\n40331209	½²©y®m\n";
        byte b[] =str1.getBytes();
        for(int i=0;i<b.length;i++){
            fp1.write(b[i]);
        }
       fp1.close();
    }
}