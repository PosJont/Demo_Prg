#include<stdio.h>
#include<stdlib.h>

void main (){
    int money[2][4];
    int total=0;
    int i =0, j =0;

    do{
        while (j<4)
        {
            printf("The %d quarter's turnover of the %d branch ", i+1,j+1);
            scanf("%d",&money[i][j]);
            total +=money[i][j];
            j++;
        }
        i++; j =0;
    }while (i < 2 );
    printf("One year's total turnover>> %d", total);

}


