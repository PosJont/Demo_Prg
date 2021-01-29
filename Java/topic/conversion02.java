import java.util.Scanner;

class conversion02{
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        String str = scn.next();
        if(str != null &&  str.matches("^[0.0-9.0]+$"))
        {
            double num = Double.parseDouble(str);
            System.out.println("輸入是數字！"+num);
        }
        else System.out.println("輸入值為字元 :"+str);
            
        scn.close();
    }
}