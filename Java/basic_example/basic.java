import java.util.*;

class basic //¥¼¥[public class __ÀÉ¦W__{}®É¡A¹w³]¬Opublic
{
    static int NUM=5;
    public static void main(String[] args) 
    {
		/* ¨ì¤W­±³o¨â¦æ¬°¤îm¬O©T©wªºµ{¦¡°©¬[*/
        // ¦b main() ¤èªk¤¤´N¬O§Ú­Ì­n°õ¦æªºµ{¦¡
        int i  = 0,sum=0; 
        float Average=0;
        int  score1=60,score2=70,score3=80,score4=85,score5=90;
        int[] Score=new int []{60,70,80,85,90};

        //output
        System.out.printf("==================== \n");
        System.out.printf("+hello java world!!+ \n");
        System.out.printf("+    Â²©ö¿é¥X      +  \n");
        System.out.printf("==================== \n");
        System.out.println(i);
        
        //intput
        Scanner src  = new Scanner(System.in);
        i  = src.nextInt();                     //next() > nextByte() > nextLong() > nextShort () > nextBoolean() > nextDouble() > nextFloat(); 
        System.out.println("§A¿é¤J¬O"+i);
        
        //¥[Á`
        Average = (float)(score1+score2+score3+score4+score5)/5 ;  //±j¨îÂà´«float
        System.out.println("¥­§¡¦¨ÁZ¡G" + Average);

        //°}¦C¥[Á`
        Average = 0;

        for (i = 0; i<NUM;i++ )                
            sum+=Score[i];
        Average=(float)(sum/NUM);
        System.out.println("¥­§¡¦¨ÁZ¡G" + Average);

        src.close();
    }
}