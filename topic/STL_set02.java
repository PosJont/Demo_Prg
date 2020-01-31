import java.util.*;

class STL_set02{
    public static void main(String[] args) {
        HashSet<String> hset = new HashSet<>();
        int order = 1; 
        String str ;
        Scanner src = new Scanner(System.in);
        
        System.out.println("輸入四個不重複英文字");
        while(order<=4){
            System.out.println("No."+order+" a String..");
            System.out.print(">>");
            str = src.nextLine();
            if(hset.add(str))           
                order++;
            else
                System.out.println(" "+str+"重複英文字!!");
        }
        System.out.println("4個字串分別為 >>");
        System.out.println(hset);
        System.out.println("輸入你要的英文字");
        String findstr = src.nextLine();
        if(hset.contains(findstr))
            System.out.println(" "+findstr+ "字串在集合物件裡!!");
        else
            System.out.println(" "+findstr+ "字串不存在集合物件裡!!");
        System.out.print("Delete ?? >>");
        String findstr02 = src.nextLine();
        if(hset.remove(findstr02))
            System.out.println("delete : >>"+findstr02);
        else   
            System.out.println(" "+findstr02+"字串不存在集合物件裡");

        System.out.println("目前集合物件 : "+hset.size()+", type :"+hset);
        src.close();
    }
}