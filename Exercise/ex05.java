class Recur
{
    long power(int x ,int y)
    {
        if(y <=0) return 1;
        if(y%2 ==0) return power(x,y/2)*power(x, y/2);
        return x*power(x, y/2)*power(x, y/2);
    }

}


public class ex05 {
    public static void main(String[] args) 
    {
        Recur r = new  Recur();
        System.out.println(r.power(12,50));
    }
}