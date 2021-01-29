import java.util.Scanner;

class diamond{
    public static void main(String[] args) 
    {
        Scanner src = new Scanner(System.in);
        String use_menu;
        diamond dia = new diamond();

        do{
            System.out.println(">> A. 左三角形 <<");
            System.out.println(">> B. 倒左三角形 <<");
            System.out.println(">> C. 右三角形 <<");
            System.out.println(">> D. 菱形角形 <<");
            System.out.println(">> E. 正三角形 <<");
            System.out.println(">> 0. 離開     <<");
            use_menu = src.next();
            switch(use_menu.toUpperCase())
            {
                case "A":dia.diamod_type01(); break;
                case "B":dia.diamod_type02();break;
                case "C":dia.diamod_type03();break;
                case "D":dia.diamod_type04();break;
                case "E":dia.diamod_type05();break;
                case "0":System.out.print("exit ...");break;
                default:System.out.println("ENTER EORRO !!!\n");
            }
        }while(!use_menu.equals("0"));
        src.close();
    }

//-------------------sub-------------------------//
    void diamod_type01()
    {
    int i,j;
    for(i=0;i<5;i++,System.out.println())
        for(j=0;j<i+1;j++)
            System.out.print("*");
            System.out.println();
    }

    void diamod_type02()
    {
        int i,j;
        for(i=0;i<5;i++,System.out.println())
            for(j=i;j<5;j++)
                System.out.print("*");
                System.out.println();
    }

    void diamod_type03(){
        int i,j,k;
        System.out.println();
        for(i=0;i<5;i++,System.out.println())
        {
            for(j=0;j<5-i;j++)
                System.out.print(" ");
            for(k=0;k<i+1;k++)
                System.out.print("*");
        }
    }
    void diamod_type04(){
        int i ,j,k;
        for(i=0;i<5;i++)
        {
            for(j=0;j<5-i;j++)
                System.out.print(" ");
            for(k=0;k<i;k++)
                System.out.print(" *");
            System.out.println();
        }
        for(i=0;i<5;i++)
        {
            for(k=0;k<i;k++)
                System.out.print(" ");
            for(j=0;j<5-i;j++)
                System.out.print(" *");
            System.out.println();
        }
        System.out.println();
    }
    void diamod_type05(){
        int i,j,k;
        for(i=0;i<=5;i++)
        {
            for(j=0;j<5-i;j++)
                System.out.print(" ");
            for(k=0;k<i;k++)
                System.out.print(" *");
            System.out.println();
        }
        System.out.println();
    }
    //----------------------------//
}

