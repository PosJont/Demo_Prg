import java.io.*;

class outfile{
    public static void main(String[] args) throws IOException {
        FileOutputStream fp1 = new FileOutputStream("file/write1.SM");
        FileOutputStream fp2 = new FileOutputStream("file/write2.txt",true);
        String str1 ="Hello World !! \n";
        String str2 ="Java SE10 !! \n";
        byte b1[]=str1.getBytes();
        byte b2[]=str2.getBytes();
        for(int i =0;i<b1.length;i++) {fp1.write(b1[i]);}
        for(int i =0;i<b2.length;i++) {fp2.write(b2[i]);}
        fp1.close();
        fp2.close();
     }
}