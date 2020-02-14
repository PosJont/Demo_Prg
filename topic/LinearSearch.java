import java.util.Scanner;

class LinearSearch{
    public static void main(String[] args) {
        int []Adata = {5,3,1,2,10,9,4,8,7,6};
        Scanner src = new Scanner(System.in);
        


        System.out.print("enter search >>");
        int search =src.nextInt('\n');
        int num=-1;
        for(int i=0;i<Adata.length;i++){
            if(Adata[i]==search){
                num =i;break;
            }
        }
        System.out.println("=========================");
        if(num==-1)
            System.out.println("NOT DATA");
        else
            System.out.println(search+">> no."+ num);
        src.close();
    }
}