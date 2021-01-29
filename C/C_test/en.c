#include<stdio.h>
#include<stdlib.h>


int main(){
    FILE *fp1,*fp2; //start valus

    fp1 = fopen("dat.txt","r");
    fp2 = fopen("out.txt","w");//auto one file
    char name[15];
    float s1,s2,s3; //score
    float avg,sum;


    while (fscanf(fp1,"%s %f %f %F",name,&s1,&s2,&s3)!=EOF);
    {
        //sum=s1+s2+s3;
        //avg=sum/3;
        //printf("%5.1f %5.1f\n",sum,avg);
        printf("%-10s %5.1f %5.1f %5.1f \n",name,s1,s2,s3);
        fprintf(fp2,"%-10s %5.1f %5.1f %5.1f\n",name,s1,s2,s3);
    }

    fclose(fp1);
    fclose(fp2);
    return 0;
}