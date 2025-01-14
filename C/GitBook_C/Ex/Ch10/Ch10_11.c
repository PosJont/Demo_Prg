#include <stdio.h>
int find_max(int[], int);

int main(void)
{
  int number1[] = {49,62,199,23,57};
  int number2[] = {15,86,72,65,46,44,66,33};
  
  // 呼叫並將陣列值傳到判斷最大值的函式 
  printf("number1[] 最大值為 %d\n",find_max(number1, 5));
  printf("number2[] 最大值為 %d\n",find_max(number2, 8));

  return 0;
}

int find_max(int number[], int size) // 判斷最大值的函式 
{
  int max=0,i;
    
  for (i=0;i<size;i++)  // 逐一比較每個元素值 
    if(number[i]>max) max=number[i];

  return max;
}
