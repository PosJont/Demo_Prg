class ex01
{
    public static void main(String[] args) 
    {
        for(int i=1;i<10;i++)
        {
            for(int j=1;j<10;j++)
            
                System.out.printf("%-1d * %-1d = %-4d",j,i,i*j);
            
            System.out.println("\t");
        }
    }
}