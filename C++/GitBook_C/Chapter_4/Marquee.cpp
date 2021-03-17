#include <iostream>
#include <cstdlib>
#include <conio.h>
#include <windows.h>

using namespace std;

int  main()
{
    string letter ="C++ Language ~!!";
    int i =61 , j ; 
    while (1)
    {
        if(kbhit() != 0){break;}
        for(j = 1 ;j <= i ;j++){
            cout<<" ";
        }
        cout<<letter;
        Sleep(250);          
        if(i >1 ) i--; else i=61;
        system("cls"); 
    }
    return 0;
}