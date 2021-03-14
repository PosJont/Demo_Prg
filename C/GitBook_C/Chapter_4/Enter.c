#include <stdio.h>
#include <conio.h>
int main(int argc, char const *argv[])
{
    int num = 0;
    while (getche() != '\r')
    {
        ++num;
    }
    printf(" 次數>> %d", num);
    return 0;
}
