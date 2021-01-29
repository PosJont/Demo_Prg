/*
string 第二題 
使用 string 輸入 a b c d 對應到 1 2 3 4 
*/
import java.util.Scanner;
class String_ex02{
    public static void main(String[] args) {
        //String []str = {"a","b","c","d"};
        Scanner src =new Scanner(System.in);
        String str[]=new String[5]; 
        
        for(int i =0;i<str.length;i++ )
        {
            str[i]= src.next();
            switch(str[i])
            {
                case "a":System.out.println(1);break;
                case "b":System.out.println(2);break;
                case "c":System.out.println(3);break;
                case "d":System.out.println(4);break;
                default: System.out.println("not data");break;
            }
        }
        src.close();
    }
}