import java.util.*;

class BinarySearch{
    public static void main(String[] args) {
        int[] arr = {93, 5, 3, 55, 57, 7, 2 ,73, 41, 91};
        Arrays.sort(arr); 
        Scanner src =new Scanner(System.in);
        int search =src.nextInt();

        int left = 0;
        int right =arr.length;
        int num=-1;
        do{
            int midNum =  arr.length/2;
            if(arr[midNum]==search)
            {
                num = midNum;
                break;
            }
            if(arr[midNum]>search){
                right = midNum-1;
            }
            else
                left = midNum+1;
        }while(left<=right);

        if(num==-1)
            System.out.println("NOT DATA");
        else
            System.out.println(search+">> no."+ num);

        src.close();
    }
}