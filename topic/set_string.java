
class set_string{
    public static void main(String[] args) {
        String s = "a,b,c,d,e,f,g";
        String[] ss = s.split(",");
        for(int i=0;i<ss.length; i++){
            System.out.print(ss[i]+"1"+" ");
        }
    }
}