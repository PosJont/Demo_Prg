/*
string 第一題    
使用String="a,b,c,d,e...",改為輸出為a1,b2,c3,d4....
*/

class String_ex01{
    public static void main(String[] args) {
        String str = "a,b,c,d,e";
        String []ss=str.split(",");
        //------------第一種---------------//
        for(int i=0;i<ss.length;i++)
        {
            System.out.print(ss[i]+(i+1)+" ");
        }
        System.out.println();
        //------------第二種---------------//
        int num =0;
        for(String s1:ss){
            System.out.print(s1+(num+1)+" ");
        }   
    }
}