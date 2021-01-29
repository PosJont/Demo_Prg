import java.util.*;
/* 
空間切割
	內容
		>>對任意正整數n，空間中的n 個平面最多可將空間切成幾個區域？
		
	範例輸入
	1
	2
	範例輸出
	2
	4
提示：(nnn+5n+6)/6
*/
class Spatial{
    public static void main(String[] args) {
        Scanner src = new Scanner(System.in);
        System.out.println("enter number ?");
        int n = src.nextInt();
        int a = src.nextInt();
        System.out.println(">>"+(n*n*n+5*n+6)/6);
        System.out.println(">>"+(a*a*a+5*a+6)/6);

        src.close();
    }
}