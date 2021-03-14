#include <stdio.h>
int main(void)
{
    int option = 0;
    printf("===============================\n");
    printf("=---99 multiplication table---=\n");
    printf("===============================\n");
    do
    {
         printf( "請輸入以下選項\n");
         printf("1. C/C++   2.C#\n"); 
         printf("3. JAVA    4.Python\n"); 
         printf("0. exit \n >>"); 
         printf(option);

    } while (option != 0);
    return 0;
}