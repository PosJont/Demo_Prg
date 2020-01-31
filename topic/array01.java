class array01{
    public static void main(String[] args) {
        int a[]={20,30,40,50};
        int b[]={1,3,0,2};
        int temp[] = new int[4];
        for(int i=0;i<b.length;i++)
            temp[b[i]]= a[i];
         for(int i :temp)
            System.out.print(i+" ");
        System.out.println();
        //-----------------------------//
        int c[]={30,20,10,5,34};
        int temp2;
        for(int i = 0;i < c.length / 2;i++) {
            temp2 =c[i];
            c[i] = c[a.length - i];
            c[a.length - i ] = temp2;
        }
        for(int i : c)
            System.out.print(i + " ");
    }
}