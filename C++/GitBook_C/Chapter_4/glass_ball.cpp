#include <iostream>
#include <cstdlib>
using namespace std;

void main()
{
    int glass=50; //Glass ball
    int take_ball; 
    int who =1;

    printf("Each person can only take 1-3 glass balls...\n");

    while(1)
    {
        cin >> take_ball;
        if(take_ball!=1)
        {
            printf("Wrong input format, please try again...\n");
            fflush(stdin);
        }
        else
        {
            if(take_ball>=1 && take_ball<=3)
            {
                glass-=take_ball;
                cout<< glass <<" glass balls left";
                who++;
                if(who==3) who=1;
                if(glass<=0 || glass==1) {cout<<"loser : "<< who <<"\n";break;} 
            }
            else{printf("Wrong input format, please try again...\n");}
        }
    }
    
}