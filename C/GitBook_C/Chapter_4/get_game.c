#include <stdio.h>

int main(int argc, char const *argv[])
{
    int who = 1;
    int take_num = 0;
    int box = 50;
    while (1)
    {
        printf("play %d start get box >>", who);
        scanf("%d", &take_num);
        if (take_num > 3 || take_num < 0)
        {
            printf("box not get 3 up and not get 0 \n");
            continue;
        }
        box -=take_num;
        if(box == 0){
            printf("lose => play %d \n" , who);
            break;
        }

        if (who >= 2)
            who = 1;
        else
            ++who;
        printf("box %d  \n" , box);
    }
    return 0;
}
