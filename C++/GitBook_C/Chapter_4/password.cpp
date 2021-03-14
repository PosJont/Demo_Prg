#include <iostream>
using namespace std;

int main()
{
    int password=0;int round = 1;
    while (1)
    {
        cout << "請輸入密碼";
        cin >> password;
        if(password ==123456){
            cout<<"welcome \n";
            break;
        }
         
        if(round ==3) {
            cout<<"輸入密碼已超過三次，請通知管理員 \n";
            break;
        } 
        round++;
    }
    return 0;
}