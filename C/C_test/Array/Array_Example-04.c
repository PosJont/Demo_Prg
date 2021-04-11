#include<stdio.h>
#include<stdlib.h>
void search(int *search_Ctr, int target, int key);

void main (){
    int search_Ctr[] = {1,2,3,4,5,6,7,8,9,10};//初始內容
    int Ctr_Max = sizeof(search_Ctr)/sizeof(search_Ctr[0]); //陣列的長度
    int key = 0;int index = 0;  // key =需要搜尋的值  
    scanf("%d",&key);
    search(search_Ctr, Ctr_Max , key);
}

void search(int *search_Ctr, int target ,int key){
    int index = 0 ,low= 0, height = target-1 ;
    while (index < target)
    {
        int mid = (height + low) / 2 ;
        if(search_Ctr[mid]< key){
            low = mid+1;
        }
        else if(search_Ctr[mid] > key){
            height = mid-1;
        }
        else {
            printf("%d ",mid);
            break;
        }
        index++;
    }
    
}
