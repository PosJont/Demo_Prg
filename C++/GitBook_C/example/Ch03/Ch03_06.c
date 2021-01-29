#include <stdio.h>

int main(void)
{
  double lightSpeed=299792.458;
  
  // 以小數點方式來表示浮點數 
  printf("真空中光速為每秒 %f 公里\n",lightSpeed);
  
  // 以科學符號方式來表示浮點數 
  printf("也就是 %e 公尺\n",lightSpeed*1000);

  return 0;
}
