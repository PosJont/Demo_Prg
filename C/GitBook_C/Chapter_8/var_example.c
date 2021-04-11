#include <stdio.h>
#include <stdlib.h>
void fun1();
int times = 1; /* 全域變數 */

int main(int argc, char *argv[])
{
    for (times = 1; times <= 5; times++) /* 呼叫 fun1()函式 5 次 */
    {
        fun1();
    }
    printf("\n");
    system("PAUSE");
    return 0;
}
void fun1()
{
    int a_var = 10;         /* 自動變數 */
    static int l_stat = 10; /* 局部靜態變數 */
    printf(" \n %d. a_var1=%d l_stat= %d \n",times,a_var++,l_stat++); 
}