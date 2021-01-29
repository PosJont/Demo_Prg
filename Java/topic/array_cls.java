class array_cls{
    public static void main(String[] args) 
    {
        String[] name = new String[] {"Bryan","Benjamin","Dakota","Marty","Hannah"};
        int[] age = new int[] {56,45,51,48,35};
        int temp=0;
        try
        {
            for(int i =3; i>=0; i--)
            {
                for(int j = 0; j<=i;j++)
                {
                    if(age[j]>age[j+1])
                    {
                        temp = age[j];
                        age[j]=age[j+1];
                        age[j+1]=temp;
                    
                        String type = name[j];
                        name[j]=name[j+1];
                        name[j+1]=type;
                    }
                }
            }

        }
        catch(Exception e)
        {}

        for(int k: age) System.out.print(k+" ");
        System.out.println();
        for(String k: name) System.out.print(k+" ");
    }
}