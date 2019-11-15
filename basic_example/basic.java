import java.io.*;
import java.util.*;

class basic //未加public class __檔名__{}時，預設是public
{
    static int NUM=5;
    public static void main(String[] args) 
    {
		/* 到上面這兩行為止都是固定的程式骨架*/
        // 在 main() 方法中就是我們要執行的程式
        int i  = 0,sum=0; 
        float Average=0;
        int  score1=60,score2=70,score3=80,score4=85,score5=90;
        int[] Score=new int []{60,70,80,85,90};

        //output
        System.out.printf("==================== \n");
        System.out.printf("+hello java world!!+ \n");
        System.out.printf("+    簡易輸出      +  \n");
        System.out.printf("==================== \n");
        System.out.println(i);
        
        //intput
        Scanner src  = new Scanner(System.in);
        i  = src.nextInt();                     //next() > nextByte() > nextLong() > nextShort () > nextBoolean() > nextDouble() > nextFloat(); 
        System.out.println("你輸入是"+i);
        
        //加總
        Average = (float)(score1+score2+score3+score4+score5)/5 ;  //強制轉換float
        System.out.println("平均成績：" + Average);

        //陣列加總
        Average = 0;

        for (i = 0; i<NUM;i++ )                
            sum+=Score[i];
        Average=(float)(sum/NUM);
        System.out.println("平均成績：" + Average);


    }
}