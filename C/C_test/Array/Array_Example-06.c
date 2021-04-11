#include <stdio.h>
#include <stdlib.h>
int main(void)
{

    int a[2][4][3] = {{{15, 50, 65}, {38, 94, 25}, {79, 44, 19}, {89, 54, 73}}, {{14, 90, 46}, {43, 23, 67}, {32, 56, 78}, {94, 78, 40}}};
    int i, j, c, d, e, max, x;
    max = a[0][0][0];
    //迴圈行數
    for (i = 0; i < 2; i++)
    {
        //迴圈列數
        for (j = 0; j < 4; j++)
        {
            for (x = 0; x < 3; x++)
            {
                if (max < a[i][j][x])
                {
                    max = a[i][j][x];
                    c = i;
                    d = j;
                    e = x;
                }
            }
        }
    }
    printf("最大數為：%d\n 高為：%d \n行號為：%d\n列號為：%d \n ", max, c, d, e); //下標從0開始
}