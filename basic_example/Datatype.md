class Datatype
{
    public static void main(String[] args) 
    {
        /*--------------------------------- */
        //example
        int age;    //合法變數名稱
        int AGE;    //合法變數名稱
        int Age;    //合法變數名稱
        int No1;    //合法變數名稱
        int No11111111; //合法變數名稱
        int _Total; //合法變數名稱
        age = 19;   //合法變數名稱
        /*---------------------------------*/
        int i;
        char ch,c;
        float f1 = 0.01f,f2 = 0.99f;
        double r= 3.0;
        final double PI=3.14;
        byte b;
        short s;
        /* content */
        ch = 'a';
        i = ch;
        System.out.println(ch + " 的字碼為：" + i);
        /*--------------------------------------- */
        ch = 'b';  // 指定為單一英文字母
        System.out.println("變數 ch 的內容為：" + ch);
        ch = '中'; // 指定為單一中文字
        System.out.println("變數 ch 的內容為：" + ch);
        ch = 98;   // 指定為數值
        System.out.println("變數 ch 的內容為：" + ch);
        /*-------------------------------------------*/
        ch = '\u5b57'; // 16 進位 5b57 是 '字' 的 Unicode 編碼
        System.out.println("變數 ch 的內容為：" + ch);
        
        ch = '\\';     // 反斜線 \
        System.out.println("變數 ch 的內容為：" + ch);
        
        ch = '\'';     // 引號 '
        System.out.println("變數 ch 的內容為：" + ch);
        /*-------------------------------------------*/
        System.out.println("圓周 :"+PI*r*2); 
        System.out.println("面積 :"+PI*r*r);
        /*------------------------------------------- */
        f1 = f1 + f2; // 加法運算
        System.out.println("計算的結果是：" + f1);
        /*--------------------------------------------*/
        b = 122;
        s = 233;
        c = 233;
        System.out.println("變數 b 的內容是：" + b);
        System.out.println("變數 s 的內容是：" + s);
        System.out.println("變數 c 的內容是：" + c);
        s= 0;
        /*------------------------------------------- */
        i = 0b10011001 ; // int 型別, 2進位 
        System.out.println("2進位  0b10011001 = " + i);
        
        long l = 0XADEF; // long 型別, 16進位 
        System.out.println("16進位 0XADEF     = " + l);
        s = 01357; // short 型別, 8進位
        System.out.println("8進位  01357      = " + s);
        /*-------------------------------------------*/
       /* 
        int 3age;   // ????H??r?}?Y
        int #AGE;   // ?????? "#"  ?r?? 
        int A#GE;   // ?????? "#"  ?r??
        int while;  // ??????????r
        int true;   // ?????????O?d???r???`??
        3age = 19;
        System.out.println("number is:" + 3age);
        */
    }//main();
}//class