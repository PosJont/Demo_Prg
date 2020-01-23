/*
寫出9 * 9 乘法表
*/
class J99{
    public static void main(String[] args) {
        System.out.println("9*9 乘法表列\n");

     // for(int i=0;i<9;i+=5,System.out.println()) 
     //{
        for(int j=1;j<10;j++,System.out.println())
            for(int k=1;k<10;k++)
                System.out.printf("%3d*%2d=%2d",k,j,j*k);
                
      //}    
       
    }
}