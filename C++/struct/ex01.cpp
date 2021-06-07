#include <iostream>
#include <cstdlib>
#include <string>

using  namespace std;
int main(int argc, char const *argv[])
{
    struct tel_book{
        string name;
        int age;
        string tel;
        
        void printdata(void){
            cout<< name <<'\t'
                << age  <<'\t'
                << tel  <<endl;
        }
    };
    struct tel_book telephone[3]={
        {"John",28,"04-2302"},
        {"Kate",23,"06-3402"},
        {"Issac",30,"04-8216"},
    };
    struct tel_book temp;
    
    
    cout<< " Data before sorting... " << endl;
    for(int i= 0 ; i < 3 ;i++)
        telephone[i].printdata();

    for(int i=1 ;i <=2;i++){
        for(int j=0;j<3-i;j++){
            if(telephone[j].age > telephone[j+1].age){
                temp = telephone[j];
                telephone[j] = telephone[j+1];
                telephone[j+1]=temp;
            }
        }
    }

    cout<< " Data After sorting... " << endl;
    for(int i= 0 ; i < 3 ;i++)
        telephone[i].printdata();

    return 0;
}
