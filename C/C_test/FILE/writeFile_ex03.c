#include <stdio.h>

struct Person 
{
	char name[20];
	float height;
	float weight;
	int   age;
};

void main(void)
{
	struct Person p={"Peter", 180.0f, 80.0f, 25};
	FILE *file=fopen("people.bin","wb");
	fwrite(&p, sizeof(struct Person), 1, file);

	printf("%s %f  %f  %d",p.name ,p.height ,p.weight ,p.age);
	fclose(file);
}