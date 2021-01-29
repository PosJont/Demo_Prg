import java.util.Scanner;

class conversion{
    public static void main(String[] agve){
        System.out.println("----------------------\n");
        System.out.println("-使用 資料轉型 練習----\n");
        System.out.println("----------------------\n");
        Scanner src = new Scanner(System.in);
        int i = src.nextInt();
        //-------------------------------------------//
        System.out.println("輸入是(INT型態) "+i);
        
        byte by = (byte)i;
        System.out.println("(BYTE 內容):"+by);
       
        short sh = (short)i;
        System.out.println("(SHORT 內容):"+sh);
        
        String str =Integer.toString(i);
        System.out.println("(STRING 內容):"+str);

        src.close();       
    }
}