import java.util.*;

public class Search {
    public static int binary(int[] number, int des) {
        int low = 0; 
        int upper = number.length - 1; 
        int mid= 0;
        while(low <= upper) { 
            mid = (low+upper) / 2; 
            if(number[mid] < des) 
                low = mid+1; 
            else if(number[mid] > des) 
                upper = mid - 1; 
            else 
                return mid; 
        } 
        return -1; 
    }
    
    public static void main(String[] args) {
        int[] number = {1, 2, 3, 4, 6, 7, 8};
        Scanner src =new Scanner(System.in);
        System.out.print("enter number (Search):");
        int index=src.nextInt();
        int find = Search.binary(number, index);
        System.out.println(find >= 0 ? "你要搜尋數值 '"+number[find]+"' 數值於索引" + find : "找不到數值"); 

        src.close();
    }
} 