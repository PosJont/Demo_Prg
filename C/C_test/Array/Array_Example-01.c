#include <stdio.h>

int main(int argc, char const *argv[])
{
    int m[7], total=0;
    for(int i = 0 ; i< 7 ; i ++){
        printf("輸入星期 %d 的花費",i+1);
        scanf("%d",&m[i]);
        total+=m[i];
    }
    printf("一星期花費:%d\n",total);

    return 0;
}
