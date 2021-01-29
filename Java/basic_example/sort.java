import java.util.*;

class sort{
    public static void main(String[] args) {
        int i,j,k=0;
        int num[]=new int[5];
        
        Scanner src = new Scanner(System.in);
         
        for(i=0;i<5;i++)
            num[i]= src.nextInt();

       //sort select
       for(i=0;i<5;i++)
       {
        for(j=i+1;j<5;j++)
            if(num[i]>num[j])
            {
                k = num[i];
                num[i] = num[j];
                num[j]=k;
            }
       }
        
        for(i=0;i<5;i++)
            System.out.print(num[i]+" ");
        src.close();
    }
}