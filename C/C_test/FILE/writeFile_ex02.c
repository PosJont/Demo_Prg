#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	FILE *input;
	FILE *output;
	char string[80]="987";

	input=fopen("test.txt","rt");
	output=fopen("outfile.txt","wt"); 

	if ( input==NULL )
	{
		printf("open file fail!\n");
		fprintf( output, "open file fail!\n");
		exit(0);
	}
	fscanf(input,"%s",string);

	fprintf( output, "%s\n",string);

	fclose(input);
	fclose(output);
	system("start outfile.txt");
	return 0;
}