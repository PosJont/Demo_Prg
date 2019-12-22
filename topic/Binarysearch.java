import java.util.*;

class Binarysearch 
{
    public static void main(String[] args) 
    {
        int i,j ,temp;
        int aNum[] = new int[10];
        Scanner src = new Scanner(System.in);
        for(i = 0 ; i <9 ; i++)
            aNum[i] =(int)(Math.random()*100)+1;
        System.out.printf("before sort :");
        for(int a:aNum)
            System.out.printf("%6d",a);
        int n = aNum.length;
        for ( i = n-2;i>=0;i--)
            for(j = 0 ;j<=i ; j++)
                if(aNum[j]>aNum[j+1])
                {
                    temp = aNum[j];
                    aNum[j]=aNum[j+1];
                    aNum[j+1]=temp;
                }
        System.out.println();
        System.out.println();
        //---------------------------------------------//
        System.out.printf("after sort :");
        for(int a :aNum)
            System.out.printf("%6d",a);
        System.out.println();
        System.out.print("search (only number) :");
        int sNum = src.nextInt();
        int num =-1,low = 0,high=aNum.length-1,midnum=0;
        do
        {
            midnum =(low+high)/2;
            if(aNum[midnum] == sNum)
               {
                num = midnum; break;
               } 
            else if (aNum[midnum] >sNum)
               high = midnum -1;
            else 
               low =midnum+1;
        }while(low <= high);
        if(num ==-1)
            System.out.println("none '"+sNum+"' this number");
        else
            System.out.println("before search sort '"+sNum+"' is NO."+(num+1)+" number!!");

        src.close();
    }
}