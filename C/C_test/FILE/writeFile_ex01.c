#include <stdio.h>
#include <stdlib.h>


int main(int argc, char const *argv[])
{
    FILE *f1;
    f1 = fopen("test.txt","wt");
    fprintf(f1  , "Helle File !! \n");
    fclose(f1);
    system("start test.txt");
    //system("echo Write 'Test.txt' Content Done");
    //system("PAUSE");
    return 0;
}
