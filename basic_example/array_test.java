import java.util.*;

class array_test{
    public static void main(String[] args) {
        int score[]=new int[10];
        int i ;
        Scanner src = new Scanner(System.in);
        for(i = 0 ; i <5 ; i++)
            score[i] = src.nextInt();
        for(i = 0 ; i <5 ; i++)
            switch(score[i])
            {
                case 1:System.out.print("a ");break;
                case 2:System.out.print("b ");break;
                case 3:System.out.print("c ");break;
                case 4:System.out.print("d ");break;
                default:System.out.print("e ");break;
            }
        src.close();
    }
}