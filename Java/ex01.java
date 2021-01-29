import java.util.*;
import java.lang.*;

class ex01{

    void topic_01(){
        System.out.println("no.1");
        String str="a,b,c,d,f,g,h,i,j,k,l";
        String ss[]=str.split(",");
        for(String ans:ss)
         System.out.print(ans+"1"+" ");   
    }
    void topic_02(){
        System.out.print("no.2");
        int i,j,k;
        for(i=0;i<5;i++)
        {
            for(j=0;j<i;j++)
                System.out.print("*");
                System.out.println();
        }
    }

    void topic_03(){
        int i,j,k;
 
            for(j=1;j<10;j++)
            {
                for(k=1;k<10;k++){
                    System.out.printf("%2d*%1d=%2d",j,k,k*j);
                }
                System.out.println();    
            }
            System.out.println();
        
    }
    public static void main(String[] args) {
       ex01 example =new ex01();
       // example.topic_01();
       // System.out.println('\n');
       // example.topic_02();    
        System.out.println('\n');
        example.topic_03();
    }
}