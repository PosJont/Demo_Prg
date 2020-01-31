import java.util.*;

class STL_set01{
    public static void main (String agev[]){
        Scanner src =new Scanner(System.in);
        
        System.out.println("--文字接龍遊戲--不可重複!!");
        System.out.println("--0 EXIT --");
        System.out.print(">>");
        String str = src.next();

        HashSet<String> hset = new HashSet<>();
        while(!str.equals("0"))
        {
            if(!hset.add(str))
            {
                System.out.print("失敗!!");
                break;
            }
            System.out.print(">>");
            str=src.next();
        }
        System.out.println("\n已經輸入過的詞 :"+ hset);
        src.close();
    }
}