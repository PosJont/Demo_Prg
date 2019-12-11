import java.util.*;

class Condtional
{
    public static void main(String[] args) 
    {
        Scanner src = new Scanner(System.in);
        int Ans_num =(int) (Math.random()*99)+1; 
        System.out.print("enter guess number (1~100):");
        int in_p;
        int round=0,temp1=0,temp2=100;

        while(round !=50)
        {   
            in_p = src.nextInt();
            round++;
            if(in_p == Ans_num)
            {
                System.out.printf("第%d次猜中數字 %d !!",round,in_p);
                break;
            } 
            else 
                if(Ans_num > in_p )
                {
                    round++;
                    temp1 = in_p;
                    System.out.printf("number ( %d ~ %d ):",temp1,temp2);
                }
                else 
                {
                    round++;
                    temp2=in_p;
                    System.out.printf("number ( %d ~ %d ):",temp1,temp2);
                }
        }
    }
}