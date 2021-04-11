#include<stdio.h>
#include<stdlib.h>

void main (){
    int search_Ctr[] = {6,1,7,2,8,3,8,4,9,5,10};//初始內容
    int Ctr_Max = sizeof(search_Ctr)/sizeof(search_Ctr[0]); //陣列的長度
    int key = 0;int index = 0;  // key =需要搜尋的值  
    scanf("%d",&key);

    while (index < Ctr_Max)
    {
        if(search_Ctr[index] == key){ printf("key is %d ",index); break;}
        index++;
        if(index>= Ctr_Max) {printf("Not key");}
    }
}