#include <stdlib.h>
#include <stdio.h>
#include <math.h>


int main(){
    int number = 0; //user input content
    scanf("%d",&number);
    printf("number =%d",abs(changeByHEX(number,0)));
    return 0;
}

int changeByHEX(int num,int index){
    int even = 0;
    int odd = 0;
    int data=0;
    char checkData='F';
    while (checkData !='T')
    {
        if(num %10 ==0){
            checkData ='T';
            return data =  even - odd;
        }
        else{
            switch(index){
                case 1 :
                    odd  += (num % 10) ;
                    index =0;
                    break;
                case 0 :
                    even  += (num % 10) ;
                    index=1;
                    break;
            }
            num /=10;
        }
    }
    return 0;
}