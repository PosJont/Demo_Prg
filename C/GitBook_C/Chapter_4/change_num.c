#include<stdio.h>

int main(){
    int change = 1234; 
    int befor_num[4]; 
    int multiple = 1000;
    for(int i = 0 ; i < 4 ;i++){
        befor_num[i] = change%10;
        change /=10;
    }
    for(int i = 0 ; i < 4 ;i++){
        change += befor_num[i] *multiple;
        multiple /=10;
    }
    printf("befor  >> %d", change);
}