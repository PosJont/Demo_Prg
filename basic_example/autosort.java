import java.util.*;

class autosort 
{
    public static void main(String[] args) 
    {
        System.out.printf("==================== \n");
        System.out.printf("=     auto sort    = \n");
        System.out.printf("=                  = \n");
        System.out.printf("=      Example     = \n");
        System.out.printf("==================== \n");

        Scanner src = new Scanner(System.in);
        int a[] = new int[5];
        
        Arrays.fill(a,0);
        System.out.printf("Pls enter 5 number > ");
        
        for(int i =0;i<5;i++)
            a[i] = src.nextInt();
        
        Arrays.sort(a);
        
        for(int n :a)
            System.out.print(n+" ");
        src.close();
    }
}